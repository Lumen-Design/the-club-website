'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LightingClub() {
  const [bioOpen, setBioOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setBioOpen(false);
      }
    };
    if (bioOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [bioOpen]);

  return (
    <>
      {/* Hero */}
      <section
        className="disc-hero"
        style={{ background: 'linear-gradient(135deg,#050505 0%,#0A1200 100%)' }}
      >
        <img
          src="/images/Visuals.png"
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
        <div className="disc-accent-bar" style={{ background: 'var(--light)' }} />
        <div className="disc-hero-inner">
          <Link
            href="/"
            className="disc-hero-back"
            style={{ textDecoration: 'none' }}
          >
            &larr; THE CLUB
          </Link>
          <div className="disc-hero-kicker" style={{ color: 'var(--light)' }}>
            Lighting Club
          </div>
          <h1 className="disc-hero-title">
            Lighting
            <br />
            <span style={{ color: 'var(--light)' }}>Club</span>
          </h1>
          <p className="disc-hero-desc">
            Lighting design is just the start. Visual design, environmental design,
            creative direction, and permanent systems &mdash; built for spaces that
            demand to be seen differently.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label" style={{ color: 'var(--light)' }}>
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
                  color: 'var(--light)',
                  marginBottom: '0.75rem',
                }}
              >
                Lighting Design
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}
              >
                From concept to console &mdash; live event design, touring, and
                architectural lighting.
              </p>
            </div>
            <div style={{ background: 'var(--panel-a)', padding: '2rem' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--light)',
                  marginBottom: '0.75rem',
                }}
              >
                Visual &amp; Creative
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}
              >
                Environmental design, graphic design, and creative technology for
                immersive experiences.
              </p>
            </div>
            <div style={{ background: 'var(--panel-a)', padding: '2rem' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--light)',
                  marginBottom: '0.75rem',
                }}
              >
                Permanent Install
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}
              >
                Permanent lighting systems, programming, and commissioning for
                houses of worship, venues, and corporate spaces.
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
              <div className="rep-club" style={{ color: 'var(--light)' }}>
                Lighting Club &middot; The Club Core
              </div>
              <div className="rep-name">Blake Potter</div>
              <div className="rep-role">Founder &middot; Creative Director</div>
              <button
                className="rep-bio-btn"
                onClick={() => setBioOpen(true)}
              >
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
                Blake has spent 17 years running lights, switching video, production
                managing, and leading teams across two sides of the industry &mdash;
                live events and installations. He&rsquo;s worked alongside design
                firms on infrastructure projects for spaces like Germantown Baptist
                Church, and run live productions ranging from houses of worship to
                festival-scale video direction, both as an operator and as a
                production manager.
                <br />
                <br />
                He&rsquo;s a team leader who moves fluidly between disciplines,
                bringing hands-on technical experience and the broader perspective
                that comes from having sat in nearly every seat on a production.
                <br />
                <br />
                The Club made sense to Blake because too many skilled people in this
                industry are disconnected &mdash; surviving gig to gig with no real
                infrastructure beneath them. He&rsquo;s wanted to build something
                that changes that for a long time. The Club is that thing: a place
                where people actively create paths for each other, not just for
                themselves.
                <br />
                <br />
                Outside the work, Blake is home with his wife and four kids &mdash;
                watching movies, playing in the pool, and making memories that matter
                more than any show.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Design & Motion */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '4rem 2rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <img
          src="/images/Visuals.png"
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.15,
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top,#050505 40%,transparent 100%)',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1400px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          <p className="section-label" style={{ color: 'var(--light)' }}>
            Visual Design &amp; Motion
          </p>
          <h2
            style={{
              fontSize: 'clamp(28px,4vw,48px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              marginBottom: '3rem',
            }}
          >
            Light isn&rsquo;t the only thing we design.
          </h2>
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
                  color: 'var(--light)',
                  marginBottom: '0.75rem',
                }}
              >
                Visual Design
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}
              >
                Environmental design, graphic design, and creative technology for
                immersive live experiences.
              </p>
            </div>
            <div style={{ background: 'var(--panel-a)', padding: '2rem' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--light)',
                  marginBottom: '0.75rem',
                }}
              >
                Motion Graphics
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}
              >
                Custom motion content, show loops, and animated assets built for LED
                walls and projection.
              </p>
            </div>
            <div style={{ background: 'var(--panel-a)', padding: '2rem' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--light)',
                  marginBottom: '0.75rem',
                }}
              >
                Creative Direction
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}
              >
                Concept to execution &mdash; visual identity, stage design, and the
                ideas that tie it all together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-footer */}
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
          <span style={{ fontSize: '13px', color: 'var(--light)' }}>
            Lighting Club
          </span>
        </div>
      </footer>

      {/* Bio Modal Overlay */}
      {bioOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.85)',
            zIndex: 1000,
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
              border: '1px solid var(--border)',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              padding: '2.5rem',
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
                fontSize: '18px',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                lineHeight: 1,
              }}
              aria-label="Close bio"
            >
              &times;
            </button>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--light)',
                marginBottom: '0.5rem',
              }}
            >
              Lighting Club &middot; The Club Core
            </div>
            <div
              style={{
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                marginBottom: '0.25rem',
              }}
            >
              Blake Potter
            </div>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
              }}
            >
              Founder &middot; Creative Director
            </div>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              Blake has spent 17 years running lights, switching video, production
              managing, and leading teams across two sides of the industry &mdash;
              live events and installations. He&rsquo;s worked alongside design
              firms on infrastructure projects for spaces like Germantown Baptist
              Church, and run live productions ranging from houses of worship to
              festival-scale video direction, both as an operator and as a
              production manager.
              <br />
              <br />
              He&rsquo;s a team leader who moves fluidly between disciplines,
              bringing hands-on technical experience and the broader perspective
              that comes from having sat in nearly every seat on a production.
              <br />
              <br />
              The Club made sense to Blake because too many skilled people in this
              industry are disconnected &mdash; surviving gig to gig with no real
              infrastructure beneath them. He&rsquo;s wanted to build something
              that changes that for a long time. The Club is that thing: a place
              where people actively create paths for each other, not just for
              themselves.
              <br />
              <br />
              Outside the work, Blake is home with his wife and four kids &mdash;
              watching movies, playing in the pool, and making memories that matter
              more than any show.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
