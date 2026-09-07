import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Play, Pause, Volume2, Music, Radio } from 'lucide-react';
import { SPOTIFY_TRACKS, HERO_SAMPLER_TRACKS } from '../data/tracks';

export const SpotifyPlayerConsole = ({ currentTrackKey, onSelectTrack }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  const trackInfo = SPOTIFY_TRACKS[currentTrackKey] || SPOTIFY_TRACKS['chico_estrella'];
  const embedType = trackInfo.type || 'track';

  // Audio Canvas Visualizer Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let phase = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = 4;
      const gap = 3;
      const numBars = Math.floor(canvas.width / (barWidth + gap));

      for (let i = 0; i < numBars; i++) {
        const hMultiplier = isPlayingAudio ? Math.sin(phase + i * 0.2) * 0.5 + 0.5 : Math.sin(i * 0.1) * 0.2 + 0.2;
        const barHeight = Math.max(4, hMultiplier * canvas.height * 0.85);
        const x = i * (barWidth + gap);
        const y = (canvas.height - barHeight) / 2;

        ctx.fillStyle = isPlayingAudio ? '#ffffff' : '#444444';
        ctx.fillRect(x, y, barWidth, barHeight);
      }

      phase += 0.15;
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlayingAudio]);

  const toggleAudioSim = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <div className="hero-console">
      <div className="console-top-bar">
        <div className="console-indicator">
          <span className={`rec-dot ${isPlayingAudio ? 'active-play' : ''}`}></span>
          <span className="rec-text">YESAN OFFICIAL REPRODUCER</span>
        </div>
        <div className="track-title-display" id="currentTrackTitle">
          SELECTED TRACK: [{trackInfo.title.toUpperCase()}]
        </div>
        <div className="bpm-counter">
          <a
            href={trackInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="spotify-link-btn"
          >
            OPEN IN SPOTIFY <ExternalLink size={12} style={{ display: 'inline', marginLeft: '4px' }} />
          </a>
        </div>
      </div>

      <div className="console-body">
        {/* Visualizer Bar */}
        <div className="visualizer-container">
          <canvas ref={canvasRef} width={800} height={40} className="visualizer-canvas" />
          <div className="visualizer-meta">
            <span className="vis-stat"><Radio size={12} /> {trackInfo.bpm || '130 BPM'}</span>
            <span className="vis-stat"><Music size={12} /> {trackInfo.keySignature || 'D MINOR'}</span>
            <span className="vis-stat">{trackInfo.duration || '3:30'}</span>
          </div>
        </div>

        {/* Spotify Embed Player */}
        <div className="spotify-player-wrapper">
          <iframe
            key={currentTrackKey}
            id="spotifyIframe"
            style={{ borderRadius: '0px' }}
            src={`https://open.spotify.com/embed/${embedType}/${trackInfo.id}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`Spotify player for ${trackInfo.title}`}
          ></iframe>
        </div>

        <div className="console-controls">
          <div className="track-selector-btns">
            {HERO_SAMPLER_TRACKS.map((item) => (
              <button
                key={item.key}
                className={`real-track-btn ${currentTrackKey === item.key ? 'active' : ''}`}
                onClick={() => onSelectTrack(item.key)}
              >
                <span>{item.label}</span>
                <span className="btn-tag-mini">[{item.tag}]</span>
              </button>
            ))}
          </div>

          <button
            className={`btn-play-sim ${isPlayingAudio ? 'active-sim' : ''}`}
            onClick={toggleAudioSim}
          >
            {isPlayingAudio ? <Pause size={16} /> : <Play size={16} />}
            <span>{isPlayingAudio ? 'PAUSE WAVEFORM' : 'TEST WAVEFORM'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
