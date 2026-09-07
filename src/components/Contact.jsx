import React, { useState } from 'react';
import { Send, Check, Copy, Mail, Globe, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Simulate backend transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus({
        type: 'success',
        message: `// TRANSMISIÓN EXITOSA.\nCONSULTA RECIBIDA DE [${formData.name.toUpperCase()}]. EL MANAGEMENT DE YESAN MUSIC LLC RESPONDERÁ A [${formData.email.toUpperCase()}] EN MENOS DE 24 HORAS.`
      });
      setFormData({ name: '', email: '', inquiryType: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-number">[04]</div>
          <div className="section-title-wrap">
            <h2 className="section-title">CONTACTO & CONTRATACIONES</h2>
            <p className="section-desc">
              Featurings como cantante, licencias de canciones, producción musical y consultoría LLC.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          
          {/* Left Info Panel */}
          <div className="contact-info-panel">
            <div className="panel-box">
              <h3 className="panel-heading">MANAGEMENT & BUSINESS</h3>
              <p className="panel-text">
                Canal directo para sellos discográficos, managers de artistas, agencias de sync y colaboradores globales.
              </p>
              
              <div className="contact-meta-list">
                <div className="meta-item">
                  <span className="meta-title">// EMAIL DE MANAGEMENT</span>
                  <div className="email-copy-wrapper">
                    <a href="mailto:contact@yesanmusic.com" className="meta-value">
                      contact@yesanmusic.com
                    </a>
                    <button
                      type="button"
                      className="btn-copy-sm"
                      onClick={() => handleCopyEmail('contact@yesanmusic.com')}
                      title="Copiar email"
                    >
                      {copiedEmail === 'contact@yesanmusic.com' ? (
                        <Check size={14} className="copied-icon" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="meta-item">
                  <span className="meta-title">// LICENCIAS & PUBLISHING (LLC)</span>
                  <div className="email-copy-wrapper">
                    <a href="mailto:licensing@yesanmusic.com" className="meta-value">
                      licensing@yesanmusic.com
                    </a>
                    <button
                      type="button"
                      className="btn-copy-sm"
                      onClick={() => handleCopyEmail('licensing@yesanmusic.com')}
                      title="Copiar email"
                    >
                      {copiedEmail === 'licensing@yesanmusic.com' ? (
                        <Check size={14} className="copied-icon" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="meta-item">
                  <span className="meta-title">// CANALES OFICIALES DE YESAN</span>
                  <div className="social-links-mono">
                    <a href="https://open.spotify.com/artist/6pJPxDgaE0H343SrASnY9J" target="_blank" rel="noopener noreferrer">SPOTIFY</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
                    <a href="https://genius.com" target="_blank" rel="noopener noreferrer">GENIUS</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Brutalist Form */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="brutalist-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">// NOMBRE O ENTIDAD *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre, sello o agencia"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">// CORREO ELECTRÓNICO *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu.email@dominio.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inquiryType">// TIPO DE SOLICITUD *</label>
                <select
                  id="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Seleccionar tipo de proyecto...</option>
                  <option value="vocal">Feat / Participación como Cantante</option>
                  <option value="production">Producción Musical / Beat Direction</option>
                  <option value="licensing">Licencias Sync & Master (YESAN MUSIC LLC)</option>
                  <option value="album">Producción Ejecutiva de Álbum Completo</option>
                  <option value="press">Prensa & Corporativo LLC</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">// DETALLES DEL PROYECTO / MENSAJE *</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe la propuesta, fechas, presupuesto o alcance del trabajo..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={isSubmitting}
              >
                <span className="btn-text">
                  {isSubmitting ? 'TRANSMITIENDO MENSAJE...' : 'TRANSMITIR MENSAJE'}
                </span>
                <ArrowRight size={18} className="btn-arrow" />
              </button>

              {submissionStatus && (
                <div className={`form-status-msg ${submissionStatus.type}`}>
                  {submissionStatus.message}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
