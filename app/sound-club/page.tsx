'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SoundClub() {
  const [bioModalOpen, setBioModalOpen] = useState(false);

  function openRepBioModal() {
    setBioModalOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeRepBioModal() {
    setBioModalOpen(false);
    document.body.style.overflow = '';
  }

  return (
    <>
      {/* Hero */}
      <section
        className="disc-hero"
        style={{ background: 'linear-gradient(135deg,#050505 0%,#000A1F 100%)' }}
      >
        <img
          src="/images/Sound.JPEG"
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
        <div className="disc-accent-bar" style={{ background: 'var(--sound)' }} />
        <div className="disc-hero-inner">
          <Link
            href="/"
            className="disc-hero-back"
            style={{ textDecoration: 'none' }}
          >
            &larr; THE CLUB
          </Link>
          <div className="disc-hero-kicker" style={{ color: 'var(--sound)' }}>
            Sound Club
          </div>
          <h1 className="disc-hero-title">
            Sound<br />
            <span style={{ color: 'var(--sound)' }}>Club</span>
          </h1>
          <p className="disc-hero-desc">
            Audio engineering at every scale. FOH mixing, system design, RF coordination,
            and playback &mdash; built for the demands of professional production.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label" style={{ color: 'var(--sound)' }}>
            What We Do
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '1px',
              background: 'var(--border)',
            }}
          >
            <div style={{ background: 'var(--panel-a)', padding: '2rem' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--sound)',
                  marginBottom: '0.75rem',
                }}
              >
                FOH Mixing
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}
              >
                Front-of-house engineering for live events, tours, and corporate
                productions.
              </p>
            </div>
            <div style={{ background: 'var(--panel-a)', padding: '2rem' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--sound)',
                  marginBottom: '0.75rem',
                }}
              >
                System Design
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}
              >
                Permanent and temporary audio system architecture from specification to
                commissioning.
              </p>
            </div>
            <div style={{ background: 'var(--panel-a)', padding: '2rem' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--sound)',
                  marginBottom: '0.75rem',
                }}
              >
                RF &amp; Playback
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}
              >
                RF coordination, IEM systems, and multi-track playback for complex
                productions.
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
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '1px',
              background: 'var(--border)',
            }}
          >
            <div className="rep-card">
              <div
                className="rep-avatar"
                style={{
                  background: 'rgba(0,102,255,0.15)',
                  color: 'var(--sound)',
                }}
              >
                SC
              </div>
              <div className="rep-club" style={{ color: 'var(--sound)' }}>
                Sound Club
              </div>
              <div className="rep-name">&mdash; &mdash;</div>
              <div className="rep-role">Founder &middot; Audio Director</div>
              <button className="rep-bio-btn" onClick={openRepBioModal}>
                Read Bio
              </button>
            </div>
            <div
              className="rep-bio-panel"
              style={{ background: 'var(--panel-a)', padding: '2.5rem' }}
            >
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.65)',
                }}
              >
                Joshua Wright &middot; Bio coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Footer */}
      <footer
        style={{
          padding: '3rem 2rem',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            className="footer-link"
            style={{ textDecoration: 'none' }}
          >
            &larr; Back to The Club
          </Link>
          <span style={{ fontSize: '13px', color: 'var(--sound)' }}>
            Sound Club
          </span>
        </div>
      </footer>

      {/* Bio Modal Overlay */}
      {bioModalOpen && (
        <div
          id="bio-modal-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeRepBioModal();
          }}
        >
          <div
            style={{
              background: '#0A0A0A',
              border: '1px solid #1A1A1A',
              width: '90vw',
              maxWidth: '600px',
              maxHeight: '85vh',
              overflowY: 'auto' as const,
              borderRadius: '2px',
              padding: '3rem',
              position: 'relative',
            }}
          >
            <button
              onClick={closeRepBioModal}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                fontSize: '20px',
                color: '#666',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
              }}
            >
              &times;
            </button>
            <div
              style={{
                fontSize: 'clamp(24px,3vw,36px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: 'var(--white)',
                marginBottom: '0.5rem',
              }}
            >
              Joshua Wright
            </div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: 'var(--sound)',
                marginBottom: '0.5rem',
              }}
            >
              Sound Club
            </div>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
              }}
            >
              Founder &middot; Audio Director
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.8,
              }}
            >
              Joshua Wright &middot; Bio coming soon.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
