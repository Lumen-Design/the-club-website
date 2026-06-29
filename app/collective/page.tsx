'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CollectivePage() {
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
    <div id="page-collective" className="page">

      {/* Hero */}
      <section style={{
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '4rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
        background: 'radial-gradient(ellipse at 25% 60%, rgba(60, 50, 90, 0.85) 0%, rgba(20, 15, 40, 0.9) 45%, #050505 100%)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <h1 className="hero-title collective-hero-title">THE<br />COLLECTIVE</h1>
          <div style={{ marginTop: '3rem' }}>
            <p className="hero-tagline" style={{ color: '#FFFFFF', opacity: 1 }}>Independent Specialists.<br />Shared Standards. One Team.</p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', maxWidth: '480px', lineHeight: 1.7, marginTop: '2rem' }}>The Club exists to connect the people who create experiences.</p>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">Why We Exist</p>
          <h2 style={{ fontSize: 'clamp(28px,4vw,56px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '3rem', maxWidth: '1100px' }}>The best opportunities in this industry don&apos;t come from resumes. They come from relationships.</h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '700px' }}>The best projects happen when talented people find each other, trust each other, and build something together. The Club exists to make those connections easier.</p>
        </div>
      </section>

      {/* What We're Building */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">What We&apos;re Building</p>
          <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '4rem' }}>Not another production company.<br />Not another social media page.<br />Not another job board.<br />We&apos;re building a collective.</h2>
          <div className="collective-building-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'var(--border)' }}>
            <div
              style={{ background: 'var(--panel-a)', padding: '2.5rem', borderTop: '2px solid var(--border)', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseOver={(e) => { e.currentTarget.style.borderTopColor = 'var(--white)'; e.currentTarget.style.background = 'var(--panel-b)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderTopColor = 'var(--border)'; e.currentTarget.style.background = 'var(--panel-a)'; }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Showcase</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Real work. Real people. Real stories. Submitted by the community.</p>
            </div>
            <div
              style={{ background: 'var(--panel-a)', padding: '2.5rem', borderTop: '2px solid var(--border)', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseOver={(e) => { e.currentTarget.style.borderTopColor = 'var(--white)'; e.currentTarget.style.background = 'var(--panel-b)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderTopColor = 'var(--border)'; e.currentTarget.style.background = 'var(--panel-a)'; }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Conversations</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Podcasts. Interviews. Lessons learned.</p>
            </div>
            <div
              style={{ background: 'var(--panel-a)', padding: '2.5rem', borderTop: '2px solid var(--border)', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseOver={(e) => { e.currentTarget.style.borderTopColor = 'var(--white)'; e.currentTarget.style.background = 'var(--panel-b)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderTopColor = 'var(--border)'; e.currentTarget.style.background = 'var(--panel-a)'; }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Community</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Connections. Friendships. Collaboration.</p>
            </div>
            <div
              style={{ background: 'var(--panel-a)', padding: '2.5rem', borderTop: '2px solid var(--border)', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseOver={(e) => { e.currentTarget.style.borderTopColor = 'var(--white)'; e.currentTarget.style.background = 'var(--panel-b)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderTopColor = 'var(--border)'; e.currentTarget.style.background = 'var(--panel-a)'; }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Opportunity</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Projects. Partnerships. Growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Clubs */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">The Clubs</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
            <Link href="/sound-club" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{ background: 'var(--panel-a)', padding: '2.5rem', borderLeft: '6px solid var(--sound)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', transition: 'background 0.2s', gap: '2rem', flexWrap: 'wrap' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--panel-b)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--panel-a)'; }}
              >
                <div style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'var(--sound)' }}>Sound Club</div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Audio engineers. System techs. Mixers. RF specialists. Designers.</p>
              </div>
            </Link>
            <Link href="/lighting-club" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{ background: 'var(--panel-a)', padding: '2.5rem', borderLeft: '6px solid var(--light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', transition: 'background 0.2s', gap: '2rem', flexWrap: 'wrap' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--panel-b)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--panel-a)'; }}
              >
                <div style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'var(--light)' }}>Lighting Club</div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Lighting designers. Programmers. Visual designers. Creative technologists. Installers.</p>
              </div>
            </Link>
            <Link href="/video-club" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{ background: 'var(--panel-a)', padding: '2.5rem', borderLeft: '6px solid var(--video)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', transition: 'background 0.2s', gap: '2rem', flexWrap: 'wrap' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--panel-b)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--panel-a)'; }}
              >
                <div style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'var(--video)' }}>Video Club</div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Directors. Switchers. Broadcast teams. Camera operators. Content creators.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* The Next Generation */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">The Next Generation</p>
          <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '2rem' }}>Knowledge shouldn&apos;t retire.</h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '700px' }}>One thing missing from our industry is connection between generations. People retire with decades of experience. Young professionals enter with endless questions. The Club exists to bring both groups to the same table. To preserve knowledge. To share stories. To build the future together.</p>
        </div>
      </section>

      {/* Stories Worth Sharing */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">Stories Worth Sharing</p>
          <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>Behind every great project is a story.</h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '600px', marginBottom: '3rem' }}>We&apos;re building a platform to share them.</p>
          <div className="collective-stories-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)' }}>
            <div style={{ background: 'var(--panel-a)', padding: '2.5rem', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Podcast</div>
              <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '1rem' }}>The Field Notes Podcast</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>Conversations with the people behind the productions.</p>
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 10px', border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--text-muted)' }}>Coming Soon</span>
            </div>
            <div style={{ background: 'var(--panel-a)', padding: '2.5rem', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Articles</div>
              <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '1rem' }}>Spotlight</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>Lessons, insights, and perspectives from the field.</p>
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 10px', border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--text-muted)' }}>Coming Soon</span>
            </div>
            <div style={{ background: 'var(--panel-a)', padding: '2.5rem', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Member Stories</div>
              <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '1rem' }}>Member Stories</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>Profiles of the people who make this industry great.</p>
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 10px', border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--text-muted)' }}>Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '8rem 2rem', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(36px,6vw,72px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: '2rem' }}>Find your people.</h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '3rem' }}>Whether you&apos;re a freelancer, business owner, designer, engineer, programmer, technician, creative, or simply someone who loves this industry — you&apos;re welcome here.</p>
          <form onSubmit={handleSubmit} style={{ maxWidth: '480px', margin: '2rem auto 0', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '-1px', left: '-1px', width: '16px', height: '16px', borderTop: '2px solid #FFFFFF', borderLeft: '2px solid #FFFFFF' }} />
            <span style={{ position: 'absolute', top: '-1px', right: '-1px', width: '16px', height: '16px', borderTop: '2px solid #0066FF', borderRight: '2px solid #0066FF' }} />
            <span style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '16px', height: '16px', borderBottom: '2px solid #FF0088', borderLeft: '2px solid #FF0088' }} />
            <span style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '16px', height: '16px', borderBottom: '2px solid #A8FF00', borderRight: '2px solid #A8FF00' }} />
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', background: '#0A0A0A', border: 'none', borderBottom: '1px solid #1A1A1A', padding: '14px 16px', fontFamily: 'Inter,sans-serif', fontSize: '14px', color: '#FFFFFF', outline: 'none', display: 'block', marginBottom: 0 }}
            />
            <div style={{ display: 'flex', gap: 0, border: '1px solid #1A1A1A' }}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ flex: 1, background: '#0A0A0A', border: 'none', padding: '14px 16px', fontFamily: 'Inter,sans-serif', fontSize: '14px', color: '#FFFFFF', outline: 'none' }}
              />
              <button
                type="submit"
                disabled={submitting}
                style={{ background: '#FFFFFF', color: '#050505', border: 'none', padding: '14px 24px', fontFamily: 'Inter,sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', whiteSpace: 'nowrap' }}
              >
                {submitting ? '...' : 'Join The Club'}
              </button>
            </div>
            {msg && (
              <p style={{ fontSize: '12px', color: msgColor, marginTop: '0.75rem', textAlign: 'center' }}>{msg}</p>
            )}
          </form>
        </div>
      </section>

      {/* Sub-footer */}
      <footer style={{ padding: '3rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" className="footer-link">&#8592; Back to The Club</Link>
          <span style={{ fontSize: '13px', color: 'var(--white)' }}>The Collective</span>
        </div>
      </footer>
    </div>
  );
}
