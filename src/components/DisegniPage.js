import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/DisegniPage.css'; // Ensure the CSS path is correct

import disegno1 from '../assets/images/disegno1.jpg';
import disegno2 from '../assets/images/disegno2.jpg';
import disegno3 from '../assets/images/disegno3.jpg';
import disegno4 from '../assets/images/disegno4.jpg';
import disegno5 from '../assets/images/disegno5.jpg';
import disegno6 from '../assets/images/disegno6.jpg';
// Import more images as needed

const DisegniPage = () => {
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

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
    disegno3,
    disegno4,
    disegno5,
    disegno6,
    // Add more image paths here
  ];

  return (
    <section className="galleria-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ←
      </button>

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
