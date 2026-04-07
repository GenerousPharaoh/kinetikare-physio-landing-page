type GtagCommand = 'config' | 'event' | 'js' | 'set' | 'consent';

interface GtagEventParams {
  send_to?: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  transaction_id?: string;
  transport_type?: 'beacon' | 'xhr' | 'image';
  event_callback?: () => void;
  [key: string]: unknown;
}

interface Window {
  gtag: (
    command: GtagCommand,
    targetOrAction: string | Date,
    params?: GtagEventParams | Record<string, unknown>
  ) => void;
  dataLayer: Array<unknown>;
}
