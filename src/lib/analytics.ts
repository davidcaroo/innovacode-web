export type AnalyticsEvent =
  | { event: 'quote_start'; project_type: string }
  | { event: 'quote_complete'; project_type: string; quote_value: number; currency: 'COP' }
  | { event: 'contact_form_start'; form_id: 'contact' }
  | { event: 'contact_form_submit'; form_id: 'contact'; status: 'success' | 'error' }
  | { event: 'generate_lead'; method: 'contact_form' }
  | { event: 'whatsapp_click'; location: string }
  | { event: 'email_click'; location: string }
  | { event: 'phone_click'; location: string }
  | { event: 'case_study_view'; case_slug: string };

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export const pushDataLayer = (event: AnalyticsEvent): void => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
};
