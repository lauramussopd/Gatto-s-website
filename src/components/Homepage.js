import React from 'react';
import Galleria from './Galleria';
import '../assets/Homepage.css'; // Importa il file di stile per la homepage da assets

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>TATUAGGI DI MARE</h1>
        <p>
            Giuseppe, tatuatore con formazione grafica e artistica, ha trasformato la sua passione per il disegno in uno stile unico.  
        </p>
        <div className="intro">
          <p>
          Specializzato in tatuaggi in bianco e nero, si ispira al mondo animale, con un focus sul tema marino. Le sue opere, dinamiche e armoniose, seguono le linee del corpo per esaltare la forza e la fluidità delle creature dell’oceano.          
          </p>
        </div>
        <div className="cta-buttons">
        <a href="#galleria" className="cta-button">Vedi la Galleria</a>
        <a href="#contatti" className="cta-button">Contatti</a>
        </div>
      </header>

      <section className="about">
        <h2>Chi Sono</h2>
        <p>
          Con anni di esperienza nel mondo del tatuaggio, mi piace creare
          tatuaggi che siano tanto esteticamente belli quanto significativi per chi
          li porta. Dallo stile tradizionale al minimalismo moderno, c'è sempre una
          storia da raccontare.
        </p>
      </section>

      <section className="services">
        <h2>I miei Servizi</h2>
        <ul>
          <li>Tatuaggi personalizzati</li>
          <li>Cover-up</li>
          <li>Tatuaggi in Bianco e nero</li>
        </ul>
      </section>

      <section className="services">
      <Galleria />
      </section>
    </div>
  );
};

export default Homepage;
