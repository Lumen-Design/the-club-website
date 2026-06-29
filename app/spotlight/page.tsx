'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

interface SpotlightMember {
  id: string;
  name: string;
  club: string;
  clubColor: string;
  role: string;
  about: string;
  bucketList: string;
  fromAFriend: string;
  handle: string;
  hasAspectRatio?: boolean;
}

const members: SpotlightMember[] = [
  {
    id: 'modal-spotlight-001',
    name: 'Alex Rivera',
    club: 'Sound Club',
    clubColor: '#0066FF',
    role: 'FOH Engineer \u00B7 8 Years Live',
    about: 'This person\u2019s story will go here.',
    bucketList: 'One thing they want to do before they\u2019re done.',
    fromAFriend: 'A short story or quote from someone who knows them well.',
    handle: '@handle',
    hasAspectRatio: true,
  },
  {
    id: 'modal-spotlight-002',
    name: 'Jordan Lee',
    club: 'Video Club',
    clubColor: '#FF0088',
    role: 'Video Director \u00B7 Touring & Corporate',
    about: 'This person\u2019s story will go here.',
    bucketList: 'One thing they want to do before they\u2019re done.',
    fromAFriend: 'A short story or quote from someone who knows them well.',
    handle: '@handle',
    hasAspectRatio: true,
  },
  {
    id: 'modal-spotlight-003',
    name: 'Morgan Davis',
    club: 'Lighting Club',
    clubColor: '#A8FF00',
    role: 'Lighting Designer \u00B7 Live Events',
    about: 'This person\u2019s story will go here.',
    bucketList: 'One thing they want to do before they\u2019re done.',
    fromAFriend: 'A short story or quote from someone who knows them well.',
    handle: '@handle',
  },
  {
    id: 'modal-spotlight-004',
    name: 'Taylor Kim',
    club: 'Sound Club',
    clubColor: '#0066FF',
    role: 'Systems Engineer \u00B7 Install & Live',
    about: 'This person\u2019s story will go here.',
    bucketList: 'One thing they want to do before they\u2019re done.',
    fromAFriend: 'A short story or quote from someone who knows them well.',
    handle: '@handle',
  },
  {
    id: 'modal-spotlight-005',
    name: 'Casey Nguyen',
    club: 'Video Club',
    clubColor: '#FF0088',
    role: 'Camera Operator \u00B7 Broadcast & Touring',
    about: 'This person\u2019s story will go here.',
    bucketList: 'One thing they want to do before they\u2019re done.',
    fromAFriend: 'A short story or quote from someone who knows them well.',
    handle: '@handle',
  },
  {
    id: 'modal-spotlight-006',
    name: 'Riley Sato',
    club: 'Lighting Club',
    clubColor: '#A8FF00',
    role: 'Programmer \u00B7 Concert & Theatre',
    about: 'This person\u2019s story will go here.',
    bucketList: 'One thing they want to do before they\u2019re done.',
    fromAFriend: 'A short story or quote from someone who knows them well.',
    handle: '@handle',
  },
];

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: '1rem',
  borderBottom: '1px solid var(--border)',
  paddingBottom: '0.75rem',
};

export default function Spotlight() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    document.body.style.overflow = '';
  }, []);

  function openModal(id: string) {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && activeModal) {
        closeModal();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, closeModal]);

  const activeMember = members.find((m) => m.id === activeModal);

  return (
    <>
      {/* Hero */}
      <section
        className="disc-hero"
        style={{
          background:
            'radial-gradient(ellipse at 60% 40%, rgba(255,255,255,0.04) 0%, #050505 70%)',
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
            Spotlight
          </div>
          <h1 className="disc-hero-title">
            The<br />
            Spotlight
          </h1>
          <p className="disc-hero-desc">
            One member. Their story. Their moment.
          </p>
        </div>
      </section>

      {/* In The Spotlight Grid */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">In The Spotlight</p>
          <div className="spotlight-grid">
            {members.map((member) => (
              <div
                key={member.id}
                className="spotlight-tile"
                onClick={() => openModal(member.id)}
              >
                <div
                  style={{
                    width: '100%',
                    minHeight: '320px',
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
                    {member.name}
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: member.clubColor,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {member.club}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
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
            Spotlight
          </span>
        </div>
      </footer>

      {/* Spotlight Modal Overlay */}
      {activeModal && activeMember && (
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
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            style={{
              background: '#0A0A0A',
              border: '1px solid #1A1A1A',
              width: '90vw',
              maxWidth: '860px',
              maxHeight: '85vh',
              overflowY: 'auto',
              borderRadius: '2px',
              padding: '3rem',
              position: 'relative',
            }}
          >
            <button
              onClick={closeModal}
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

            {/* Photo placeholder */}
            <div
              style={{
                width: '100%',
                maxWidth: '300px',
                ...(activeMember.hasAspectRatio
                  ? { aspectRatio: '1/1' }
                  : { minHeight: '300px' }),
                background: '#1A1A1A',
                borderRadius: '2px',
                marginBottom: '2rem',
              }}
            />

            {/* Name */}
            <div
              style={{
                fontSize: 'clamp(24px,3vw,36px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: 'var(--white)',
                marginBottom: '0.5rem',
              }}
            >
              {activeMember.name}
            </div>

            {/* Club */}
            <div
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: activeMember.clubColor,
                marginBottom: '0.5rem',
              }}
            >
              {activeMember.club}
            </div>

            {/* Role */}
            <div
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                marginBottom: '2.5rem',
              }}
            >
              {activeMember.role}
            </div>

            {/* About */}
            <div style={sectionHeadingStyle}>About</div>
            <p
              style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
              }}
            >
              {activeMember.about}
            </p>

            {/* Bucket List */}
            <div style={sectionHeadingStyle}>Bucket List</div>
            <p
              style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
              }}
            >
              {activeMember.bucketList}
            </p>

            {/* From a Friend */}
            <div style={sectionHeadingStyle}>From a Friend</div>
            <p
              style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
              }}
            >
              {activeMember.fromAFriend}
            </p>

            {/* Handle */}
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              {activeMember.handle}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
