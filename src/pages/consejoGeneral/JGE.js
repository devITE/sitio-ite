import React, { Component } from "react";
import imagenes from "./img/jge.jpg";
import { Link } from "react-router-dom";

export default class JGE extends Component {
  render() {
    return (
      <div>
        <Link to={imagenes} target="_blank">
          <img
            src={imagenes}
            className="img-fluid w-100 mx-auto"
            alt="JGE"
          />
        </Link>
      </div>
    );
  }
}
