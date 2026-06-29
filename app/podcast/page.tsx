'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PodcastPage() {
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
        setMsg("You\u2019re on the list. See you in the movies.");
        setMsgColor('var(--text-muted)');
        setName('');
        setEmail('');
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
    <div id="page-podcast" className="page">

      {/* Hero */}
      <section className="disc-hero" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(45, 45, 45, 0.9) 0%, rgba(20, 20, 20, 0.95) 50%, #050505 100%)'
      }}>
        <div className="disc-hero-inner">
          <Link href="/" className="disc-hero-back">&#8592; THE CLUB</Link>
          <div className="disc-hero-kicker" style={{ color: 'var(--white)' }}>The Club Podcast</div>
          <h1 className="disc-hero-title">THE<br />PODCAST</h1>
          <p className="disc-hero-desc">Learn. Connect. Grow.</p>
          <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '2rem' }}>Hosted by The Club Core</div>
        </div>
      </section>

      {/* About - The Show & One Offs */}
      <section className="section">
        <div className="section-inner">
          <div className="podcast-about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1.5rem' }}>The Show</div>
              <div style={{ fontSize: 'clamp(24px,2.5vw,32px)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--white)', marginBottom: '1.5rem', lineHeight: 1.2 }}>Knowledge Shouldn&apos;t Retire.</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8 }}>The Club Podcast is where experience meets platform. We sit down with the people who have built careers in live production — sound engineers, lighting designers, video directors, riggers, stagehands, and everyone in between — and we let them talk. Not about us. About them. Their work. Their craft. What they&apos;ve learned. What the industry needs to hear.</p>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1.5rem' }}>One Offs</div>
              <div style={{ fontSize: 'clamp(24px,2.5vw,32px)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--white)', marginBottom: '1.5rem', lineHeight: 1.2 }}>In the room where it happens.</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8 }}>One Offs are short-form interviews captured on location — at shows, venues, and events. No studio. No script. Just a conversation with someone doing the work right now. The goal is the same as always: build their platform, not ours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="section-inner">
          <div style={{ background: 'var(--panel-a)', border: '1px solid var(--border)', padding: '4rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Be the First to Know</div>
            <div style={{ fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.2 }}>The first episode is closer than you think.</div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>Drop your email and we&apos;ll let you know when we go live.</p>
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
                {submitting ? '...' : 'Notify Me'}
              </button>
            </form>
            {msg && (
              <div style={{ fontSize: '13px', color: msgColor, marginTop: '1.5rem' }}>{msg}</div>
            )}
          </div>
        </div>
      </section>

      {/* Episode Placeholder */}
      <section className="section">
        <div className="section-inner">
          <div style={{ border: '1px solid var(--border)', padding: '5rem 2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--white)', opacity: 0.3 }}>Episodes Dropping Soon</div>
          </div>
        </div>
      </section>

      {/* Sub-footer */}
      <footer style={{ padding: '3rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" className="footer-link">&#8592; Back to The Club</Link>
          <span style={{ fontSize: '13px', color: 'var(--white)' }}>The Podcast</span>
        </div>
      </footer>
    </div>
  );
}
