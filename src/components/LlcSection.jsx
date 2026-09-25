import React from 'react';
import { ShieldCheck, Building2, Globe, FileText } from 'lucide-react';
import { LLC_DETAILS } from '../data/studioData';

export const LlcSection = () => {
  return (
    <section id="llc" className="section-padding llc-section">
      <div className="container">
        
        <div className="llc-box">
          <div className="llc-header">
            <div className="llc-badge">
              <ShieldCheck size={16} style={{ display: 'inline', marginRight: '6px', color: '#ffffff' }} />
              [ENTIDAD LEGAL & CORPORATIVA OFICIAL]
            </div>
            <h2 className="llc-title">MONTANA NEVADA LLC</h2>
            <p className="llc-subtitle">
              REGISTRO CORPORATIVO, PUBLICACIÓN DE OBRAS MUSICALES Y LICENCIAMIENTO
            </p>
          </div>

          <div className="llc-details-grid">
            {LLC_DETAILS.map((item, idx) => (
              <div key={idx} className="llc-col">
                <span className="llc-label">{item.label}</span>
                <span className={`llc-val ${item.isActive ? 'status-active' : ''}`}>
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
