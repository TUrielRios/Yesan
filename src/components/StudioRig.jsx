import React from 'react';
import { STUDIO_RIG_SECTIONS } from '../data/studioData';

export const StudioRig = () => {
  return (
    <section id="rig" className="section-padding rig-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-number">[03]</div>
          <div className="section-title-wrap">
            <h2 className="section-title">STUDIO RIG & SPECS TÉCNICAS</h2>
            <p className="section-desc">
              Guitarras de autor, cadenas de voz analógicas, sintetizadores y herramientas DAW del estudio de Yesan.
            </p>
          </div>
        </div>

        <div className="rig-grid">
          {STUDIO_RIG_SECTIONS.map((sec, idx) => (
            <div key={idx} className="rig-card">
              <div className="rig-card-header">
                <span className="rig-cat">{sec.category}</span>
              </div>
              <ul className="rig-list">
                {sec.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <span className="rig-item-name">{item.name}</span>
                    <span className="tag-sm">{item.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
