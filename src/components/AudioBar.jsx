import React from 'react';
import { Volume2, X } from 'lucide-react';
import { SPOTIFY_TRACKS } from '../data/tracks';

export const AudioBar = ({ currentTrackKey, onDismiss }) => {
  if (!currentTrackKey) return null;

  const track = SPOTIFY_TRACKS[currentTrackKey] || SPOTIFY_TRACKS['chico_estrella'];

  return (
    <div className="audio-bar">
      <div className="audio-bar-inner">
        <div className="now-playing-info">
          <span className="rec-dot active-play"></span>
          <Volume2 size={16} />
          <span id="audioBarTitle">REPRODUCIENDO: [{track.title}]</span>
        </div>
        <button
          className="btn-stop-sm"
          onClick={onDismiss}
          title="Cerrar notificación"
        >
          <X size={14} />
          <span>CERRAR</span>
        </button>
      </div>
    </div>
  );
};
