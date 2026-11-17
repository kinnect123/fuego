import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { revealGroupVariants, revealItemVariants } from './motionVariants';

export function ContactSection() {
  const [status, setStatus] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const fields = new FormData(form);
    const subject = `Procurement inquiry from ${fields.get('name')}`;
    const body = [
      `Name: ${fields.get('name')}`,
      `Organization / Department: ${fields.get('organization')}`,
      `Business email: ${fields.get('email')}`,
      `Telephone: ${fields.get('telephone')}`,
      '',
      `Message: ${fields.get('message') || 'No message provided.'}`,
    ].join('\n');

    setStatus('Opening your email app to send this inquiry.');
    window.location.href = `mailto:info@chisingatrading.mw?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-layout content-width"
        variants={revealGroupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="contact-details" variants={revealItemVariants}>
          <h2 className="contact-title">Contact Us</h2>
          <div className="office-card">
            <h3>Lilongwe Corporate Office</h3>
            <div className="office-rule" />
            <p className="office-item">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></svg>
              <span><b>Physical Location:</b><br />Area 43 Mango Crescent, Lilongwe, Republic of Malawi</span>
            </p>
            <p className="office-item">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h3l2 5-2 2a15 15 0 0 0 4 4l2-2 5 2v3c0 1-1 2-2 2C10 19 5 14 4 5c0-1 1-2 3-2Z" /></svg>
              <span><b>Commercial Inquiries :</b><br /><a href="tel:+265885817985">+265 885 817 985</a></span>
            </p>
            <p className="office-item">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
              <span><b>Official Email:</b><br /><a href="mailto:info@chisingatrading.mw">info@chisingatrading.mw</a></span>
            </p>
          </div>
        </motion.div>

        <motion.form className="contact-form" onSubmit={handleSubmit} variants={revealItemVariants}>
          <h2>Get in touch.</h2>
          <div className="form-grid">
            <label>
              Contact Full Name <span>*</span>
              <input name="name" type="text" placeholder="e.g. Konwani Phiri" autoComplete="name" required />
            </label>
            <label>
              Organization / Department <span>*</span>
              <input name="organization" type="text" placeholder="e.g. Ministry / Corporate Entity" required />
            </label>
            <label>
              Business Email <span>*</span>
              <input name="email" type="email" placeholder="procurement@organisation.mw" autoComplete="email" required />
            </label>
            <label>
              Telephone Contact <span>*</span>
              <input name="telephone" type="tel" placeholder="+265 99X XXX XXX" autoComplete="tel" required />
            </label>
          </div>
          <label className="message-label">
            Message
            <textarea name="message" rows={4} placeholder="Specify technical requirements, tender reference, delivery location, or timeline..." />
          </label>
          <button className="send-button" type="submit">
            Send <span aria-hidden="true">→</span>
          </button>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </motion.form>
      </motion.div>
    </section>
  );
}
