import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";

const Comisiones__path = require.context("../../assets");

export default class Comisiones extends Component {
  render() {
    return (
      <>
        <TitlePages title="Comisiones Permanentes y Temporales" subTitle="" />

        <Link
          to={Comisiones__path(`./${"img/imgIntITE/"}${"1.jpg"}`)}
          target="_blank"
        >
          <img
            src={Comisiones__path(`./${"img/imgIntITE/"}${"1.jpg"}`)}
            className="img-fluid w-100 mx-auto"
            alt="Comisiones Permanentes"
          />
        </Link>
      </>
    );
  }
}
