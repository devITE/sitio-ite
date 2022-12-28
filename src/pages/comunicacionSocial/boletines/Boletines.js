import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../../layout/TitlePages";

const Boletines_path = require.context("../../../assets");

export default class Boletines extends Component {
  render() {
    return (
      <>
        <TitlePages title="Comunicación Social" subTitle="Boletines" />

        <div className="Grid__folder">
          <Link to="/Boletines2015">
            <img
              src={Boletines_path(`./${"img/icons/"}${"28.png"}`)}
              className="img-fluid"
              alt="Boletines 2015"
            />
          </Link>
          <Link to="/Boletines2016">
            <img
              src={Boletines_path(`./${"img/icons/"}${"29.png"}`)}
              className="img-fluid"
              alt="Boletines 2016"
            />
          </Link>
          <Link to="/Boletines2017">
            <img
              src={Boletines_path(`./${"img/icons/"}${"30.png"}`)}
              className="img-fluid"
              alt="Boletines 2017"
            />
          </Link>
          <Link to="/Boletines2019">
            <img
              src={Boletines_path(`./${"img/icons/"}${"32.png"}`)}
              className="img-fluid"
              alt="Boletines 2019"
            />
          </Link>
          <Link to="/Boletines2020">
            <img
              src={Boletines_path(`./${"img/icons/"}${"33.png"}`)}
              className="img-fluid"
              alt="Boletines 2020"
            />
          </Link>
          <Link to="/Boletines2021">
            <img
              src={Boletines_path(`./${"img/icons/"}${"34.png"}`)}
              className="img-fluid"
              alt="Boletines 2021"
            />
          </Link>
          <Link to="/Boletines2022">
            <img
              src={Boletines_path(`./${"img/icons/"}${"35.png"}`)}
              className="img-fluid"
              alt="Boletines 2022"
            />
          </Link>
        </div>
      </>
    );
  }
}
