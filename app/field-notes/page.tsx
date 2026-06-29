'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FieldNotesPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [msgColor, setMsgColor] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      });
      if (res.ok) {
        setMsg("You\u2019re in. Check your inbox to confirm.");
        setMsgColor('#A8FF00');
        setEmail('');
        setName('');
      } else {
        setMsg('Something went wrong. Try again.');
        setMsgColor('#FF0088');
      }
    } catch (err) {
      setMsg('Something went wrong. Try again.');
      setMsgColor('#FF0088');
    }
    setSubmitting(false);
  }

  return (
    <div id="page-field-notes" className="page">

      {/* Hero */}
      <section className="disc-hero" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.04) 0%, #050505 70%)'
      }}>
        <div className="disc-hero-inner">
          <Link href="/" className="disc-hero-back">&#8592; THE CLUB</Link>
          <div className="disc-hero-kicker" style={{ color: 'var(--white)' }}>FIELD NOTES</div>
          <h1 className="disc-hero-title">THE<br />FIELD NOTES</h1>
          <p className="disc-hero-desc">Member stories. Industry insight. From the people doing the work.</p>
        </div>
      </section>

      {/* Subscribe Form */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="section-inner">
          <div style={{
            background: 'var(--panel-a)',
            border: '1px solid var(--border)',
            padding: '4rem',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1.5rem'
            }}>JOIN THE CONVERSATION</div>
            <div style={{
              fontSize: 'clamp(22px,2.5vw,30px)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: 'var(--white)',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>Field Notes lands in your inbox.</div>
            <p style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '2.5rem'
            }}>Stories and insight from Club members. No filler.</p>
            <form onSubmit={handleSubmit} style={{ maxWidth: '480px', margin: '0 auto' }}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="showcase-input"
                style={{ marginBottom: 0, borderRadius: '2px 2px 0 0' }}
              />
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="showcase-input"
                style={{ marginBottom: 0, borderRadius: 0 }}
              />
              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: '100%',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '14px 24px',
                  background: 'transparent',
                  color: 'var(--white)',
                  border: '1px solid var(--white)',
                  borderRadius: '0 0 2px 2px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = '#050505'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--white)'; }}
              >
                {submitting ? '...' : 'Subscribe'}
              </button>
            </form>
            {msg && (
              <div style={{ fontSize: '13px', color: msgColor, marginTop: '1.5rem' }}>{msg}</div>
            )}
          </div>
        </div>
      </section>

      {/* Read the Latest */}
      <section className="section">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <a
            href="https://the-club-community.beehiiv.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '14px 32px',
              background: 'transparent',
              color: 'var(--white)',
              border: '1px solid var(--white)',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = '#050505'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--white)'; }}
          >
            Read the Latest
          </a>
        </div>
      </section>

      {/* Sub-footer */}
      <footer style={{ padding: '3rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" className="footer-link">&#8592; Back to The Club</Link>
          <span style={{ fontSize: '13px', color: 'var(--white)' }}>Field Notes</span>
        </div>
      </footer>
    </div>
  );
}
