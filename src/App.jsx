import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Discography } from './components/Discography';
import { Biography } from './components/Biography';
import { StudioRig } from './components/StudioRig';
import { LlcSection } from './components/LlcSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AudioBar } from './components/AudioBar';

export function App() {
  const [currentTrackKey, setCurrentTrackKey] = useState('chico_estrella');
  const [showAudioBar, setShowAudioBar] = useState(true);

  const handleSelectTrack = (trackKey) => {
    setCurrentTrackKey(trackKey);
    setShowAudioBar(true);
  };

  return (
    <div className="app-container">
      {/* Background Grid & Noise FX Overlay */}
      <div className="bg-grid"></div>
      <div className="noise-overlay"></div>

      {/* Main Header */}
      <Header />

      {/* App Body Content */}
      <main>
        <Hero
          currentTrackKey={currentTrackKey}
          onSelectTrack={handleSelectTrack}
        />
        <Discography
          currentTrackKey={currentTrackKey}
          onSelectTrack={handleSelectTrack}
        />
        <Biography />
        <StudioRig />
        <LlcSection />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Audio Sampler Fixed Floating Notification Bar */}
      {showAudioBar && (
        <AudioBar
          currentTrackKey={currentTrackKey}
          onDismiss={() => setShowAudioBar(false)}
        />
      )}
    </div>
  );
}

export default App;
