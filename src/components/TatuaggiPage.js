import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Galleria.css'; // Use the same CSS file

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

  // Array of image sources
    const images = [
    tattoo1,
    tattoo2,
    tattoo3,
    tattoo4,
    tattoo5,
  ];

  return (
    <section className="galleria-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Torna indietro
      </button>
      <h2>I miei Tatuaggi</h2>
      <div className="image-grid">
       {images.map((imageSrc, index) => (
          <div
            key={index}
            className="image-item"
            onClick={() => handleImageClick(imageSrc)}
          >
            <img
              src={imageSrc}
              alt={`Tattoo ${index + 1}`}
              className="galleria-img"
            />
          </div>
        ))}
      </div>

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
