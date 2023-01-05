import React, { Component } from "react";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";

const PEE2017__path = require.context("../../../assets");

export default class PEE2017 extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Proceso Electoral Extraordinario 2017" />
        <div className="Content__grid">
          <div>
            <a
              href={PEE2017__path(
                `./${"pdf/procesosElect/PEE2017/"}${"1.pdf"}`
              )}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-fluid"
                src={PEE2017__path(`./${"img/icons/"}${"e22.png"}`)}
                alt="Resultados por casilla"
              />
            </a>
            <p className="mt-2">Resultados por casilla</p>
          </div>
          <div>
            <img
              className="img-fluid"
              src={PEE2017__path(`./${"img/icons/"}${"e25.png"}`)}
              alt="PREP 2017"
            />
          </div>
        </div>
      </>
    );
  }
}
