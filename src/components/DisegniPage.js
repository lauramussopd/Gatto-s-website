import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/DisegniPage.css'; // Modifica il percorso se necessario

import disegno1 from '../assets/images/disegno1.jpg';
import disegno2 from '../assets/images/disegno2.jpg';

const DisegniPage = () => {
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc); // Imposta l'immagine selezionata nel modal
  };

  const handleCloseModal = () => {
    setModalImage(null); // Chiude il modal
  };

  return (
    <section className="galleria">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Torna indietro
      </button>
      <h2>I miei Disegni</h2>
      <div className="galleria-grid">
        <img
          src={disegno1}
          alt="Disegno 1"
          className="galleria-img"
          onClick={() => handleImageClick(disegno1)} // Aggiungi onClick per ingrandire
        />
        <img
          src={disegno2}
          alt="Disegno 2"
          className="galleria-img"
          onClick={() => handleImageClick(disegno2)} // Aggiungi onClick per ingrandire
        />
      </div>

      {/* Modal per l'immagine ingrandita */}
      {modalImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Disegno Ingrandito" className="modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default DisegniPage;
