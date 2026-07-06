'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '' // honeypot — must stay empty
  });

  const [formStatus, setFormStatus] = useState({
    type: '', // 'success' or 'error'
    text: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: '', text: '' });

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormStatus({
        type: 'error',
        text: 'Please fill out all required fields.'
      });
      return;
    }

    if (!validateEmail(email.trim())) {
      setFormStatus({
        type: 'error',
        text: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await res.json().catch(() => ({}));

      if (res.ok && result.ok) {
        setFormStatus({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully. We will get back to you shortly.'
        });
        setFormData({ name: '', email: '', phone: '', message: '', company: '' });
      } else {
        setFormStatus({
          type: 'error',
          text: result.error || 'Something went wrong. Please try again.'
        });
      }
    } catch {
      setFormStatus({
        type: 'error',
        text: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Connect."
        accent="Create Value Together."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section>
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Info + Interior Image */}
            <div className="contact-info-col reveal">
              <div>
                <p className="section-description" style={{ maxWidth: '100%', marginBottom: '40px' }}>
                  Reach out to us for any inquiries or to discuss how we can help you achieve your business goals.
                </p>

                {/* Contact Items List */}
                <div className="contact-details">
                  {/* Location */}
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <h4>Mumbai (Head Office)</h4>
                      <p>One BKC, Bandra Kurla Complex, Mumbai - 400051, India</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <h4>Phone Number</h4>
                      <p><a href="tel:+912235016500">+91 22 3501 6500</a></p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <h4>Email Address</h4>
                      <p><a href="mailto:connect@goatassets.com">connect@goatassets.com</a></p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <h4>Office Hours</h4>
                      <p>Monday &ndash; Friday, 9:30am &ndash; 6:30pm IST</p>
                    </div>
                  </div>

                  {/* Socials */}
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <div className="contact-item-content">
                      <h4>Social Media</h4>
                      <p><a href="https://linkedin.com/company/goat-assets" target="_blank" rel="noopener noreferrer">linkedin.com/company/goat-assets</a></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office location map */}
              <div className="contact-map">
                <iframe
                  title="GOAT Assets office location — One BKC, Mumbai"
                  src="https://www.google.com/maps?q=One%20BKC%2C%20Bandra%20Kurla%20Complex%2C%20Mumbai&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Right Column: Minimal Premium Contact Form */}
            <div className="contact-form-container reveal reveal-delay-2">
              <h3 className="contact-form-title">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot — hidden from users, catches bots */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                  <label htmlFor="company">Company (leave blank)</label>
                  <input
                    type="text"
                    id="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Name Input */}
                <div className="form-group">
                  <input 
                    type="text" 
                    id="name" 
                    className="form-input" 
                    placeholder=" " 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                  <label htmlFor="name" className="form-label">Your Name *</label>
                </div>

                {/* Email Input */}
                <div className="form-group">
                  <input 
                    type="email" 
                    id="email" 
                    className="form-input" 
                    placeholder=" " 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                  <label htmlFor="email" className="form-label">Email Address *</label>
                </div>

                {/* Phone Input */}
                <div className="form-group">
                  <input 
                    type="tel" 
                    id="phone" 
                    className="form-input" 
                    placeholder=" " 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                </div>

                {/* Message Textarea */}
                <div className="form-group">
                  <textarea 
                    id="message" 
                    className="form-input" 
                    placeholder=" " 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <label htmlFor="message" className="form-label">Your Message *</label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
                </button>

                {/* Form status notification */}
                {formStatus.text && (
                  <div className={`form-status ${formStatus.type}`} aria-live="polite">
                    {formStatus.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
