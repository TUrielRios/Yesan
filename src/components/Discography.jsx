import React, { useState } from 'react';
import { Search, Play, Volume2 } from 'lucide-react';
import { DISCOGRAPHY_CATEGORIES, DISCOGRAPHY_ITEMS } from '../data/discographyData';

export const Discography = ({ currentTrackKey, onSelectTrack }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = DISCOGRAPHY_ITEMS.filter((item) => {
    const matchesFilter =
      activeFilter === 'all' || item.category.includes(activeFilter);

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const handlePlayClick = (trackKey) => {
    onSelectTrack(trackKey);
    const heroConsole = document.querySelector('.hero-console');
    if (heroConsole) {
      heroConsole.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="discography" className="section-padding discography-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-number">[01]</div>
          <div className="section-title-wrap">
            <h2 className="section-title">DISCOGRAFÍA & CRÉDITOS</h2>
            <p className="section-desc">
              Canciones como cantante principal, proyectos solistas, colaboraciones estelares y producciones ejecutivas.
            </p>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="disco-toolbar">
          <div className="disco-filters">
            {DISCOGRAPHY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="disco-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por tema, artista o rol..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="disco-search-input"
            />
          </div>
        </div>

        {/* Discography Table */}
        <div className="discography-table">
          <div className="table-head">
            <div className="col-num">#</div>
            <div className="col-track">PISTA / PROYECTO</div>
            <div className="col-artist">ARTISTA</div>
            <div className="col-role">ROL / APORTE</div>
            <div className="col-year">AÑO</div>
            <div className="col-action">ESCUCHAR</div>
          </div>

          <div className="table-body" id="discoTableBody">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => {
                const isSelected = currentTrackKey === item.spotifyKey;
                return (
                  <div
                    key={item.id}
                    className={`table-row ${isSelected ? 'selected-row' : ''}`}
                  >
                    <div className="col-num">{item.id}</div>
                    <div className="col-track">
                      <span className="track-name">{item.title}</span>
                      <span className="track-badge">[{item.badge}]</span>
                    </div>
                    <div className="col-artist">{item.artist}</div>
                    <div className="col-role">{item.role}</div>
                    <div className="col-year">{item.year}</div>
                    <div className="col-action">
                      <button
                        className={`btn-table-play ${isSelected ? 'active-playing' : ''}`}
                        onClick={() => handlePlayClick(item.spotifyKey)}
                      >
                        {isSelected ? <Volume2 size={14} /> : <Play size={14} />}
                        <span>{isSelected ? 'PLAYING' : 'LISTEN'}</span>
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="empty-results">
                // NO SE ENCONTRARON PISTAS QUE COINCIDAN CON LA BÚSQUEDA.
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
