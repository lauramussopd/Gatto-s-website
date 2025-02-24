import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Galleria.css';

import tattoo1 from '../assets/images/photo1.jpg';
import tattoo2 from '../assets/images/photo2.jpg';
import tattoo3 from '../assets/images/photo3.jpg';
import tattoo4 from '../assets/images/photo4.jpg';
import tattoo5 from '../assets/images/photo5.jpg';

const TatuaggiPage = () => {
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <section className="galleria">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Torna indietro
      </button>
      <h2>I miei Tatuaggi</h2>
      <div className="galleria-grid">
        <img src={tattoo1} alt="Tattoo 1" className="galleria-img" onClick={() => handleImageClick(tattoo1)} />
        <img src={tattoo2} alt="Tattoo 2" className="galleria-img" onClick={() => handleImageClick(tattoo2)} />
        <img src={tattoo3} alt="Tattoo 3" className="galleria-img" onClick={() => handleImageClick(tattoo3)} />
        <img src={tattoo4} alt="Tattoo 4" className="galleria-img" onClick={() => handleImageClick(tattoo4)} />
        <img src={tattoo5} alt="Tattoo 5" className="galleria-img" onClick={() => handleImageClick(tattoo5)} />
      </div>

      {/* Modal per l'immagine ingrandita */}
      {modalImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Tattoo Ingrandito" className="modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default TatuaggiPage;