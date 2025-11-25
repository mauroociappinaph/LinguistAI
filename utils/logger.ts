/**
 * Logger utility para manejo consistente de logs
 * Oculta logs de debug/info en producción automáticamente
 */

const isProduction = import.meta.env.PROD;

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private shouldLog(level: LogLevel): boolean {
    if (isProduction) {
      // En producción solo mostrar warnings y errores
      return level === 'warn' || level === 'error';
    }
    return true;
  }

  info(message: string, ...args: any[]) {
    if (this.shouldLog('info')) {
      console.log(`[INFO] ${message}`, ...args);
    }
  }

  warn(message: string, ...args: any[]) {
    if (this.shouldLog('warn')) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  }

  error(message: string, ...args: any[]) {
    if (this.shouldLog('error')) {
      console.error(`[ERROR] ${message}`, ...args);
    }
  }

  debug(message: string, ...args: any[]) {
    if (this.shouldLog('debug')) {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  }
}

export const logger = new Logger();
