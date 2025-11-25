/**
 * Proxy fetch: Llama al backend proxy en lugar de usar el SDK directamente
 * Las API keys están protegidas en el servidor backend
 */

/**
 * Proxy fetch: Llama al backend proxy en lugar de usar el SDK directamente
 * Las API keys están protegidas en el servidor backend
 */

// Fix BUG-007: Configuración dinámica y validación de URL
const BACKEND_PROXY_URL = (() => {
  // En Vite usamos import.meta.env, pero mantenemos compatibilidad con process.env por si acaso
  const url = import.meta.env.VITE_BACKEND_PROXY_URL || 'http://localhost:3001';

  // En producción, idealmente deberíamos exigir que la variable esté definida
  if (import.meta.env.PROD && !import.meta.env.VITE_BACKEND_PROXY_URL) {
    console.warn('VITE_BACKEND_PROXY_URL not set in production, defaulting to localhost:3001');
  }

  // Asegurar que no termine en slash para evitar dobles slashes
  return url.replace(/\/$/, '');
})();

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  timeout?: number;
  retries?: number;
}

// Fix BUG-008: Retry logic, timeout y error handling robusto
export const proxyFetch = async <T = unknown>(
  endpoint: string,
  body: T,
  options: FetchOptions = {}
) => {
  const { timeout = 30000, retries = 3 } = options;

  // Validar body serializable
  try {
    JSON.stringify(body);
  } catch (error) {
    throw new Error('Request body is not serializable');
  }

  let lastError: Error | null = null;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(`${BACKEND_PROXY_URL}${endpoint}`, {
        method: options.method || 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          error: response.statusText
        }));

        // Si es error del cliente (4xx), no reintentar (excepto 429 Too Many Requests)
        if (response.status >= 400 && response.status < 500 && response.status !== 429) {
          throw new Error(errorData.error || `Client error: ${response.status} ${response.statusText}`);
        }

        throw new Error(errorData.error || `Proxy error: ${response.status} ${response.statusText}`);
      }

      return await response.json() as T;
    } catch (error: any) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // No reintentar si fue abortado por el usuario (no por timeout)
      if (error.name === 'AbortError' && !error.message.includes('aborted')) {
         // Si fue nuestro timeout, el mensaje suele ser diferente o podemos inferirlo
      }

      // No reintentar errores de cliente fatales
      if (lastError.message.startsWith('Client error')) {
        throw lastError;
      }

      console.warn(`Attempt ${attempt + 1}/${retries} failed: ${lastError.message}`);

      // Esperar antes de reintentar (backoff exponencial: 1s, 2s, 4s...)
      if (attempt < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt)));
      }
    }
  }

  throw lastError || new Error('Request failed after retries');
};

