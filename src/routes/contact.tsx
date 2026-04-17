import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const socialLinks = [
  {
    platform: 'GitHub',
    handle: '@maravasile',
    url: 'https://github.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    platform: 'LinkedIn',
    handle: 'Mara Vasile',
    url: 'https://linkedin.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    platform: 'Dribbble',
    handle: '@maravasile',
    url: 'https://dribbble.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.073c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.176zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.807 0-1.59.098-2.4.288zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.386z"/>
      </svg>
    ),
  },
  {
    platform: 'Email',
    handle: 'hello@maravasile.com',
    url: 'mailto:hello@maravasile.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
]

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (submitted) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '8rem', paddingBottom: '8rem', textAlign: 'center' }} className="px-site">
        <div style={{ width: 64, height: 64, border: '1px solid var(--gold-dim)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: 'var(--gold)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h2 className="font-display" style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--cream)', marginBottom: '1rem' }}>
          Message received.
        </h2>
        <p style={{ color: 'var(--cream-dim)', fontSize: '1rem', fontWeight: 300, marginBottom: '2.5rem' }}>
          Thank you for reaching out. A response will follow within 1–2 business days.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-gold">
          Send Another
        </button>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-site">
      {/* Header */}
      <div style={{ paddingTop: '5rem', paddingBottom: '4rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <p className="section-label anim-fade-up" style={{ marginBottom: '1.25rem' }}>Contact</p>
        <h1
          className="font-display anim-fade-up anim-delay-1"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            color: 'var(--cream)',
            margin: 0,
          }}
        >
          Let's build<br />
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>something</em><br />
          together.
        </h1>
      </div>

      {/* Two-column layout */}
      <div
        className="contact-grid anim-fade-up anim-delay-2"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '5rem',
          paddingTop: '4rem',
          paddingBottom: '6rem',
          alignItems: 'start',
        }}
      >
        {/* Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={(e) => {
            e.preventDefault()
            setLoading(true)
            const form = e.currentTarget
            const formData = new FormData(form)
            fetch('/contact.html', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
            })
              .then(() => setSubmitted(true))
              .finally(() => setLoading(false))
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-field">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" required className="form-input" placeholder="Your name" />
            </div>
            <div className="form-field">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" required className="form-input" placeholder="you@example.com" />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" id="subject" name="subject" className="form-input" placeholder="Project inquiry, collaboration, etc." />
          </div>

          <div className="form-field">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={7}
              className="form-input"
              placeholder="Tell me about your project, timeline, and goals..."
              style={{ resize: 'vertical' }}
            />
          </div>

          <div>
            <button
              type="submit"
              className="btn-cream"
              disabled={loading}
              style={{ opacity: loading ? 0.6 : 1 }}
            >
              {loading ? 'Sending…' : 'Send Message'}
              {!loading && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </form>

        {/* Right: social + info */}
        <div>
          <div style={{ marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>Based In</p>
            <p style={{ color: 'var(--cream)', fontSize: '1.125rem', fontWeight: 300, margin: 0, lineHeight: 1.5 }}>
              Lisbon, Portugal<br />
              <span style={{ color: 'var(--cream-dim)', fontSize: '0.875rem' }}>Available worldwide — remote-first</span>
            </p>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>Response Time</p>
            <p style={{ color: 'var(--cream-dim)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
              Typically within 1–2 business days. For urgent matters, reach out directly via email.
            </p>
          </div>

          <div>
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>Find Me</p>
            <div>
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="social-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid var(--border-subtle)', textDecoration: 'none', color: 'var(--cream-dim)', transition: 'color 0.2s' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--cream)'
                    const arrow = e.currentTarget.querySelector('.arrow-icon') as HTMLElement
                    if (arrow) arrow.style.transform = 'translate(3px, -3px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--cream-dim)'
                    const arrow = e.currentTarget.querySelector('.arrow-icon') as HTMLElement
                    if (arrow) arrow.style.transform = 'translate(0, 0)'
                  }}
                >
                  <span style={{ color: 'var(--cream-faint)' }}>{link.icon}</span>
                  <span>
                    <span style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 400, color: 'inherit', lineHeight: 1 }}>
                      {link.platform}
                    </span>
                    <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.06em', color: 'var(--cream-faint)', lineHeight: 1, display: 'block', marginTop: '0.25rem' }}>
                      {link.handle}
                    </span>
                  </span>
                  <svg
                    className="arrow-icon"
                    style={{ marginLeft: 'auto', color: 'var(--gold)', transition: 'transform 0.2s ease' }}
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                  >
                    <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .name-email-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
