/**
 * Proxy fetch: Llama al backend proxy en lugar de usar el SDK directamente
 * Las API keys están protegidas en el servidor backend
 */

const BACKEND_PROXY_URL = process.env.BACKEND_PROXY_URL || 'http://localhost:3001';

export const proxyFetch = async (endpoint: string, body: any) => {
  const response = await fetch(`${BACKEND_PROXY_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: response.statusText }));
    throw new Error(error.error || `Proxy error: ${response.statusText}`);
  }

  return response.json();
};

