// src/components/TranscriptCard.js
'use client'; // Mark this as a Client Component

import React, { useState } from 'react';

function NoteCard({
  heading = "This is heading",
  description = "Card description with lots of great facts and interesting details.",
  href = "#"
}) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    maxWidth: '100%',
    backgroundColor: '#f2f8f9',
    borderRadius: '4px',
    padding: '32px 24px',
    margin: '12px',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 0,
    display: 'block',
    transition: 'all 0.3s ease-out',
    boxShadow: isHovered ? '0 4px 8px rgba(38, 38, 38, 0.2)' : 'none',
  };

  const headingStyle = {
    fontSize: '17px',
    fontWeight: '600',
    lineHeight: '20px',
    color: isHovered ? 'rgba(255, 255, 255, 0.8)' : '#666',
    margin: '0',
    transition: 'all 0.3s ease-out',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: isHovered ? 'rgba(255, 255, 255, 0.8)' : '#666',
    margin: '0',
    transition: 'all 0.3s ease-out',
  };

  const goCornerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '32px',
    height: '32px',
    overflow: 'hidden',
    top: '0',
    right: '0',
    backgroundColor: '#00838d',
    borderRadius: '0 4px 0 32px',
  };

  const goArrowStyle = {
    marginTop: '-4px',
    marginRight: '-4px',
    color: 'white',
    fontFamily: 'courier, sans-serif',
  };

  const beforeStyle = {
    position: 'absolute',
    zIndex: -1,
    top: '-16px',
    right: '-16px',
    background: '#00838d',
    height: '32px',
    width: '32px',
    borderRadius: '32px',
    transform: isHovered ? 'scale(50)' : 'scale(1)',
    transformOrigin: '100% 50%',
    transition: 'transform 0.5s ease-out',
  };

  return (
    <div className="card">
      <a
        href={href}
        style={cardStyle}
        className="card1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={beforeStyle}></div>
        <p style={headingStyle}>{heading}</p>
        <p style={descriptionStyle} className="small">{description}</p>
      </a>
    </div>
  );
}

export default NoteCard;