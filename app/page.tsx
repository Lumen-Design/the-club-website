'use client';

import Link from 'next/link';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-inner">
          <p className="hero-eyebrow">Sound Club &middot; Lighting Club &middot; Video Club</p>
          <h1 className="hero-title">
            <span style={{ fontWeight: 300 }}>THE</span><br />
            <span style={{ display: 'inline-flex', alignItems: 'flex-end' }}>
              CLUB
              <div className="hero-sym">
                <div className="b b-tl" />
                <div className="b b-tr" />
                <div className="b b-bl" />
                <div className="b b-br" />
              </div>
            </span>
          </h1>
          <div className="hero-sub">
            <p className="hero-tagline">Three disciplines.<br />One standard.</p>
            <p className="hero-descriptor">
              A collective of independent specialists uniting sound, lighting, and video to elevate experiences through technology and design.
            </p>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">The Disciplines</p>
          <div className="disc-grid">
            <Link href="/sound-club" className="disc-card sound" style={{ textDecoration: 'none' }}>
              <div className="bracket bracket-tl" />
              <div className="bracket bracket-tr" />
              <div className="bracket bracket-bl" />
              <div className="bracket bracket-br" />
              <div className="disc-card-color" style={{ background: 'var(--sound)' }} />
              <div className="disc-card-num">01</div>
              <div className="disc-card-name">Sound<br />Club</div>
              <p className="disc-card-sub">Audio engineering, system design, FOH mixing, RF, and playback. From venue to arena.</p>
              <div className="disc-card-tags">
                <span className="tag sound">FOH</span>
                <span className="tag sound">Systems</span>
                <span className="tag sound">RF</span>
                <span className="tag sound">Playback</span>
              </div>
              <div className="disc-card-arrow">Enter Sound Club <span>&rarr;</span></div>
            </Link>

            <Link href="/lighting-club" className="disc-card lighting" style={{ textDecoration: 'none' }}>
              <div className="bracket bracket-tl" />
              <div className="bracket bracket-tr" />
              <div className="bracket bracket-bl" />
              <div className="bracket bracket-br" />
              <div className="disc-card-color" style={{ background: 'var(--light)' }} />
              <div className="disc-card-num">02</div>
              <div className="disc-card-name">Lighting<br />Club</div>
              <p className="disc-card-sub">Lighting design, visual design, motion graphics, creative direction, programming, and permanent installations.</p>
              <div className="disc-card-tags">
                <span className="tag lighting">Design</span>
                <span className="tag lighting">Programming</span>
                <span className="tag lighting">Install</span>
                <span className="tag lighting">Creative</span>
                <span className="tag lighting">Visuals</span>
                <span className="tag lighting">Motion</span>
              </div>
              <div className="disc-card-arrow">Enter Lighting Club <span>&rarr;</span></div>
            </Link>

            <Link href="/video-club" className="disc-card video" style={{ textDecoration: 'none' }}>
              <div className="bracket bracket-tl" />
              <div className="bracket bracket-tr" />
              <div className="bracket bracket-bl" />
              <div className="bracket bracket-br" />
              <div className="disc-card-color" style={{ background: 'var(--video)' }} />
              <div className="disc-card-num">03</div>
              <div className="disc-card-name">Video<br />Club</div>
              <p className="disc-card-sub">Broadcast, IMAG, live streaming, switching, and camera direction. Built for the broadcast floor and the arena stage.</p>
              <div className="disc-card-tags">
                <span className="tag video">Broadcast</span>
                <span className="tag video">IMAG</span>
                <span className="tag video">Switching</span>
                <span className="tag video">Camera</span>
              </div>
              <div className="disc-card-arrow">Enter Video Club <span>&rarr;</span></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="manifesto">
        <div className="manifesto-inner">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
            <div className="corner-sym-lg" style={{ width: '48px', height: '48px' }}>
              <div className="b b-tl" style={{ width: '14px', height: '14px' }} />
              <div className="b b-tr" style={{ width: '14px', height: '14px' }} />
              <div className="b b-bl" style={{ width: '14px', height: '14px' }} />
              <div className="b b-br" style={{ width: '14px', height: '14px' }} />
            </div>
          </div>
          <h2 className="manifesto-title">
            The Club<br />isn&apos;t a company.<br />It&apos;s a collective.
          </h2>
          <div className="manifesto-clubs">
            <span className="manifesto-club-name s">Sound Club</span>
            <span className="manifesto-club-name l">Lighting Club</span>
            <span className="manifesto-club-name v">Video Club</span>
          </div>
          <p className="manifesto-credo">Independent specialists. Shared standards. One team.</p>
        </div>
      </section>

      {/* Club Core */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">The Club Core</p>
          <div className="reps-grid">
            <div className="rep-card">
              <img
                src="/images/Sound.JPEG"
                alt="Sound Club Rep"
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
              <div className="rep-club" style={{ color: 'var(--sound)' }}>Sound Club</div>
              <div className="rep-name">Joshua Wright</div>
              <div className="rep-role">Founder &middot; Audio Director</div>
            </div>
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
              <div style={{ display: 'flex', gap: '8px', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A8FF00' }}>Lighting Club</span>
                <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF0088' }}>Video Club</span>
              </div>
              <div className="rep-name">Blake Potter</div>
              <div className="rep-role">Founder &middot; Creative Director</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
