import { useState, type FormEvent } from 'react';

import { pushDataLayer } from '../../lib/analytics';

type Status = { type: 'idle' | 'loading' | 'success' | 'error'; message: string };

export default function ContactForm({ endpoint }: { endpoint: string }) {
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' });

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return;

    setStatus({ type: 'loading', message: 'Enviando solicitud…' });
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: data.get('name'),
          email: data.get('email'),
          empresa: data.get('company'),
          telefono: data.get('phone'),
          mensaje: data.get('message'),
          consentimiento: data.get('consent') === 'on',
          source: window.location.pathname,
        }),
      });
      if (!response.ok) throw new Error('Request failed');
      form.reset();
      setStatus({ type: 'success', message: 'Recibimos tu solicitud. Te contactaremos para revisar el siguiente paso.' });
      pushDataLayer({ event: 'contact_form_submit', form_id: 'contact', status: 'success' });
      pushDataLayer({ event: 'generate_lead', method: 'contact_form' });
    } catch {
      setStatus({ type: 'error', message: 'No pudimos enviar la solicitud. Intenta de nuevo en unos minutos.' });
      pushDataLayer({ event: 'contact_form_submit', form_id: 'contact', status: 'error' });
    }
  };

  return (
    <form className="contact-form" onSubmit={submit} onFocus={() => pushDataLayer({ event: 'contact_form_start', form_id: 'contact' })}>
      <div className="form-grid">
        <label>Nombre<input name="name" autoComplete="name" required minLength={2} /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Empresa<input name="company" autoComplete="organization" /></label>
        <label>Teléfono (opcional)<input name="phone" type="tel" autoComplete="tel" /></label>
      </div>
      <label>Mensaje<textarea name="message" required minLength={20} rows={6} /></label>
      <label className="honeypot" aria-hidden="true">Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent"><input name="consent" type="checkbox" required /> <span>Autorizo el tratamiento de mis datos para responder esta solicitud según la <a href="/politica-privacidad/">política de privacidad</a>.</span></label>
      <button type="submit" disabled={status.type === 'loading'}>Enviar solicitud</button>
      <p role="status" className={`form-status ${status.type}`}>{status.message}</p>
    </form>
  );
}
