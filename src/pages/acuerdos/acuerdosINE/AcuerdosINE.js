import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../../layout/TitlePages";

const Acuerdos__imgpath = require.context("../../../assets/img/icons/");

export default class AcuerdosINE extends Component {
  render() {
    return (
      <>
        <TitlePages title="Acuerdos INE" subTitle="" />

        <div className="w-100 mt-5 Grid__folder">
          <div>
            <Link to="/AcuerdosINE2023">
              <img
                className="img-fluid"
                src={Acuerdos__imgpath(`./36.png`)}
                alt="Acuerdos INE 2023"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2022">
              <img
                className="img-fluid"
                src={Acuerdos__imgpath(`./35.png`)}
                alt="Acuerdos INE 2022"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2021">
              <img
                className="img-fluid"
                src={Acuerdos__imgpath(`./34.png`)}
                alt="Acuerdos INE 2021"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2020">
              <img
                className="img-fluid"
                src={Acuerdos__imgpath(`./33.png`)}
                alt="Acuerdos INE 2020"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2016">
              <img
                className="img-fluid"
                src={Acuerdos__imgpath(`./29.png`)}
                alt="Acuerdos INE 2016"
              />
            </Link>
          </div>
          <div>
            <Link to="/AcuerdosINE2015">
              <img
                className="img-fluid"
                src={Acuerdos__imgpath(`./28.png`)}
                alt="Acuerdos INE 2015"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}
