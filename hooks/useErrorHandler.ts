'use client';

import { useCallback } from 'react';
import { errorLogger } from '@/lib/error-logger';

interface UseErrorHandlerOptions {
  component?: string;
  silent?: boolean;
}

/**
 * Custom hook for consistent error handling across components
 */
export function useErrorHandler(options: UseErrorHandlerOptions = {}) {
  const { component = 'Unknown', silent = false } = options;

  const handleError = useCallback((error: Error | unknown, context?: Record<string, any>) => {
    const errorObj = error instanceof Error ? error : new Error(String(error));
    
    // Log the error
    errorLogger.logError(errorObj, {
      component,
      ...context,
    });

    // Show user-friendly message unless silent
    if (!silent) {
      // You can customize this based on your UI needs
      console.error(`Error in ${component}:`, errorObj.message);
    }

    // Re-throw in development for easier debugging
    if (process.env.NODE_ENV === 'development') {
      throw errorObj;
    }
  }, [component, silent]);

  const handleAsyncError = useCallback(async <T,>(
    asyncFn: () => Promise<T>,
    context?: Record<string, any>
  ): Promise<T | undefined> => {
    try {
      return await asyncFn();
    } catch (error) {
      handleError(error, context);
      return undefined;
    }
  }, [handleError]);

  return { handleError, handleAsyncError };
}

/**
 * Wrapper for form submission with error handling
 */
export function useFormErrorHandler(formName: string) {
  const { handleError } = useErrorHandler({ component: `${formName}_form` });

  const handleFormError = useCallback((fieldName: string, error: Error | string) => {
    const errorMessage = error instanceof Error ? error.message : error;
    errorLogger.logFormError(formName, fieldName, errorMessage);
  }, [formName]);

  const handleSubmitError = useCallback((error: Error | unknown) => {
    handleError(error, { formEvent: 'submit' });
  }, [handleError]);

  return { handleFormError, handleSubmitError };
}