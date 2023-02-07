import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TitlePages from "../../layout/TitlePages";

const AcuerdosAnteriores = () => {
  useEffect(() => {
    document.title = `ITE - Acuerdos Anteriores`;
  }, []);
    return (
      <>
        <TitlePages title="Acuerdos Anteriores" subTitle="" />
        <div className="w-100 mt-5 Grid__folder">
          <div>
            <Link to="/Acuerdos2017">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/30.png"
                alt="Acuerdos 2017"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2016">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/29.png"
                alt="Acuerdos 2016"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2015">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/28.png"
                alt="Acuerdos 2015"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2014" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/27.png"
                alt="Acuerdos 2014"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2013" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/26.png"
                alt="Acuerdos 2013"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2012" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/25.png"
                alt="Acuerdos 2012"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2011" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/24.png"
                alt="Acuerdos 2011"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2010" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/23.png"
                alt="Acuerdos 2010"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2009" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/22.png"
                alt="Acuerdos 2009"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2008" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/21.png"
                alt="Acuerdos 2008"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2007" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/20.png"
                alt="Acuerdos 2007"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2006" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/19.png"
                alt="Acuerdos 2006"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2005" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/18.png"
                alt="Acuerdos 2005"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2004" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/17.png"
                alt="Acuerdos 2004"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2003" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/16.png"
                alt="Acuerdos 2003"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2002" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/15.png"
                alt="Acuerdos 2002"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos2001" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/14.png"
                alt="Acuerdos 2001"
              />
            </Link>
          </div>
          <div>
            <Link to="/Acuerdos1998" className="nav-link">
              <img
                className="img-fluid"
                src="https://itetlax.org.mx/assets/img/icons/11.png"
                alt="Acuerdos 1998"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
  export default AcuerdosAnteriores;