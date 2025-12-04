/**
 * Abort Helper
 * Utility for handling request cancellation and timeouts
 */

export class AbortHelper {
  private controller: AbortController;
  private timeoutId: NodeJS.Timeout | null = null;

  constructor(timeoutMs?: number) {
    this.controller = new AbortController();
    
    if (timeoutMs) {
      this.timeoutId = setTimeout(() => {
        this.abort('Request timeout');
      }, timeoutMs);
    }
  }

  get signal(): AbortSignal {
    return this.controller.signal;
  }

  abort(reason?: string): void {
    this.controller.abort(reason);
    this.cleanup();
  }

  cleanup(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  isAborted(): boolean {
    return this.controller.signal.aborted;
  }
}

/**
 * Create an abort signal with timeout
 */
export function createTimeoutSignal(timeoutMs: number): AbortSignal {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeoutMs);
  return controller.signal;
}

/**
 * Check if an error is an abort error
 */
export function isAbortError(error: unknown): boolean {
  return error instanceof Error && error.name === 'AbortError';
}

/**
 * Wrap a promise with abort capability
 */
export async function withAbort<T>(
  promise: Promise<T>,
  signal: AbortSignal
): Promise<T> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException('Aborted', 'AbortError'));
      return;
    }

    const abortHandler = () => {
      reject(new DOMException('Aborted', 'AbortError'));
    };

    signal.addEventListener('abort', abortHandler, { once: true });

    promise
      .then(resolve)
      .catch(reject)
      .finally(() => {
        signal.removeEventListener('abort', abortHandler);
      });
  });
}

export default AbortHelper;

