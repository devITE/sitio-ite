import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../../layout/TitlePages";

const Monitoreo_path = require.context("../../../assets");

export default class Boletines extends Component {
  render() {
    return (
      <>
        <TitlePages title="Comunicación Social" subTitle="Monitoreos" />

        <div className="Grid__folder">
          <Link to="/Monitoreos2015">
            <img
              src={Monitoreo_path(`./${"img/icons/"}${"28.png"}`)}
              className="img-fluid"
              alt="Monitoreos 2015"
            />
          </Link>
          <Link to="/Monitoreos2016">
            <img
              src={Monitoreo_path(`./${"img/icons/"}${"29.png"}`)}
              className="img-fluid"
              alt="Monitoreos 2016"
            />
          </Link>
          <Link to="/Monitoreos2017">
            <img
              src={Monitoreo_path(`./${"img/icons/"}${"30.png"}`)}
              className="img-fluid"
              alt="Monitoreos 2017"
            />
          </Link>
          <Link to="/Monitoreos2018">
            <img
              src={Monitoreo_path(`./${"img/icons/"}${"31.png"}`)}
              className="img-fluid"
              alt="Monitoreos 2018"
            />
          </Link>
          <Link to="/Monitoreos2020">
            <img
              src={Monitoreo_path(`./${"img/icons/"}${"33.png"}`)}
              className="img-fluid"
              alt="/Monitoreos 2020"
            />
          </Link>
          <Link to="/Monitoreos2021">
            <img
              src={Monitoreo_path(`./${"img/icons/"}${"34.png"}`)}
              className="img-fluid"
              alt="/Monitoreos 2021"
            />
          </Link>
        </div>
      </>
    );
  }
}
