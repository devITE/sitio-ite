import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CookieConsentBanner from "./layout/CookieConsentBanner/CookieConsentBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

ReactGA.initialize("G-65XQG4Y5N3", {
  debug: false, // Cambiar a true para ver logs en la consola
  gaOptions: {
    siteSpeedSampleRate: 100, // Opcional: ajustar la tasa de muestreo de velocidad del sitio
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookieConsentBanner />
    <App />
  </React.StrictMode>
);

function sendToAnalytics({ id, name, value }) {
  ReactGA.event({
    category: "Web Vitals",
    action: name,
    label: id,
    value: Math.round(name === "CLS" ? value * 1000 : value), // Multiplica CLS por 1000
    nonInteraction: true, // Opcional: flag para evitar afectar la tasa de rebote
  });
}

reportWebVitals(sendToAnalytics);
