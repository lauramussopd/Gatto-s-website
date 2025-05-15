import React from 'react';
import '../assets/Homepage.css'; // Importa Homepage.css invece di Galleria.css
import { Link } from "react-router";

// Immagini importate dalla cartella assets/images
import tattoo1 from '../assets/images/photo1.jpg';
import disegno1 from '../assets/images/disegno1.jpg';

const Galleria = () => {
  return (
    <div className="galleria-container"> {/* Contenitore per il layout Flexbox */}
      <div className="galleria-grid">
        <Link to="/disegnipage" className="galleria-link"> {/* Usa "galleria-link" per gli elementi */}
          <h3>Disegni</h3>
          <img src={disegno1} alt="disegno1" className="galleria-img" />
        </Link>
        <Link to="/tatuaggipage" className="galleria-link"> {/* Usa "galleria-link" per gli elementi */}
          <h3>Tatuaggi</h3>
          <img src={tattoo1} alt="tattoo1" className="galleria-img" />
        </Link>
      </div>
    </div>
  );
};

export default Galleria;