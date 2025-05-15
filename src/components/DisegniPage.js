import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/DisegniPage.css'; // Ensure the CSS path is correct

import disegno1 from '../assets/images/disegno1.jpg';
import disegno2 from '../assets/images/disegno2.jpg';
// Import more images as needed

const DisegniPage = () => {
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  // Array of image sources for easy mapping
  const images = [
    disegno1,
    disegno2,
    // Add more image paths here
  ];

  return (
    <section className="galleria-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Torna indietro
      </button>
      <h2>Disegni</h2>
      <div className="image-grid">
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className="image-item"
            onClick={() => handleImageClick(imageSrc)}
          >
            <img
              src={imageSrc}
              alt={`Disegno ${index + 1}`}
              className="galleria-img"
            />
          </div>
        ))}
      </div>

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

