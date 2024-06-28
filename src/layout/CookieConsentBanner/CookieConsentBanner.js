import React, { useState } from "react";
import ReactGA from "react-ga";
import "./CookieConsentBanner.css";

const CookieConsentBanner = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAcceptCookies = () => {
    // Aquí deberías establecer una cookie o algún tipo de almacenamiento local
    // para recordar la aceptación del usuario en futuras visitas
    // Por simplicidad, aquí solo actualizamos el estado local
    setAccepted(true);

    // Inicializar Google Analytics después de que se acepten las cookies
    ReactGA.initialize("G-65XQG4Y5N3");
    ReactGA.pageview(window.location.pathname + window.location.search);
  };

  // Comprobar si ya se aceptaron las cookies
  if (accepted) {
    return null; // No mostrar el banner si ya se aceptaron las cookies
  }

  return (
    <div className="cookie-banner fixed-bottom text-white text-center">
      <p className="mb-0">
        Este sitio web utiliza cookies para mejorar la experiencia del usuario.
      </p>
      <button className="btn btn-light mt-2" onClick={handleAcceptCookies}>
        Aceptar cookies
      </button>
    </div>
  );
};

export default CookieConsentBanner;
