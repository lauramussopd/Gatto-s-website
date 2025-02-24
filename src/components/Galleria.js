import React from 'react';
import '../assets/Galleria.css'; // Modifica il percorso se necessario
import { Link } from "react-router";

// Immagini importate dalla cartella assets/images
import tattoo1 from '../assets/images/photo1.jpg';
import disegno1 from '../assets/images/disegno1.jpg';


const Galleria = () => {
  return (
    <section id="galleria" className="galleria">
      <h2>La mia Galleria</h2>
      <div className="galleria-grid">
        <Link to = "/disegnipage">
        <h3>Disegni</h3>
        <img src={disegno1} alt="disegno1" className="galleria-img" />
        </Link>
        <Link to = "/tatuaggipage">
        <h3>Tatuaggi</h3>
        <img src={tattoo1} alt="tattoo1" className="galleria-img" />
        </Link>
      </div>
    </section>
  );
};

export default Galleria;

