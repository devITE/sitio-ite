import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="Header__social-network">
          <div className="Header__social-network-individual">
            <a
              href="https://www.youtube.com/channel/UCUBfUX_c54NfhhvZRzK0k1w"
              target="_blank"
              rel="noreferrer"
              className=" Header__btn-socialnetwork"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <div className="Header__social-network-individual">
            <a
              href="https://twitter.com/ITETLAX"
              target="_blank"
              rel="noreferrer"
              className=" Header__btn-socialnetwork"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="Header__social-network-individual">
            <a
              href="https://es-la.facebook.com/InstitutoTlaxcaltecadeElecciones/"
              target="_blank"
              rel="noreferrer"
              className=" Header__btn-socialnetwork"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="Header__social-network-individual">
            <a
              href="https://www.instagram.com/ite_tlaxcala"
              target="_blank"
              rel="noreferrer"
              className=" Header__btn-socialnetwork"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>{" "}
        </div>
        <div className="Header__principal mt-4 ">
          <div>
            <Link to="./">
              <img
                src="https://itetlax.org.mx/assets/img/logoite.png"
                alt="Instituto Tlaxcalteca de Elecciones"
                className="img-fluid Header__logoITE"
              />
            </Link>
          </div>
          <div>Instituto Tlaxcalteca de Elecciones</div>
        </div>
      </>
    );
  }
}
