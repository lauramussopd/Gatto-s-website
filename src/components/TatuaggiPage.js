import React, { useState, useEffect, } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/Galleria.css'; // Use the same CSS file

import tattoo1 from '../assets/images/photo1.jpg';
import tattoo2 from '../assets/images/photo2.jpg';
import tattoo3 from '../assets/images/photo3.jpg';
import tattoo4 from '../assets/images/photo4.jpg';
import tattoo5 from '../assets/images/photo5.jpg';
import tattoo6 from '../assets/images/photo6.jpg';
import tattoo7 from '../assets/images/photo7.jpg';
import tattoo8 from '../assets/images/photo8.jpg';
import tattoo9 from '../assets/images/photo9.jpg';
import tattoo10 from '../assets/images/photo10.jpg';
import tattoo11 from '../assets/images/photo11.jpg';
import tattoo12 from '../assets/images/photo12.jpg';


const TatuaggiPage = () => {
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

  // Array of image sources
    const images = [
    tattoo1,
    tattoo2,
    tattoo3,
    tattoo4,
    tattoo5,
    tattoo6,
    tattoo7,
        tattoo8,
        tattoo9,
        tattoo10,
        tattoo11,
        tattoo12,

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
