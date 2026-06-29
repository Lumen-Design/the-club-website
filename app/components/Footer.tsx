import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ padding: '4rem 2rem', borderTop: '1px solid var(--border)' }}>
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <div className="corner-sym">
              <div className="b b-tl"></div><div className="b b-tr"></div>
              <div className="b b-bl"></div><div className="b b-br"></div>
            </div>
            <span className="footer-word">The Club</span>
          </div>
          <p className="footer-meta">Independent specialists. Shared standards. One team.</p>
        </div>
        <div>
          <div className="footer-links">
            <Link href="/sound-club" className="footer-link" style={{ color: 'var(--sound)' }}>Sound Club</Link>
            <Link href="/lighting-club" className="footer-link" style={{ color: 'var(--light)' }}>Lighting Club</Link>
            <Link href="/video-club" className="footer-link" style={{ color: 'var(--video)' }}>Video Club</Link>
            <Link href="/podcast" className="footer-link">The Podcast</Link>
          </div>
        </div>
        <div>
          <div className="footer-links">
            <span className="footer-link">Instagram</span>
            <a className="footer-link" href="mailto:fieldnotes@the-club.space">fieldnotes@the-club.space</a>
            <span className="footer-link">— Location —</span>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1400px', margin: '3rem auto 0', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
        <p style={{ fontSize: '11px', color: 'var(--text-dim)' }}>© 2025 The Club. All rights reserved.</p>
      </div>
    </footer>
  );
}
