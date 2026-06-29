'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <div className="corner-sym">
            <div className="b b-tl"></div><div className="b b-tr"></div>
            <div className="b b-bl"></div><div className="b b-br"></div>
          </div>
          <span className="nav-wordmark">The Club</span>
        </Link>
        <div className="nav-links">
          <Link href="/collective" className={`nav-link collective${isActive('/collective') ? ' active' : ''}`}>The Collective</Link>
          <Link href="/sound-club" className={`nav-link sound${isActive('/sound-club') ? ' active' : ''}`}>Sound Club</Link>
          <Link href="/lighting-club" className={`nav-link lighting${isActive('/lighting-club') ? ' active' : ''}`}>Lighting Club</Link>
          <Link href="/video-club" className={`nav-link video${isActive('/video-club') ? ' active' : ''}`}>Video Club</Link>
          <div className="nav-more" ref={dropdownRef}>
            <span className="nav-more-btn" onClick={(e) => { e.stopPropagation(); setDropdownOpen(!dropdownOpen); }}>More ▾</span>
            <div className={`nav-dropdown${dropdownOpen ? ' open' : ''}`}>
              <a href="mailto:fieldnotes@the-club.space" onClick={() => setDropdownOpen(false)}>Contact</a>
              <Link href="/field-notes" onClick={() => setDropdownOpen(false)}>Field Notes</Link>
              <Link href="/gear-intel" onClick={() => setDropdownOpen(false)}>Gear Intel</Link>
              <Link href="/spotlight" onClick={() => setDropdownOpen(false)}>Spotlight</Link>
              <Link href="/showcase" onClick={() => setDropdownOpen(false)}>Showcase</Link>
              <Link href="/podcast" onClick={() => setDropdownOpen(false)}>The Podcast</Link>
            </div>
          </div>
        </div>
        <span className="nav-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</span>
      </div>
      <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
        <Link href="/collective" onClick={() => setMobileMenuOpen(false)}>The Collective</Link>
        <Link href="/sound-club" className="sound" onClick={() => setMobileMenuOpen(false)}>Sound Club</Link>
        <Link href="/lighting-club" className="lighting" onClick={() => setMobileMenuOpen(false)}>Lighting Club</Link>
        <Link href="/video-club" className="video" onClick={() => setMobileMenuOpen(false)}>Video Club</Link>
        <hr className="mobile-menu-divider" />
        <a href="mailto:fieldnotes@the-club.space" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        <Link href="/field-notes" onClick={() => setMobileMenuOpen(false)}>Field Notes</Link>
        <Link href="/gear-intel" onClick={() => setMobileMenuOpen(false)}>Gear Intel</Link>
        <Link href="/spotlight" onClick={() => setMobileMenuOpen(false)}>Spotlight</Link>
        <Link href="/showcase" onClick={() => setMobileMenuOpen(false)}>Showcase</Link>
        <Link href="/podcast" onClick={() => setMobileMenuOpen(false)}>The Podcast</Link>
      </div>
    </nav>
  );
}
