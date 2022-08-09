import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../img/logoite.svg";

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
        <div className="Header__principal mt-4 ">
          <div>
            <Link to="./">
              <img
                src={logo}
                alt="Instituto Tlaxcalteca de Elecciones"
                className="img-fluid Header__logoITE"
              />
            </Link>
          </div>
          <div>Instituto Tlaxcalteca de Elecciones</div>
        </div>
      </div>
    );
  }
}
