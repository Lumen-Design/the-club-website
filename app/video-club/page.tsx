'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function VideoClub() {
  const [bioOpen, setBioOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBioOpen(false);
    };
    if (bioOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [bioOpen]);

  return (
    <>
      {/* Hero */}
      <section
        className="disc-hero"
        style={{ background: 'linear-gradient(135deg, #050505 0%, #1A000D 100%)' }}
      >
        <img
          src="/images/Video Page.jpg"
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.2,
            zIndex: 0,
          }}
        />
        <div className="disc-accent-bar" style={{ background: 'var(--video)' }} />
        <div className="disc-hero-inner">
          <Link href="/" className="disc-hero-back">
            &larr; THE CLUB
          </Link>
          <div className="disc-hero-kicker" style={{ color: 'var(--video)' }}>
            Video Club
          </div>
          <h1 className="disc-hero-title">
            Video<br />
            <span style={{ color: 'var(--video)' }}>Club</span>
          </h1>
          <p className="disc-hero-desc">
            Broadcast, IMAG, live streaming, switching, and camera direction. Built for the broadcast floor and the arena stage.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label" style={{ color: 'var(--video)' }}>What We Do</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}>
            <div style={{ background: 'var(--panel-a)', padding: '2rem' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--video)',
                  marginBottom: '0.75rem',
                }}
              >
                Broadcast &amp; IMAG
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Broadcast control, IMAG direction, and multi-camera production for live events.
              </p>
            </div>
            <div style={{ background: 'var(--panel-a)', padding: '2rem' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--video)',
                  marginBottom: '0.75rem',
                }}
              >
                Live Streaming
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                End-to-end streaming solutions, encoding, and distribution for any audience size.
              </p>
            </div>
            <div style={{ background: 'var(--panel-a)', padding: '2rem' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--video)',
                  marginBottom: '0.75rem',
                }}
              >
                Camera Direction
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Multi-camera direction, operator coordination, and shot calling for live events of any scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Representative */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">The Representative</p>
          <div
            className="rep-detail-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1px', background: 'var(--border)' }}
          >
            <div className="rep-card">
              <img
                src="/images/Video.jpg"
                alt="Blake Potter"
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  marginBottom: '1.5rem',
                }}
              />
              <div className="rep-club" style={{ color: 'var(--video)' }}>
                Video Club &middot; The Club Core
              </div>
              <div className="rep-name">Blake Potter</div>
              <div className="rep-role">Founder &middot; Video Director</div>
              <button className="rep-bio-btn" onClick={() => setBioOpen(true)}>
                Read Bio
              </button>
            </div>
            <div className="rep-bio-panel" style={{ background: 'var(--panel-a)', padding: '2.5rem' }}>
              <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)' }}>
                Blake has spent 17 years running lights, switching video, production managing, and leading teams across two sides of the industry — live events and installations. He&apos;s worked alongside design firms on infrastructure projects for spaces like Germantown Baptist Church, and run live productions ranging from houses of worship to festival-scale video direction, both as an operator and as a production manager.
                <br /><br />
                He&apos;s a team leader who moves fluidly between disciplines, bringing hands-on technical experience and the broader perspective that comes from having sat in nearly every seat on a production.
                <br /><br />
                The Club made sense to Blake because too many skilled people in this industry are disconnected — surviving gig to gig with no real infrastructure beneath them. He&apos;s wanted to build something that changes that for a long time. The Club is that thing: a place where people actively create paths for each other, not just for themselves.
                <br /><br />
                Outside the work, Blake is home with his wife and four kids — watching movies, playing in the pool, and making memories that matter more than any show.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Modal Overlay (mobile) */}
      {bioOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setBioOpen(false)}
        >
          <div
            style={{
              background: '#0A0A0A',
              border: '1px solid #1A1A1A',
              padding: '2.5rem',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto' as const,
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setBioOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '20px',
                color: '#666',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                lineHeight: 1,
              }}
            >
              &times;
            </button>
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--video)',
                  marginBottom: '0.5rem',
                }}
              >
                Video Club &middot; The Club Core
              </div>
              <div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '0.25rem' }}>
                Blake Potter
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Founder &middot; Video Director
              </div>
            </div>
            <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)' }}>
              Blake has spent 17 years running lights, switching video, production managing, and leading teams across two sides of the industry — live events and installations. He&apos;s worked alongside design firms on infrastructure projects for spaces like Germantown Baptist Church, and run live productions ranging from houses of worship to festival-scale video direction, both as an operator and as a production manager.
              <br /><br />
              He&apos;s a team leader who moves fluidly between disciplines, bringing hands-on technical experience and the broader perspective that comes from having sat in nearly every seat on a production.
              <br /><br />
              The Club made sense to Blake because too many skilled people in this industry are disconnected — surviving gig to gig with no real infrastructure beneath them. He&apos;s wanted to build something that changes that for a long time. The Club is that thing: a place where people actively create paths for each other, not just for themselves.
              <br /><br />
              Outside the work, Blake is home with his wife and four kids — watching movies, playing in the pool, and making memories that matter more than any show.
            </p>
          </div>
        </div>
      )}

      {/* Sub-footer */}
      <footer style={{ padding: '3rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" className="footer-link">
            &larr; Back to The Club
          </Link>
          <span style={{ fontSize: '13px', color: 'var(--video)' }}>Video Club</span>
        </div>
      </footer>
    </>
  );
}
