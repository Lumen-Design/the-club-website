'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function GearIntel() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  function openGearModal(id: string) {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  }

  function closeGearModal() {
    setActiveModal(null);
    document.body.style.overflow = '';
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeGearModal();
    }
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  return (
    <>
      {/* Hero */}
      <section className="disc-hero" style={{ background: 'var(--bg)' }}>
        <div className="disc-accent-bar" style={{ background: 'var(--sound)' }} />
        <div className="disc-hero-inner">
          <Link
            href="/"
            className="disc-hero-back"
            style={{ textDecoration: 'none' }}
          >
            &larr; THE CLUB
          </Link>
          <div className="disc-hero-kicker" style={{ color: 'var(--text-muted)' }}>
            Gear Intel &middot; The Club
          </div>
          <h1 className="disc-hero-title">
            Gear<br />
            <span style={{ color: 'var(--sound)' }}>Intel</span>
          </h1>
          <p className="disc-hero-desc">
            Confirmed-only sweep of manufacturer announcements, firmware updates, and trade reporting. Published weekly.
          </p>
        </div>
      </section>

      {/* Reports */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label" style={{ color: 'var(--sound)' }}>
            Reports
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', background: 'var(--border)' }}>
            {/* Report 004 */}
            <div className="gear-tile" onClick={() => openGearModal('modal-gear-004')}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--sound)', marginBottom: '0.75rem' }}>June 19 &ndash; 28, 2026</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>NO. 004</div>
              <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '0.75rem' }}>Weekly Gear Intelligence</div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>Blackmagic Resolve 21.0.1, Canon Cinema EOS firmware, Clear-Com FreeSpeak Cell, Green Hippo Estuary Series, Planar Mantis LED, ProPresenter 21.4 BETA, and the full InfoComm 2026 afterglow sweep.</p>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', transition: 'color 0.2s' }}>Read Report &rarr;</span>
            </div>
            {/* Report 003 */}
            <div className="gear-tile" onClick={() => openGearModal('modal-gear-003')}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--sound)', marginBottom: '0.75rem' }}>June 7&ndash;14, 2026</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>NO. 003</div>
              <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '0.75rem' }}>Quiet Pre-InfoComm Week</div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>DaVinci Resolve 21.0 goes final. ETC Eos v3.3.8 is a critical patch &mdash; update now. grandMA3 v2.4 adds phasers-in-Recipes. The calm before InfoComm 2026.</p>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', transition: 'color 0.2s' }}>Read Report &rarr;</span>
            </div>
            {/* Report 002 */}
            <div className="gear-tile" onClick={() => openGearModal('modal-gear-002')}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--sound)', marginBottom: '0.75rem' }}>May 31 &ndash; June 7, 2026</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>NO. 002</div>
              <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '0.75rem' }}>Blackmagic Goes All-In on ST 2110</div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>ETC Eos v3.3.7 pulled &mdash; critical patch required now. Blackmagic ships ATEM 4 M/E Constellation IP and HyperDeck ISO 100G. Green Hippo Estuary brings native grandMA3 integration. Teradek Bolt Mobile kills the 6-RX ceiling.</p>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', transition: 'color 0.2s' }}>Read Report &rarr;</span>
            </div>
            {/* Report 001 */}
            <div className="gear-tile" onClick={() => openGearModal('modal-gear-001-may')}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--sound)', marginBottom: '0.75rem' }}>May 2&ndash;11, 2026</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>NO. 001</div>
              <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '0.75rem' }}>Clear-Com Goes Cellular</div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>FreeSpeak Cell begins shipping &mdash; LTE/5G intercom with no RF coordination required. Resolume 7.26.1 adds MCP server interface. Apple macOS 26.5 adds auto-power-on for racked Macs. Quiet post-NAB week.</p>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', transition: 'color 0.2s' }}>Read Report &rarr;</span>
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
            Gear Intel
          </span>
        </div>
      </footer>

      {/* Gear Modal Overlay */}
      {activeModal && (
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
            if (e.target === e.currentTarget) closeGearModal();
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
              onClick={closeGearModal}
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

            {/* ====== REPORT 003 ====== */}
            {activeModal === 'modal-gear-003' && (
              <div>
                {/* Header */}
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#0066FF', marginBottom: '0.75rem' }}>Gear Intel &middot; The Club</div>
                <div style={{ height: '2px', background: '#0066FF', marginBottom: '1.5rem' }} />
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Coverage: June 7&ndash;14, 2026 &middot; Edge items back to June 2</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-dim)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '2.5rem' }}><strong style={{ color: 'var(--text-muted)' }}>How to read this report.</strong> Gear Intel is a confirmed-only sweep. Every item listed has a verifiable source &mdash; official release notes, manufacturer announcements, or first-party documentation. Rumors, leaks, and unverified social media posts are excluded by rule. &quot;Edge-of-window&quot; items fell just outside the coverage dates but are included for completeness.</p>

                {/* Executive Summary */}
                <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>Quiet Pre-InfoComm Week</h2>
                <p className="modal-body-text">InfoComm 2026 opens June 14 in Orlando. Most manufacturers are holding announcements for the show floor, making this a lighter-than-usual sweep. The items that did land are significant: a major DAW release, a critical lighting console patch, and a marquee control surface update.</p>

                <div style={{ margin: '2rem 0' }}>
                  <div className="modal-bullet">Blackmagic DaVinci Resolve 21.0 &mdash; final release. Photo page, deep AI toolset, wide RAW/codec support. <span className="gear-tag edge">Edge-of-Window</span></div>
                  <div className="modal-bullet">Apple AirPods &mdash; new beta firmware (9A5292e, June 9) with user-adjustable Custom EQ ahead of iOS 27.</div>
                  <div className="modal-bullet">ETC Eos v3.3.8 &mdash; critical patch. Removes problematic power-board firmware from v3.3.7. Update immediately. <span className="gear-tag critical">Critical</span></div>
                  <div className="modal-bullet">MA Lighting grandMA3 v2.4 &mdash; phasers-in-Recipes, universal Presets, non-destructive Preview mode. <span className="gear-tag edge">Edge-of-Window</span></div>
                  <div className="modal-bullet">Planar 21by9 5K Mini-LED displays &amp; Disguise Mapping Matter &mdash; InfoComm previews. <span className="gear-tag edge">Edge-of-Window</span></div>
                  <div className="modal-bullet">No qualifying updates for Panasonic, Sony, Canon, AJA, Decimator, Teradek, DJI, Ross Video, FOR-A, Clear-Com, NovaStar, ProPresenter, Chauvet, Pathway, Green Hippo, Resolume, Elgato Stream Deck.</div>
                </div>

                {/* Brand-by-Brand */}
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#0066FF', margin: '3rem 0 2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Brand-by-Brand Findings</div>

                {/* Blackmagic Resolve */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Blackmagic Design &mdash; DaVinci Resolve 21.0 <span className="gear-tag edge">Edge-of-Window</span></div>
                  <p className="modal-body-text">Final release of DaVinci Resolve 21.0 (June 2). Major version jump introduces a dedicated Photo page for stills editing, IntelliTrack AI-powered object tracking across Color/Fusion/Fairlight, expanded AI tools for dialogue separation, music removal, and voice isolation, plus broad new RAW and codec support including Sony VENICE 2 MPC, Nikon N-Log, and BRAW updates.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">DaVinci Resolve 20.x &rarr; DaVinci Resolve 21.0 (final)</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Resolve is the most-used post tool in our collective. The Photo page and AI tracking features directly impact video club workflows. Free version gets most features.</p>
                  <p className="modal-source">Source: Blackmagic Design official release, June 2, 2026</p>
                </div>

                {/* Blackmagic ATEM */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Blackmagic Design &mdash; ATEM 4 M/E Constellation IP</div>
                  <p className="modal-body-text">Announced at the same event as Resolve 21. New flagship live production switcher built around SMPTE ST 2110 IP infrastructure. Supports 80 IP inputs, 48 outputs, SuperSource, media players, and a fully redesigned control surface. Represents Blackmagic&apos;s first full-IP production switcher.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">ATEM Constellation HD/4K (SDI-based) &rarr; ATEM 4 M/E Constellation IP (ST 2110)</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Major move for broadcast and IMAG workflows. IP-native switching at a Blackmagic price point could shift how Video Club approaches large-format production.</p>
                  <p className="modal-source">Source: Blackmagic Design official announcement, June 2, 2026</p>
                </div>

                {/* Apple AirPods */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Apple &mdash; AirPods Beta Firmware</div>
                  <p className="modal-body-text">New developer beta firmware (9A5292e, June 9) for AirPods Pro 2 and AirPods 4 ANC. Introduces user-adjustable Custom EQ with bass, mid, and treble sliders &mdash; the first time Apple has exposed parametric-style EQ on AirPods. Tied to iOS 27 / macOS Tahoe beta cycle.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Fixed EQ curve &rarr; User-adjustable 3-band Custom EQ (beta)</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Relevant for sound club members monitoring on personal devices. EQ control was a long-requested feature. Beta only &mdash; expect changes before public release.</p>
                  <p className="modal-source">Source: Apple Developer beta release notes, June 9, 2026</p>
                </div>

                {/* ETC Eos */}
                <div className="modal-brand">
                  <div className="modal-brand-name">ETC &mdash; Eos v3.3.8 <span className="gear-tag critical">Critical</span> <span className="gear-tag edge">Edge-of-Window</span></div>
                  <p className="modal-body-text">Critical maintenance patch released June 5. Rolls back a power-board firmware change introduced in v3.3.7 that caused intermittent boot failures on Gio @5, Ion Xe, and Element 2 consoles. ETC is recommending immediate update for all users on v3.3.7. Also fixes a Net3 Show Control gateway issue and a syntax error in blind channel editing.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Eos v3.3.7 (problematic power-board FW) &rarr; Eos v3.3.8 (reverted, stable)</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> If you updated to v3.3.7, update again immediately. Boot failures on show day are unacceptable. This is the highest-priority item in this sweep.</p>
                  <p className="modal-source">Source: ETC official release notes, June 5, 2026</p>
                </div>

                {/* MA Lighting */}
                <div className="modal-brand">
                  <div className="modal-brand-name">MA Lighting &mdash; grandMA3 v2.4 <span className="gear-tag edge">Edge-of-Window</span></div>
                  <p className="modal-body-text">Released June 3. Major feature update: phasers can now be stored inside Recipes, universal Presets work across fixture types, and a new non-destructive Preview mode lets programmers test changes without affecting live output. Also adds enhanced network diagnostics and improved GDTF fixture profile handling.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">grandMA3 v2.3.x &rarr; grandMA3 v2.4 (phasers-in-Recipes, universal Presets, Preview)</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Phasers-in-Recipes is the most-requested feature in MA&apos;s user community. Universal Presets simplify festival-style programming. Preview mode is a game-changer for live busking environments.</p>
                  <p className="modal-source">Source: MA Lighting official changelog, June 3, 2026</p>
                </div>

                {/* Planar */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Planar &mdash; 21by9 Series 5K LCD <span className="gear-tag edge">Edge-of-Window</span></div>
                  <p className="modal-body-text">Pre-InfoComm announcement (June 10). New ultra-wide 5K (5120&times;2160) Mini-LED displays in 105&quot; and 125&quot; sizes, purpose-built for corporate boardrooms, command centers, and high-end AV installations. 21:9 native aspect ratio eliminates letterboxing for widescreen content. Direct-view Mini-LED backlight with 2,000+ local dimming zones.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Planar 16:9 LCD lineup &rarr; New 21:9 5K Mini-LED series (105&quot; / 125&quot;)</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Permanent install projects increasingly request ultra-wide formats. This fills a gap between LED walls and traditional flat panels for high-end AV.</p>
                  <p className="modal-source">Source: Planar press release, June 10, 2026</p>
                </div>

                {/* Disguise */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Disguise &mdash; Mapping Matter Update <span className="gear-tag edge">Edge-of-Window</span></div>
                  <p className="modal-body-text">Pre-InfoComm preview (June 11). Mapping Matter is Disguise&apos;s projection mapping calibration and alignment tool. Update adds real-time mesh deformation, improved auto-alignment for multi-projector arrays, and deeper integration with the Disguise designer workflow. Aimed at large-scale immersive installations and touring projection rigs.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Mapping Matter v1.x &rarr; Updated Mapping Matter (real-time mesh, improved auto-align)</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Projection mapping workflows in the lighting and video clubs benefit directly. Faster alignment means faster load-ins.</p>
                  <p className="modal-source">Source: Disguise pre-InfoComm briefing, June 11, 2026</p>
                </div>

                {/* No Updates */}
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', margin: '3rem 0 1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>No Updates This Week</div>
                <p style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 2 }}>Panasonic &middot; Sony &middot; Canon &middot; AJA &middot; Decimator &middot; Teradek &middot; DJI &middot; Ross Video &middot; FOR-A &middot; Clear-Com &middot; NovaStar &middot; ProPresenter &middot; Chauvet &middot; Pathway &middot; Green Hippo &middot; Resolume &middot; Elgato Stream Deck</p>

                {/* Analyst Notes */}
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', margin: '3rem 0 1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Analyst Notes</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>Timing context.</strong> InfoComm 2026 opens June 14. Expect a significant volume increase in next week&apos;s sweep as manufacturers release show-floor announcements. This week&apos;s quiet tone is typical pre-show holding pattern.</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>Verification catches.</strong> Several social media posts claiming new Allen &amp; Heath firmware were traced to a beta leak, not an official release. Excluded per confirmed-only methodology.</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>Excluded by rule.</strong> Two crowdfunded products (a USB audio interface and a DMX node) announced shipping dates. Excluded because manufacturer track record on delivery dates is unverified.</div>

                <div className="action-box">
                  <div className="action-label">Action Items for You</div>
                  <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>ETC Eos:</strong> If any consoles in your inventory are on v3.3.7, update to v3.3.8 before your next show. Do not skip this.</div>
                  <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>DaVinci Resolve:</strong> Download Resolve 21.0 and test against your current project templates. The new IntelliTrack AI features are worth evaluating for your video workflows.</div>
                </div>

                {/* Footer */}
                <div style={{ borderTop: '1px solid var(--border)', marginTop: '2.5rem', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Gear Intel &middot; The Club &middot; Confirmed announcements only.</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Next sweep: Sunday, June 21, 2026</span>
                </div>
              </div>
            )}

            {/* ====== REPORT 002 ====== */}
            {activeModal === 'modal-gear-002' && (
              <div>
                {/* Header */}
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#0066FF', marginBottom: '0.75rem' }}>Gear Intel &middot; The Club</div>
                <div style={{ height: '2px', background: '#0066FF', marginBottom: '1.5rem' }} />
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Coverage: May 31 &ndash; June 7, 2026 &middot; Edge items back to May 29</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-dim)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '2.5rem' }}><strong style={{ color: 'var(--text-muted)' }}>How to read this report.</strong> Each section is one manufacturer. Items inside the 7-day window are listed first; edge-of-window items dated 1&ndash;2 days outside are tagged. Before &rarr; After callouts show exactly what changed. Rumors excluded &mdash; confirmed announcements only.</p>

                {/* Executive Summary */}
                <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>Blackmagic Goes All-In on ST 2110</h2>
                <p className="modal-body-text">ETC pulls Eos v3.3.7 after a critical firmware bug, Blackmagic ships three ST 2110 products, Green Hippo launches a media server with native grandMA3 integration, and Teradek turns iPads into wireless monitors.</p>

                <div style={{ margin: '2rem 0' }}>
                  <div className="modal-bullet">ETC Eos v3.3.8 emergency patch (June 3) &mdash; critical advisory. v3.3.7 pulled after firmware bug can wipe license/output counts on Element 2, Ion Xe, Ion Xe 20, Ion Xe RPU, Gio @5, Apex Processor, Eos Expansion Processor, and Eos RVI. Upgrade immediately. <span className="gear-tag critical">Critical</span></div>
                  <div className="modal-bullet">Blackmagic Camera 10.2 firmware (June 4) adds Phase Detect Autofocus and Cloud Streaming to PYXIS 6K &mdash; now viable for multi-cam live work.</div>
                  <div className="modal-bullet">Blackmagic ATEM 4 M/E Constellation IP and HyperDeck ISO 100G ship this month &mdash; native SMPTE ST 2110 in mid-budget territory.</div>
                  <div className="modal-bullet">Canon RC-IP300 PTZ controller ships June 2026 at US$2,499 &mdash; 200-camera IP control in a compact 3.5&quot; touchscreen.</div>
                  <div className="modal-bullet">Green Hippo Estuary Series (MC1/MC2/MC4) &mdash; native grandMA3 integration. Lighting and media ops share a control language for the first time. <span className="gear-tag edge">Edge-of-Window</span></div>
                  <div className="modal-bullet">Planar 21by9 5K LCD Series &mdash; 81/94/105&quot; ultra-wide quantum-dot Mini-LED, 2,500 nits, ships Q3. <span className="gear-tag edge">Edge-of-Window</span></div>
                  <div className="modal-bullet">Teradek Bolt Mobile revealed at Cine Gear &mdash; turns iPads into Bolt receivers; broadcast mode removes the 6-RX ceiling.</div>
                  <div className="modal-bullet">InfoComm 2026 is June 17&ndash;19. Expect a second wave of announcements next week.</div>
                </div>

                {/* Brand-by-Brand */}
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#0066FF', margin: '3rem 0 2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Brand-by-Brand Findings</div>

                {/* Blackmagic Camera 10.2 */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Blackmagic Design &mdash; Camera 10.2 Firmware</div>
                  <p className="modal-body-text">Released June 2&ndash;4, 2026. Adds Phase Detect Autofocus (PDAF) to PYXIS 6K &mdash; continuous AF, face-detect AF, object-detect AF, selectable transition speed &mdash; plus Blackmagic Cloud Streaming routing that pushes a live camera stream directly to studio or multiple cloud destinations.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">PYXIS 6K previously contrast-detect AF only with no built-in streaming; v10.2 now offers full PDAF (continuous + face + object) and direct Blackmagic Cloud Streaming with shortcut-key mode toggling.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> PYXIS 6K becomes viable for live multi-cam and event work &mdash; reliable AF plus direct-to-cloud streaming eliminates a dedicated encoder in the rack.</p>
                  <p className="modal-source">Source: CineD &middot; Newsshooter</p>
                </div>

                {/* Blackmagic ATEM IP */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Blackmagic Design &mdash; ATEM 4 M/E Constellation IP</div>
                  <p className="modal-body-text">2RU IP switcher with 32 native SMPTE ST 2110 inputs and 28 outputs over 100G fiber, 16 Advanced Keyers, 4 multiviewers, 2 SuperSource. US$7,995. Shipping June 2026.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior baseline not verified &mdash; new capability: first ATEM with native 100G ST 2110 I/O at sub-$8K, opening ST 2110 production switching to mid-budget live trucks and install systems.</div>
                  </div>
                  <p className="modal-source">Source: SVG</p>
                </div>

                {/* Blackmagic HyperDeck */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Blackmagic Design &mdash; HyperDeck ISO 100G</div>
                  <p className="modal-body-text">ST 2110 IP recorder, 8 video channels, US$4,995. ATEM Monitoring Rack Panel (combined monitoring converter + control panel, US$995) also shipping June 2026.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior HyperDeck ISO models recorded SDI ISOs; HyperDeck ISO 100G now records 8 ST 2110 channels natively over a single 100G uplink.</div>
                  </div>
                  <p className="modal-source">Source: NewscastStudio</p>
                </div>

                {/* ETC */}
                <div className="modal-brand">
                  <div className="modal-brand-name">ETC &mdash; Eos Family v3.3.8 <span className="gear-tag critical">Critical</span> <span className="gear-tag edge">Edge-of-Window</span></div>
                  <p className="modal-body-text">v3.3.7 (released May 27) was pulled after ETC discovered a critical firmware bug in the &quot;Intelligent Power Board IMX RT&quot; module installer that can cause affected consoles to lose their license/output count. v3.3.8 removes the problematic installer while keeping all v3.3.7 improvements. Affected hardware: Element 2, Ion Xe, Ion Xe 20, Ion Xe RPU, Gio @5, Apex Processor, Eos Expansion Processor, and Eos RVI.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">v3.3.7 installer could brick licensed output channel counts on affected consoles; v3.3.8 ships the same feature/fix improvements without the IMX RT installer.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Show-stopper risk for any tour or install running affected hardware. If v3.3.7 is already installed, do NOT apply the IMX RT firmware update &mdash; roll forward to v3.3.8 immediately. If you haven&apos;t installed v3.3.7, skip it entirely.</p>
                  <p className="modal-source">Source: ETC Community release notes &middot; v3.3.7 withdrawal notice</p>
                </div>

                {/* MA Lighting */}
                <div className="modal-brand">
                  <div className="modal-brand-name">MA Lighting &mdash; grandMA3 v2.4 <span className="gear-tag edge">Edge-of-Window</span></div>
                  <p className="modal-body-text">Released May 27, 2026. Major feature update across Phasers, Presets, blind editing, MVR import, and remote networking. MA is running v2.4 webinars June 17&ndash;19 in multiple languages.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Phasers and Recipes were separate workflows; v2.4 integrates Phasers into the Recipes system with a SMART-style graphical editor, nSHOT repetition count, direction controls, and a new Shape pool.</div>
                  </div>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Presets were tightly bound to specific fixture types; v2.4 introduces Universal Presets that work across all fixture types with selective/global/universal scope.</div>
                  </div>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">MVR imports were monolithic; v2.4 routes MVR import through a new Partial Show Read (PSR) menu for selective element import.</div>
                  </div>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">New capability &mdash; Phone Tethering lets the console access online fixture shares via mobile data when on-site networking is locked down, plus a non-destructive Preview interface.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Phaser Recipes reduce dynamic-effect programming time, Universal Presets eliminate redundant preset libraries, Phone Tethering is a real-world win for touring techs at locked-down venues.</p>
                  <p className="modal-source">Source: MA Lighting release notes &middot; TPi</p>
                </div>

                {/* Green Hippo */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Green Hippo / Hippotizer &mdash; Estuary Series <span className="gear-tag edge">Edge-of-Window</span></div>
                  <p className="modal-body-text">Three-model media server family (MC1 1RU compact, MC2 2RU touring, MC4 arena flagship) built on tvONE CALICO video processing. Announced May 27, 2026.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior Hippotizer MX series had no equivalent for 256 layers or 64,000&times;64,000 px canvases; Estuary delivers up to 256 layers, 10-bit/HDR, four canvases up to 64,000&times;64,000 px, single-frame latency.</div>
                  </div>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior Hippotizer platforms required third-party bridges for grandMA3; Estuary ships with native grandMA3 integration alongside DMX, sACN, HippoNet, Companion, and a REST API.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> First Green Hippo platform where lighting and media ops can share a control language. Major for touring and megachurch rigs running lighting and screens off one MA console.</p>
                  <p className="modal-source">Source: ACT Entertainment &middot; Live Design</p>
                </div>

                {/* Planar 21by9 */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Planar &mdash; 21by9 Series 5K LCD Displays</div>
                  <p className="modal-body-text">81&quot;, 94&quot;, 105&quot; at 5120&times;2160, 120Hz, quantum-dot Mini-LED, 2,500 nits peak, 1,000,000:1 HDR contrast, 115% DCI-P3, up to 2,560 local dimming zones, VESA DisplayHDR 1400. Ships Q3 2026.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior baseline not verified &mdash; new capability: first Planar ultra-wide LCD at 5K/120Hz/2,500 nits with up to 2,560 local dimming zones at 81&ndash;105&quot; sizes.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> One-piece solution for corporate, command-center, and lobby/worship-foyer installs that previously required multi-monitor blends.</p>
                  <p className="modal-source">Source: Planar press &middot; rAVe</p>
                </div>

                {/* Planar Mantis */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Planar &mdash; Mantis Series Rental LED</div>
                  <p className="modal-body-text">1.5/1.9/2.6mm pitches, up to 1,500 nits, 7,680Hz refresh, 4,000:1 contrast, magnesium-alloy tool-less rigging. Orders open June 2026.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior baseline not verified &mdash; new capability: tool-less one-handed rigging at 1,500 nits / 7,680Hz in a rental tile.</div>
                  </div>
                  <p className="modal-source">Source: Planar press</p>
                </div>

                {/* Sony */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Sony &mdash; SRG-A40 / SRG-A12 Ver. 4.0 Firmware</div>
                  <p className="modal-body-text">Adds Ball Sports (Basketball) Mode, optical image stabilization, real-time overlays, stronger facial recognition, external JPEG face import, temporary face deactivation, and face-data protection. Rolling out for InfoComm.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">V3 supported AI auto-framing and facial recognition with internal registration only; V4 adds optical image stabilization, external JPEG-based face registration, and a Ball Sports tracking preset.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> A40/A12 become usable for sports venues and houses of worship where rosters change frequently &mdash; pre-load faces from a roster JPEG instead of manual on-camera registration.</p>
                  <p className="modal-source">Source: Broadfield &middot; Sony at InfoComm 2026</p>
                </div>

                {/* Canon */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Canon &mdash; RC-IP300 PTZ Controller</div>
                  <p className="modal-body-text">US$2,499. 3.5&quot; touchscreen, controls up to 200 cameras over IP. Ships June 2026. Compact form factor building on the RC-IP1000.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">RC-IP1000 was the flagship 200-camera controller at a larger footprint; RC-IP300 preserves 200-camera IP control in a portable 3.5&quot; touchscreen at US$2,499.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Sub-$2.5K full-feature IP PTZ controller &mdash; useful for satellite control positions, A/B rigs, and house-of-worship volunteer ops where the flagship is overkill.</p>
                  <p className="modal-source">Source: Canon press &middot; B&amp;H</p>
                </div>

                {/* Teradek */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Teradek &mdash; Bolt Mobile</div>
                  <p className="modal-body-text">Revealed at Cine Gear 2026 (June 5). USB-C wireless receiver dongle for iPad, compatible with Bolt 4K and Bolt 6 transmitters. Bolt Mobile 750 (~$1,000, 750ft) and Bolt Mobile 1500 (~$1,500, 1,500ft). Ships August 2026.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Bolt receivers previously required dedicated RX hardware + monitor + power and were capped at 6 receivers per TX; Bolt Mobile 1500 broadcast mode with Bolt Max TX allows unlimited simultaneous receivers.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Any iPad on set becomes a wireless monitoring station for ~$1K. Removes antenna build, SDI loom, and dedicated monitor-RX overhead. Broadcast mode blanket-feeds an entire crew.</p>
                  <p className="modal-source">Source: Newsshooter at Cine Gear 2026</p>
                </div>

                {/* DJI */}
                <div className="modal-brand">
                  <div className="modal-brand-name">DJI Wireless &mdash; Mic Mini 2S</div>
                  <p className="modal-body-text">Officially confirmed for summer 2026. Mic 3 features migrating down: internal recording on transmitter, 4-TX-to-1-RX pairing. Note: DJI has indicated the 2S will skip the US market initially.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Mic Mini (original) supported 2 TX per RX with no internal recording; Mic Mini 2S supports 4 TX per RX with onboard storage for solo recording.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Doubles channel count for ENG and event 2-talent setups in the cheaper Mini ecosystem.</p>
                  <p className="modal-source">Source: Notebookcheck &middot; DroneXL</p>
                </div>

                {/* Decimator */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Decimator Design &mdash; MD-HX UCP 3.0.5</div>
                  <p className="modal-body-text">Latest USB Control Panel release. Builds on 3.0.4: VESA HDMI input, additional 2K formats, built-in test pattern and tone generators, advanced on-screen overlays (audio meters, graticules, UMD/custom text, format status).</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">MD-HX previously handled broadcast formats only; UCP 3.0.4 added VESA/2K computer-source support plus embedded test-and-measurement tools; 3.0.5 is the latest incremental release on top of that.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Turns a cheap cross-converter into a one-box signal-utility/QC tool for mixed broadcast and computer source installs.</p>
                  <p className="modal-source">Source: Decimator downloads &middot; Videoguys</p>
                </div>

                {/* Cobalt Digital */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Cobalt Digital / openGear &mdash; Two New Cards <span className="gear-tag edge">Edge-of-Window</span></div>
                  <p className="modal-body-text">Announced May 25, 2026. 9925-FSx Frame Sync &mdash; 1-path, field-upgradable to 4 paths, optional 64-channel Dante. 9981-LUTx Color Processor &mdash; entry-level, field-upgradable 1 to 4 paths, optional SCALER/BBC LUT/COLOR/4K/LOGO/ANC add-ons.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior Cobalt frame-sync and LUT cards shipped as fixed multi-path SKUs; new cards ship as 1-path entry SKUs that scale to 4 paths via field license.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Lowers entry CAPEX for small flypacks and Pro AV racks. Jobs that grow can be license-upgraded in the field. Part of Cobalt&apos;s IPMX/ST 2110 push for Pro AV.</p>
                  <p className="modal-source">Source: Cobalt press &middot; SVG</p>
                </div>

                {/* Disguise */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Disguise &mdash; Designer Previews &amp; Mapping Matter</div>
                  <p className="modal-body-text">&quot;Looks&quot; &mdash; new track type exposing layer parameters via API endpoints. &quot;Compositions&quot; &mdash; transportable content packages with export/import/delete API endpoints. Mapping Matter v-next debuts at InfoComm: adds extended projector library, LED tile integration, projection mirrors, multi-layer comparison setups.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior baseline not verified &mdash; new capabilities: API-addressable parameter exposure (Looks), portable content bundles (Compositions), and LED tile + projection-mirror modeling inside Mapping Matter.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Reduces site-survey and pre-viz time for projection-heavy installs and church/touring rigs running mixed LED + projection.</p>
                  <p className="modal-source">Source: TPi &middot; Installation International</p>
                </div>

                {/* Elgato */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Elgato Stream Deck &mdash; &quot;Everywhere&quot; Strategy</div>
                  <p className="modal-body-text">Four-part announcement at Computex, June 2, 2026. Stream Deck Module (embeddable 6/15/32-key hardware, aluminum chassis). Virtual Stream Deck / VSD (software-only control pads on any screen). Scissor Keys variant of Stream Deck MK.2. NVIDIA G-Assist AI integration (edge-of-window).</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior baseline not verified &mdash; new capability: software-only VSD and embeddable Module hardware, expanding beyond standalone Stream Deck units for the first time.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> VSD lets a tech run a Stream Deck layout on a FOH laptop without dedicated hardware (good for backup and B-rigs). Module opens a path for AV integrators to embed Stream Deck control in custom racks and lecterns.</p>
                  <p className="modal-source">Source: Corsair / Elgato press</p>
                </div>

                {/* ProPresenter */}
                <div className="modal-brand">
                  <div className="modal-brand-name">ProPresenter &mdash; 21.4 Beta</div>
                  <p className="modal-body-text">Released June 5, 2026. Primarily stability/bug-fix but includes improved output performance when rendering 4K media across multiple screens. Fixes: helper-process update hang, web-fill trigger hang, props/Table View crash, audio-bin crash, line-height and drop-shadow rendering, font rendering, copy/paste of prop objects.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior baseline not verified &mdash; new capability: faster 4K multi-screen rendering pipeline for setups running 4K backgrounds across IMAG + stage + lobby outputs.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Unglamorous but real &mdash; the kind of fix that prevents Sunday-morning frame drops on multi-output 4K rigs. Qualify on a backup machine before rolling to production.</p>
                  <p className="modal-source">Source: Renewed Vision downloads</p>
                </div>

                {/* No Updates */}
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', margin: '3rem 0 1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>No Updates This Week</div>
                <p style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 2 }}>Panasonic PTZ (AW-UE/UR, AW-RP) &middot; AJA (NAB items) &middot; FOR-A HANABI &middot; Fujinon &middot; Chauvet DJ &middot; Pathway Connectivity &middot; NovaStar &middot; Resolume &middot; Ross OGX cards &middot; AJA openGear / Apantac / Lynx Technik / Blackmagic openGear / Ensemble Designs &middot; Eos Mosaic/Augment3d/Paradigm/ColorSource/Response/Echo/Source Four LED &middot; MA dot2</p>

                {/* Analyst Notes */}
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', margin: '3rem 0 1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Analyst Notes</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>ETC priority.</strong> Treat ETC Eos v3.3.7 &rarr; v3.3.8 as the top priority this week. Audit version numbers before any show call. The risk is losing licensed channel count &mdash; affected units need to go back to ETC for re-licensing.</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>Blackmagic momentum.</strong> Blackmagic is the most active brand this window. Camera 10.2 PYXIS PDAF + Cloud Streaming plus three ST 2110 hardware ships repositions Blackmagic as a credible mid-budget ST 2110 vendor &mdash; relevant for any install bid that&apos;s been pricing Grass Valley or Sony as the only option.</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>Pre-InfoComm wave.</strong> Three high-impact pre-InfoComm announcements: Green Hippo Estuary, Planar 21by9 5K, and Cobalt&apos;s two new openGear cards. Expect a much heavier wave June 13&ndash;19.</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>MA grandMA3 v2.4.</strong> A real productivity update. Phaser Recipes + Universal Presets together should cut programming time on dynamic-effect-heavy shows. Worth a half-day eval on a non-show console.</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>Teradek economics.</strong> Teradek Bolt Mobile changes wireless monitoring economics for crew-heavy shoots &mdash; useful talking point for clients asking why monitor counts cost what they cost.</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>Mac Studio hold.</strong> Hold any Mac Studio refresh POs. Apple roadmap points to October 2026 for M5 generation. WWDC June 8 may add OS context but won&apos;t move hardware.</div>

                <div className="action-box">
                  <div className="action-label">Action Items</div>
                  <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>ETC Eos:</strong> If any Eos console in inventory is on v3.3.7 &mdash; do NOT apply the IMX RT firmware update. Roll forward to v3.3.8 immediately.</div>
                  <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>Blackmagic ATEM:</strong> ATEM 4 M/E Constellation IP at $7,995 is worth a spec comparison on any pending install bid currently priced on legacy SDI routing.</div>
                  <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>MA grandMA3:</strong> Schedule a half-day eval before InfoComm if you&apos;re running a dynamic-effect-heavy rig.</div>
                </div>

                {/* Footer */}
                <div style={{ borderTop: '1px solid var(--border)', marginTop: '2.5rem', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Gear Intel &middot; The Club &middot; Confirmed announcements only.</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Next sweep: Sunday, June 14, 2026</span>
                </div>
              </div>
            )}

            {/* ====== REPORT 001 (May) ====== */}
            {activeModal === 'modal-gear-001-may' && (
              <div>
                {/* Header */}
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#0066FF', marginBottom: '0.75rem' }}>Gear Intel &middot; The Club</div>
                <div style={{ height: '2px', background: '#0066FF', marginBottom: '1.5rem' }} />
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Coverage: May 2&ndash;11, 2026 &middot; Edge items: April 30 &ndash; May 1</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-dim)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '2.5rem' }}><strong style={{ color: 'var(--text-muted)' }}>How to read this report.</strong> Findings organized by brand. Before &rarr; After callouts isolate the specific capability delta so you can decide quickly whether it matters to a current rig. Edge-of-window items are dated 1&ndash;2 days outside the window but still actively promoted. Rumors excluded &mdash; confirmed announcements only.</p>

                {/* Executive Summary */}
                <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>Clear-Com Goes Cellular</h2>
                <p className="modal-body-text">Post-NAB quiet week. Clear-Com ships FreeSpeak Cell, Resolume adds an MCP server interface, and Apple sneaks auto-power-on into macOS 26.5.</p>

                <div style={{ margin: '2rem 0' }}>
                  <div className="modal-bullet">Clear-Com FreeSpeak Cell begins shipping in US/UK/EU &mdash; first mainstream LTE/5G intercom, integrated with Eclipse HX matrices.</div>
                  <div className="modal-bullet">Apple macOS 26.5 released May 11 &mdash; Mac Studio/mini gain auto-power-on for unattended playout/encode nodes.</div>
                  <div className="modal-bullet">Chauvet Professional COLORado PXL Curve 1 &mdash; single-head IP65 sibling to the PXL Curve 12, same DMX language, drop-in for existing rigs.</div>
                  <div className="modal-bullet">Resolume 7.26.1 released May 11 &mdash; MCP server interface for Arena/Avenue/Wire plus expanded REST API for show-control automation.</div>
                  <div className="modal-bullet">Elgato Wave XLR Pro shipping &mdash; 2-channel XLR interface, 80dB gain per input, Stream Deck-mappable hardware mixes.</div>
                  <div className="modal-bullet">DJI Mic Mini 2 launched globally April 28 &mdash; receiver now cross-compatible with Mic 2, Mic 3, and Mic Mini 2 TX. <span className="gear-tag edge">Edge-of-Window</span></div>
                  <div className="modal-bullet">ETC Eos Fixture Library v3.3.6 Build 11 &mdash; current production library for v3.3.6 consoles entering festival season.</div>
                  <div className="modal-bullet">Blackmagic Desktop Video 16.0.1 &mdash; patches 12G-SDI bug on DeckLink 8K Pro when HDMI mezzanine is absent.</div>
                </div>

                {/* Brand-by-Brand */}
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#0066FF', margin: '3rem 0 2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Brand-by-Brand Findings</div>

                {/* Clear-Com */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Clear-Com &mdash; FreeSpeak Cell</div>
                  <p className="modal-body-text">Clear-Com&apos;s cellular wireless intercom began shipping in the US, UK, and Europe in May 2026. Dual-SIM beltpacks run over public/private LTE and 5G, with initial integration limited to Eclipse HX matrices. Arcadia integration slated &quot;a few months after release&quot;; Gen-IC cloud support comes later in 2026.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior FreeSpeak II / Edge systems were RF-only (DECT 1.9 GHz, 2.4 GHz, 5 GHz) requiring frequency coordination and on-site RF infrastructure. FreeSpeak Cell adds LTE/5G transport supporting 100+ beltpacks with no RF coordination required.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Eliminates spectrum-coordination headaches for large venues, geographically distributed crews, and remote productions. Pricing not yet public.</p>
                  <p className="modal-source">Source: Clear-Com press &middot; SVG &middot; ProSoundWeb</p>
                </div>

                {/* Apple macOS */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Apple &mdash; macOS 26.5</div>
                  <p className="modal-body-text">Released May 11, 2026. Production-relevant addition: new auto-power and remote-restart settings for Mac mini, Mac Studio, and iMac. 69 security fixes (9 kernel). No new pro-audio/video framework changes in release notes.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior macOS 26.4 had no toggle for automatic power-on when AC power returns. 26.5 adds it &mdash; racked Mac Studio/mini used as playout, streaming, or unattended encode/decode nodes will now self-recover after a power event without manual intervention.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Reduces site-visit risk for unattended Macs in install jobs &mdash; church AV, signage, broadcast facility encode nodes.</p>
                  <p className="modal-source">Source: 9to5Mac &middot; Apple macOS 26.5 release notes</p>
                </div>

                {/* Apple iOS */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Apple &mdash; iOS 26.5 / iPadOS 26.5</div>
                  <p className="modal-body-text">Released May 11, 2026. End-to-end encrypted RCS messages (beta), Maps Suggested Places, 50+ security fixes.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Maintenance/security update only. No new pro audio/video framework changes confirmed. Audio Mix and studio-quality recording on AirPods Pro 2/3/4 unchanged.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Limited direct production impact &mdash; primarily a security pass for iPhone/iPad-based field rigs (Blackmagic Camera app, prompter, Frame.io review).</p>
                  <p className="modal-source">Source: MacRumors</p>
                </div>

                {/* Chauvet */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Chauvet Professional &mdash; COLORado PXL Curve 1</div>
                  <p className="modal-body-text">Single-head sibling to the PXL Curve 12. IP65-rated RGBW beam/wash with 60&deg; pan, 200&deg; tilt, dual linear CW/WW strobe cells (160 SMD LEDs in 8 zones of control), output ~14,000 lux at 5m. Trade press launch May 11, 2026.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior PXL Curve family contained only the Curve 12 (12 controllable 45W RGBW heads per batten). The Curve 1 introduces a single-head version using the same DMX programming language &mdash; individual units drop into existing Curve 12 rigs without re-mapping.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Drop-in accent/fill positions for existing PXL Curve 12 rigs. IP65 single-cell for smaller rooms and church installs that want the look without 12-cell battens.</p>
                  <p className="modal-source">Source: PLSN May 2026 &middot; Chauvet product page &middot; digitalavmagazine</p>
                </div>

                {/* Resolume */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Resolume &mdash; 7.26.1</div>
                  <p className="modal-body-text">Released May 11, 2026 (macOS). Headline 7.26 features refined in this release: MCP server interface for Arena/Avenue/Wire &mdash; enabling Claude, OpenAI Codex, Google Antigravity, and similar AI desktop apps to assist composition building &mdash; plus expanded REST API.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior 7.25.x had no MCP server interface and a more limited REST API. 7.26.x adds MCP support and lets clients load compositions, open multiple clips, validate file openability, and add multiple columns in a single REST call (prior API was single-clip/single-column per call).</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> First mainstream media-server/VJ tool with a native MCP interface &mdash; opens an AI-assisted cueing path. Expanded REST also reduces show-control round trips for OSC/HTTP integrators driving Resolume from external automation.</p>
                  <p className="modal-source">Source: Resolume forum release thread &middot; Resolume downloads</p>
                </div>

                {/* Elgato */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Elgato &mdash; Wave XLR Pro</div>
                  <p className="modal-body-text">Shipping window opens May 2026. USD $350. 2 independent XLR preamps, 80dB ultra-low-noise gain per input, onboard Wave FX DSP, Clipguard 2.0, VST insert support, and 5 hardware mixes mappable to Stream Deck. Companion Wave Link 3.0 software already available.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Original Wave XLR was single-channel, 75dB gain. Wave XLR Pro: 2 channels, 80dB gain per input, hardware-mappable mixing for solo-op streaming/podcast/scratch-mix workflows.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Drives high-gain dynamic mics (SM7B, RE20, PodMic) without a Cloudlifter. Hardware-mappable mixing for solo-op streaming workflows.</p>
                  <p className="modal-source">Source: Elgato product page &middot; Corsair press</p>
                </div>

                {/* DJI */}
                <div className="modal-brand">
                  <div className="modal-brand-name">DJI Wireless &mdash; Mic Mini 2 <span className="gear-tag edge">Edge-of-Window</span></div>
                  <p className="modal-body-text">Global launch April 28, 2026. 11g transmitter, 3 voice tone presets (Regular/Bright/Rich), 2-level active noise cancelling, 48kHz/24-bit, automatic limiting, magnetic interchangeable color covers. EU/UK launch; US pending FCC certification. From &euro;33 (single TX) / &euro;59 (basic kit).</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Original Mic Mini had no voice tone presets and fixed cosmetic design. Mic Mini 2 adds 3 EQ presets, faster TX charging, color customization. The Mic 3 mobile USB-C receiver now also accepts Mic 2, Mic 3, Mic Mini, and Mic Mini 2 TX &mdash; prior Mic Mini receiver only paired with Mini-family TX.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Cheap B-cam/interview/multi-presenter coverage. Cross-compatibility with Mic 3 mobile RX is the real win &mdash; one receiver across kits.</p>
                  <p className="modal-source">Source: CineD &middot; DroneXL</p>
                </div>

                {/* Panasonic CCU */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Panasonic &mdash; AK-UCU700 CCU Firmware</div>
                  <p className="modal-body-text">Major firmware adds support for high-speed shooting within SMPTE ST 2110 IP environments. May 2026. Specific version number not disclosed.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior baseline not verified &mdash; new capability: high-speed (high frame rate) capture transported natively over ST 2110. Previously, ST 2110 connectivity existed but without high-speed shooting mode support.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Live sports/event productions running native ST 2110 fabric no longer need a parallel SDI path for slo-mo cameras.</p>
                  <p className="modal-source">Source: Panasonic press release</p>
                </div>

                {/* Panasonic PTZ */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Panasonic &mdash; AW-UE5 4K PTZ</div>
                  <p className="modal-body-text">New compact ultra-wide-angle 4K/60p PTZ with NDI|HX support; successor to AW-UE4. Shipping/promotion active in window.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">AW-UE4 maxed at 4K/30p. AW-UE5 doubles temporal limit to 4K/60p; ultra-wide field of view retained.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Doubles temporal resolution on a compact PTZ for huddle rooms, classroom captures, and corporate streaming installs. NDI|HX keeps deployment costs low.</p>
                  <p className="modal-source">Source: Panasonic press release</p>
                </div>

                {/* Sony BURANO */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Sony &mdash; BURANO Firmware V3.0</div>
                  <p className="modal-body-text">Release window opens May 2026. Adds two new imager scan modes, S700P command compatibility for live remote control, HLG Mild custom mode, and color peaking visibility improvements.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">V3.0 adds FF 5.8K 6:5 (full-frame 2&times; anamorphic) and S35c 3.8K 16:9 up to 120fps scan modes &mdash; prior baseline had no native FF 6:5 anamorphic mode. V3.0 also expands S700P-compatible remote control to include FPS, shutter, and saturation parameters.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Brings BURANO into live multi-camera flow via S700P RCP control panels. Unlocks anamorphic/120p coverage without an external recorder.</p>
                  <p className="modal-source">Source: Sony BURANO firmware roadmap</p>
                </div>

                {/* ETC Fixture Library */}
                <div className="modal-brand">
                  <div className="modal-brand-name">ETC &mdash; Eos Fixture Library v3.3.6 Build 11</div>
                  <p className="modal-body-text">Companion library update to Eos v3.3.6. Adds and corrects manufacturer fixture profiles. Posted May 2026.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">Prior library was v3.3.5.5 (January 2026). Build 11 is now the current shipping library on the Fixture Library Hub with incremental profile additions/corrections aligned to Eos v3.3.6.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> Programmers patching new fixtures going into festival season need this build to avoid hand-building profiles.</p>
                  <p className="modal-source">Source: ETC Eos software versions page</p>
                </div>

                {/* Blackmagic Desktop Video */}
                <div className="modal-brand">
                  <div className="modal-brand-name">Blackmagic Design &mdash; Desktop Video 16.0.1</div>
                  <p className="modal-body-text">Released May 5&ndash;6, 2026. Maintenance update fixing a 12G-SDI bug on DeckLink 8K Pro when the optional HDMI mezzanine card is not installed.</p>
                  <div className="before-after">
                    <div className="before-after-label">Before &rarr; After</div>
                    <div className="before-after-text">16.0 introduced regression behavior in DeckLink 8K Pro without HDMI mezzanine. 16.0.1 restores correct 12G-SDI signal handling in that specific configuration.</div>
                  </div>
                  <p className="modal-why"><strong>Why it matters:</strong> DeckLink 8K Pro is a workhorse ingest/playout I/O for switcher rigs and edit bays. Flagged because it restores a primary I/O capability on a flagship SKU.</p>
                  <p className="modal-source">Source: Newsshooter</p>
                </div>

                {/* No Updates */}
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', margin: '3rem 0 1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>No Updates This Week</div>
                <p style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 2 }}>Ross Video (Carbonite/Acuity/Ultrix/DashBoard) &middot; FOR-A HANABI &middot; AJA &middot; Decimator Design &middot; openGear ecosystem (Cobalt/Apantac/Lynx Technik/Ensemble Designs/Ross OGX) &middot; Canon (Cinema EOS firmware not yet released) &middot; Fujinon &middot; MA Lighting (still on v2.3.x) &middot; Pathway Connectivity &middot; Chauvet DJ &middot; ETC ColorSource/fos/4/Source Four LED/Response/Sensor3/Echo/Augment3d/Mosaic/Paradigm &middot; Disguise &middot; Green Hippo/Hippotizer &middot; NovaStar &middot; Planar &middot; ProPresenter &middot; Teradek</p>

                {/* Analyst Notes */}
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', margin: '3rem 0 1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Analyst Notes</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>Post-NAB trough.</strong> Quiet post-NAB cycle. May 2-11 is the typical 2&ndash;3 week trough after NAB. Most items are either firmware previewed at NAB now shipping, or trade-press re-runs of April reveals. Resolume MCP and Clear-Com FreeSpeak Cell shipping are the rare actually-new datapoints.</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>MCP/AI integration.</strong> MCP/AI integration starts hitting media servers. Resolume 7.26&apos;s MCP interface is worth tracking &mdash; if Disguise, Hippotizer, or ProPresenter follow, AI-assisted show-build moves from novelty to viable workflow tool.</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>Cellular intercom.</strong> Cellular intercom is real now. FreeSpeak Cell shipping is a structural change for any venue install where RF coordination is the bottleneck. Worth raising with church-AV and conference-room clients.</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>Apple auto-power-on.</strong> Apple auto-power-on for Mac Studio/mini. Easy to miss in the macOS 26.5 notes but materially useful for any unattended Mac doing playout, signage, or encode duty. Push the update on any installed Mac rack.</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>DJI US availability.</strong> DJI Mic Mini 2 US availability. On sale globally except the US (no FCC certification yet). If interview/B-cam audio is a near-term spend, the Mic 3 is the safer US purchase until certification lands.</div>
                <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>InfoComm watch.</strong> Watch for InfoComm 2026 (June 17&ndash;19). Planar, NovaStar, and the install-AV brands are saving their next product cycle for InfoComm.</div>

                <div className="action-box">
                  <div className="action-label">Action Items</div>
                  <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>macOS 26.5:</strong> Push macOS 26.5 on any racked Mac Studio or Mac mini doing unattended playout, signage, or encode duty &mdash; the auto-power-on setting alone is worth the update.</div>
                  <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>Resolume:</strong> If you run Resolume on any rig, 7.26.1 is a straightforward update. The MCP interface is worth a look even as a future-proofing move.</div>
                  <div className="modal-bullet"><strong style={{ color: 'var(--white)' }}>DJI Mic Mini 2:</strong> Hold DJI Mic Mini 2 US purchases until FCC certification lands. Mic 3 is the safe buy in the meantime.</div>
                </div>

                {/* Footer */}
                <div style={{ borderTop: '1px solid var(--border)', marginTop: '2.5rem', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Gear Intel &middot; The Club &middot; Confirmed announcements only.</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Next sweep: Sunday, May 17, 2026</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
