'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Showcase() {
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const [submitHovered, setSubmitHovered] = useState(false);

  function openShowcaseModal(id: string) {
    setModalOpen(id);
    document.body.style.overflow = 'hidden';
  }

  function closeShowcaseModal() {
    setModalOpen(null);
    document.body.style.overflow = '';
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && modalOpen) {
        closeShowcaseModal();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  return (
    <>
      {/* Hero */}
      <section
        className="disc-hero"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(45, 45, 45, 0.9) 0%, rgba(20, 20, 20, 0.95) 50%, #050505 100%)',
        }}
      >
        <div className="disc-hero-inner">
          <Link
            href="/"
            className="disc-hero-back"
            style={{ textDecoration: 'none' }}
          >
            &larr; THE CLUB
          </Link>
          <div className="disc-hero-kicker" style={{ color: 'var(--white)' }}>
            Showcase
          </div>
          <h1 className="disc-hero-title">
            The<br />
            Showcase
          </h1>
          <p className="disc-hero-desc">
            Real work. Real people. Real craft.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScY7QKQKqqonWZBMh5TpdV_g1ftxhRU_iiryrixCjA43X9oCA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                padding: '14px 32px',
                background: submitHovered ? 'var(--white)' : 'transparent',
                color: submitHovered ? '#050505' : 'var(--white)',
                border: '1px solid var(--white)',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseOver={() => setSubmitHovered(true)}
              onMouseOut={() => setSubmitHovered(false)}
            >
              Submit Your Work
            </a>
          </div>
        </div>
      </section>

      {/* Member Work */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">Member Work</p>
          <div className="showcase-grid">
            {/* Tile 1 */}
            <div
              className="showcase-tile"
              onClick={() => openShowcaseModal('modal-showcase-001')}
            >
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#1A1A1A',
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: 'var(--white)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Main Stage Lighting Design
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Blake Potter
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase' as const,
                    color: '#A8FF00',
                  }}
                >
                  Lighting Club
                </div>
              </div>
            </div>

            {/* Tile 2 */}
            <div
              className="showcase-tile"
              onClick={() => openShowcaseModal('modal-showcase-002')}
            >
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#1A1A1A',
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: 'var(--white)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Festival FOH Mix
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
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
                    color: '#0066FF',
                  }}
                >
                  Sound Club
                </div>
              </div>
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
          <span style={{ fontSize: '13px', color: 'var(--white)' }}>
            Showcase
          </span>
        </div>
      </footer>

      {/* Showcase Modal Overlay */}
      {modalOpen && (
        <div
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
            if (e.target === e.currentTarget) closeShowcaseModal();
          }}
        >
          <div
            style={{
              background: '#0A0A0A',
              border: '1px solid #1A1A1A',
              width: '90vw',
              maxWidth: '860px',
              maxHeight: '85vh',
              overflowY: 'auto' as const,
              borderRadius: '2px',
              padding: '3rem',
              position: 'relative',
            }}
          >
            <button
              onClick={closeShowcaseModal}
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

            {/* Modal: Main Stage Lighting Design */}
            {modalOpen === 'modal-showcase-001' && (
              <div>
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    background: '#1A1A1A',
                    borderRadius: '2px',
                    marginBottom: '2rem',
                  }}
                />
                <div
                  style={{
                    fontSize: 'clamp(24px,3vw,36px)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    color: 'var(--white)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Main Stage Lighting Design
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Blake Potter &middot;{' '}
                  <span style={{ color: 'var(--text-dim)' }}>@handle</span>
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase' as const,
                    color: '#A8FF00',
                    marginBottom: '2.5rem',
                  }}
                >
                  Lighting Club
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  The Project
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: 1.8,
                    marginBottom: '2.5rem',
                  }}
                >
                  Project description will go here.
                </p>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  Contribution
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: 1.8,
                    marginBottom: '2.5rem',
                  }}
                >
                  What this person contributed to the project.
                </p>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  The Team
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: 1.8,
                  }}
                >
                  Everyone involved and their roles.
                </p>
              </div>
            )}

            {/* Modal: Festival FOH Mix */}
            {modalOpen === 'modal-showcase-002' && (
              <div>
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    background: '#1A1A1A',
                    borderRadius: '2px',
                    marginBottom: '2rem',
                  }}
                />
                <div
                  style={{
                    fontSize: 'clamp(24px,3vw,36px)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    color: 'var(--white)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Festival FOH Mix
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Joshua Wright &middot;{' '}
                  <span style={{ color: 'var(--text-dim)' }}>@handle</span>
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase' as const,
                    color: '#0066FF',
                    marginBottom: '2.5rem',
                  }}
                >
                  Sound Club
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  The Project
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: 1.8,
                    marginBottom: '2.5rem',
                  }}
                >
                  Project description will go here.
                </p>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  Contribution
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: 1.8,
                    marginBottom: '2.5rem',
                  }}
                >
                  What this person contributed to the project.
                </p>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  The Team
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: 1.8,
                  }}
                >
                  Everyone involved and their roles.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
