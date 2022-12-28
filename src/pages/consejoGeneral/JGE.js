import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";

const JGE__path = require.context("../../assets");

export default class JGE extends Component {
  render() {
    return (
      <>
        <TitlePages title="Junta General Ejecutiva" subTitle="" />

        <Link to={JGE__path(`./${"img/imgIntITE/"}${"2.jpg"}`)} target="_blank">
          <img
            src={JGE__path(`./${"img/imgIntITE/"}${"2.jpg"}`)}
            className="img-fluid w-100 mx-auto"
            alt="JGE"
          />
        </Link>
      </>
    );
  }
}
