export class Logger {
  private static isDevelopmentMode(): boolean {
    return process.env.NODE_ENV === 'development'
  }

  static devError(errorOrigin: string, ...msg: unknown[]) {
    if (this.isDevelopmentMode()) console.error('[ERROR] - |', errorOrigin.toUpperCase(), '|', ...msg)
  }

  static devWarn(warnOrigin: string, ...msg: unknown[]) {
    if (this.isDevelopmentMode()) console.warn('!![WARNING] - |', warnOrigin.toUpperCase(), '|', ...msg)
  }

  static error(errorOrigin: string, ...msg: unknown[]) {
    console.error('[ERROR] - |', errorOrigin.toUpperCase(), '|', ...msg)
  }

  static log(logOrigin: string, ...msg: unknown[]) {
    console.log('* [LOG] - |', logOrigin.toUpperCase(), '|', ...msg)
  }
}
