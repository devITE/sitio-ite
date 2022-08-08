import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "./logoite.svg";

import {
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="Header__social-network">
          <div className="Header__social-network-individual">
            <Link to="./" className=" Header__btn-socialnetwork">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
          <div className="Header__social-network-individual">
            <Link to="./" className=" Header__btn-socialnetwork">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
          <div className="Header__social-network-individual">
            <Link to="./" className=" Header__btn-socialnetwork">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>
        </div>
        <nav className="navbar mt-4">
          <div className="container-fluid">
            <Link to="./">
              <img
                src={logo}
                alt="Instituto Tlaxcalteca de Elecciones"
                className="img-fluid Header__logoITE"
              />
            </Link>

            <div className="Header__title">
              Instituto Tlaxcalteca de Elecciones
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
