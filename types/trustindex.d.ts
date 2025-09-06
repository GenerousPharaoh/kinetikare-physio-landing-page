// Type declarations for Trustindex widget
declare global {
  interface Window {
    Trustindex?: {
      loadFromElement: (element: HTMLElement | null, force?: boolean) => void;
    };
  }
}

export {};