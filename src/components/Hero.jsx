import React from 'react';
import { SpotifyPlayerConsole } from './SpotifyPlayerConsole';

export const Hero = ({ currentTrackKey, onSelectTrack }) => {
  const tickerItems = [
    '• YESAN (SOLO ARTIST & CANTANTE)',
    '• CHICO ESTRELLA',
    '• PSICOPATÍA ÁLBUM',
    '• SIN MIRAR',
    '• MORDIENDO EL BOZAL',
    '• VIDA DE ROCK',
    '• MONTANA NEVADA LLC',
    '• LIVE GUITARS & TRAP-ROCK',
    '• MASTER RECORDING & SYNC RIGHTS',
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        
        <div className="hero-header-meta">
          <span className="badge-mono">[DISC 001 // SINGER, COMPOSER & EXECUTIVE PRODUCER]</span>
          <span className="badge-mono">YESAN &bull; DUKI &bull; YSY A &bull; ASAN &bull; MILO J</span>
        </div>

        <div className="hero-title-box">
          <h1 className="hero-title">YESAN</h1>
          <div className="hero-subtitle-bar">
            <span className="subtitle-text">
              CANTANTE / GUITARRISTA / TRAP & HARD-ROCK HYBRID / PUBLISHING LLC
            </span>
            <span className="subtitle-code">SYS.ID: 808-YESAN-2026</span>
          </div>
        </div>

        {/* Hero Audio Sampler Console */}
        <SpotifyPlayerConsole
          currentTrackKey={currentTrackKey}
          onSelectTrack={onSelectTrack}
        />

        {/* Marquee Ticker */}
        <div className="ticker-wrapper">
          <div className="ticker-track">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
