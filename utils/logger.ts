const isDebugMode = process.env.VITE_DEBUG_MODE === 'true';

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private prefix: string;

  constructor(prefix: string = 'App') {
    this.prefix = prefix;
  }

  private formatMessage(message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${this.prefix}] ${message}`;
  }

  info(message: string, ...args: any[]) {
    if (isDebugMode) {
      console.log(this.formatMessage(message), ...args);
    }
  }

  warn(message: string, ...args: any[]) {
    console.warn(this.formatMessage(message), ...args);
  }

  error(message: string, ...args: any[]) {
    console.error(this.formatMessage(message), ...args);
  }

  debug(message: string, ...args: any[]) {
    if (isDebugMode) {
      console.debug(this.formatMessage(message), ...args);
    }
  }
}

export const logger = new Logger('LinguistAI');
export const createLogger = (prefix: string) => new Logger(prefix);
