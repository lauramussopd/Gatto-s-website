import React from "react";
import Galleria from "./Galleria";
import "../assets/Homepage.css"; // Importa il file di stile per la homepage da assets

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>
          TATUAGGI <br />
          DI MARE
        </h1>
        <div className="cta-buttons">
          <a href="#galleria" className="cta-button">
            Vedi la Galleria
          </a>
          <a href="#contatti" className="cta-button">
            Contatti
          </a>
        </div>
      </header>

      <section className="about">
        <h2>Chi Sono</h2>
        <p>
          Giuseppe è un tatuatore con una solida formazione grafica e artistica,
          che ha trasformato la sua passione per il disegno in uno stile unico e
          riconoscibile. È specializzato in tatuaggi in bianco e nero, traendo
          ispirazione dal mondo animale, con un'attenzione particolare al tema
          marino. Le sue opere, dinamiche e armoniose, seguono le linee naturali
          del corpo, esaltando la forza e la fluidità delle creature
          dell’oceano. Con anni di esperienza nel mondo del tatuaggio, Giuseppe
          si dedica alla creazione di lavori che siano non solo esteticamente
          belli, ma anche profondamente significativi per chi li porta. Dal
          tatuaggio tradizionale al minimalismo moderno, ogni tratto racconta
          una storia.
        </p>
      </section>

      <section className="services">
        <h2>Servizi</h2>
        <ul>
          <li>Tatuaggi personalizzati</li>
          <li>Cover-up</li>
          <li>Tatuaggi in Bianco e nero</li>
        </ul>
      </section>

      <section id="galleria" className="services">
        <h2>Galleria</h2>
        <Galleria />
      </section>

      <section id="contatti" className="services">
        <h2>Contatti</h2>
        <ul>
          <li>Email: esempio@email.com</li>
          <li>Telefono: +39 123 4567890</li>
          <li>Instagram: @nomeutente</li>
        </ul>
      </section>
    </div>
  );
};

export default Homepage;
