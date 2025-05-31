/**
 * Simple error logging utility that integrates with Google Analytics
 * and provides consistent error tracking across the application
 */

interface ErrorLogData {
  message: string;
  stack?: string;
  component?: string;
  url?: string;
  userAgent?: string;
  timestamp?: string;
  [key: string]: any;
}

class ErrorLogger {
  private static instance: ErrorLogger;

  private constructor() {}

  static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger();
    }
    return ErrorLogger.instance;
  }

  /**
   * Log an error to Google Analytics
   */
  logToAnalytics(error: Error | string, fatal: boolean = false): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const errorMessage = error instanceof Error ? error.message : error;
      
      (window as any).gtag('event', 'exception', {
        description: errorMessage,
        fatal: fatal,
      });
    }
  }

  /**
   * Log a custom event with error details
   */
  logCustomEvent(eventName: string, errorData: ErrorLogData): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        error_message: errorData.message,
        error_component: errorData.component || 'unknown',
        error_url: errorData.url || window.location.href,
        ...errorData,
      });
    }
  }

  /**
   * Log form errors
   */
  logFormError(formName: string, fieldName: string, errorMessage: string): void {
    this.logCustomEvent('form_error', {
      message: errorMessage,
      component: `${formName}_form`,
      field: fieldName,
    });
  }

  /**
   * Log API errors
   */
  logApiError(endpoint: string, statusCode: number, errorMessage: string): void {
    this.logCustomEvent('api_error', {
      message: errorMessage,
      component: 'api',
      endpoint: endpoint,
      status_code: statusCode,
    });
  }

  /**
   * Log navigation errors
   */
  logNavigationError(targetUrl: string, errorMessage: string): void {
    this.logCustomEvent('navigation_error', {
      message: errorMessage,
      component: 'navigation',
      target_url: targetUrl,
    });
  }

  /**
   * Comprehensive error logging
   */
  logError(error: Error, context?: { component?: string; [key: string]: any }): void {
    const errorData: ErrorLogData = {
      message: error.message,
      stack: error.stack,
      component: context?.component,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      timestamp: new Date().toISOString(),
      ...context,
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', errorData);
    }

    // Log to Analytics
    this.logToAnalytics(error, false);

    // Log custom event with full details
    this.logCustomEvent('application_error', errorData);
  }
}

// Export singleton instance
export const errorLogger = ErrorLogger.getInstance();