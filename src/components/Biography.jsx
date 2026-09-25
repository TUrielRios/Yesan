import React from 'react';
import { Mic, Guitar, Radio, Award, Activity } from 'lucide-react';

export const Biography = () => {
  const stats = [
    { num: '1.5B+', label: 'TOTAL STREAMS GLOBALES', icon: Activity },
    { num: '#1', label: 'LATAM ALBUM CHARTS', icon: Award },
    { num: '10+', label: 'DISCOS DE PLATINO', icon: Radio },
  ];

  const tags = [
    'CANTANTE / VOCALISTA',
    'COMPOSITOR',
    'MULTI-INSTRUMENTISTA',
    'GUITARRAS EN VIVO',
    'PRODUCCIÓN EJECUTIVA',
    'SINTESIS ANALÓGICA',
    'BEATMAKING HARD-ROCK',
    'LICENCIAS SYNC LLC'
  ];

  return (
    <section id="bio" className="section-padding bio-section">
      <div className="container">
        
        <div className="bio-grid">
          
          <div className="bio-left">
            <div className="section-number">[02]</div>
            <h2 class="section-title">EL ARTISTA & PRODUCTOR</h2>
            
            <div className="bio-quote-box">
              <p className="bio-quote">
                "FUSIONANDO VOCES OSCURAS, RIFFS DE GUITARRA DISTORSIONADOS Y 808s FUTURISTAS."
              </p>
            </div>
            
            <div className="stats-grid">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="stat-card">
                    <Icon size={20} className="stat-icon" />
                    <span className="stat-num">{stat.num}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bio-right">
            <div className="bio-text">
              <p className="lead-para">
                <strong>Federico Yesan</strong> (conocido artísticamente como <strong>YESAN</strong>) es un cantante, multi-instrumentista y arquitecto sonoro fundamental de la escena urbana y trap en habla hispana. Además de ser el productor ejecutivo detrás de los álbumes históricos de la cultura argentina, Yesan destaca como <strong>cantante y solista</strong>, imponiendo una voz identitaria que entrelaza la crudeza del rock con la fuerza del trap moderno.
              </p>
              <p>
                Con sencillos solistas y obras como <em>"Chico Estrella"</em>, <em>"Psicopatía"</em>, <em>"Sin Mirar"</em> y colaboraciones en dúo como <em>"Mordiendo el Bozal"</em> (junto a YSY A), Yesan interpreta, compone e instrumenta cada pieza desde la guitarra eléctrica analógica hasta el diseño de sintes modulares.
              </p>
              <p>
                A través de su entidad legal corporativa <strong>MONTANA NEVADA LLC</strong>, gestiona sus lanzamientos solistas, servicios de producción musical integral, co-autoría, composición de letras y melodías vocales, así como derechos de sincronización para plataformas y proyectos internacionales.
              </p>
            </div>

            <div className="tag-cloud">
              {tags.map((tag, idx) => (
                <span key={idx} className="mono-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
