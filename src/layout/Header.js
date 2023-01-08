import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="Header__social-network">
          <div className="Header__social-network-individual">
            <Link
              to="https://www.youtube.com/channel/UCUBfUX_c54NfhhvZRzK0k1w"
              className=" Header__btn-socialnetwork"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
          <div className="Header__social-network-individual">
            <Link
              to="https://twitter.com/share?url=http%3A%2F%2Fitetlax.org.mx%2F"
              className=" Header__btn-socialnetwork"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
          <div className="Header__social-network-individual">
            <Link
              to="https://es-la.facebook.com/InstitutoTlaxcaltecadeElecciones/"
              className=" Header__btn-socialnetwork"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>
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
