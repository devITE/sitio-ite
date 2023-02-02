import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../../layout/TitlePages";

export default class Articulo63 extends Component {
  render() {
    return (
      <>
        <TitlePages
          title="Transparencia"
          subTitle="Ley de Transparencia y Acceso a la Información Pública del Estado de Tlaxcala."
        />
        <h5 className="text-center text-strong">
          Artículo 63. del Instituto Tlaxcalteca de Elecciones.
        </h5>
        <div className="w-100 mt-5 Grid__folder">
          <div>
            <Link to="/Art632017">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/30.png"
                alt="Artículo 63 (2017)"
              />
            </Link>
          </div>
          <div>
            <Link to="/Art632018">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/31.png"
                alt="Artículo 63 (2018)"
              />
            </Link>
          </div>
          <div>
            <Link to="/Art632019">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/32.png"
                alt="Artículo 63 (2019)"
              />
            </Link>
          </div>
          <div>
            <Link to="/Art632020" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/33.png"
                alt="Artículo 63 (2020)"
              />
            </Link>
          </div>
          <div>
            <Link to="/Art632021" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/34.png"
                alt="Artículo 63 (2021)"
              />
            </Link>
          </div>
          <div>
            <Link to="/Art632022" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/35.png"
                alt="Artículo 63 (2022)"
              />
            </Link>
          </div>
          <div>
            <Link to="/Art632023" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/36.png"
                alt="Artículo 63 (2023)"
              />
            </Link>
          </div>
        </div>
        {/* <div className="list-group text-center w-50 mx-auto">
          <Link
            to="/Art632017"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2017)
          </Link>
          <Link
            to="/Art632018"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2018)
          </Link>
          <Link
            to="/Art632019"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2019)
          </Link>
          <Link
            to="/Art632020"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2020)
          </Link>
          <Link
            to="/Art632021"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2021)
          </Link>
          <Link
            to="/Art632022"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2022)
          </Link>
          <Link
            to="/Art632023"
            className="list-group-item list-group-item-action"
          >
            Artículo 63 (2023)
          </Link>
        </div> */}
      </>
    );
  }
}
