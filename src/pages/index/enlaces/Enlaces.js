import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Enlaces.css";

export const Enlaces = () => {
  useEffect(() => {
    document.title = `Enlaces`;
  }, []);
  return (
    <div className="w-100">
      <div className="row">
        <div className="col col-sm-3 col-md-3 col-md-3">
          <Link to="/ProcesosElectorales">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e1.png"
              alt="Proceso Electorales"
              className="img-fluid shadow rounded-4 Enlaces__link"
            />
          </Link>
        </div>
        <div className="col col-sm-3 col-md-3 col-md-3">
          <Link to="/Normatividad">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e2.png"
              alt="Normatividad"
              className="img-fluid shadow rounded-4 Enlaces__link"
            />
          </Link>
        </div>
        <div className="col col-sm-3 col-md-3 col-md-3">
          <Link to="/Galeria">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e3.png"
              alt="Galeria fotográfica"
              className="img-fluid shadow rounded-4 Enlaces__link"
            />
          </Link>
        </div>
        <div className="col col-sm-3 col-md-3 col-md-3">
          <Link to="/OIC">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e4.png"
              alt="Órgano Interno de Control"
              className="img-fluid shadow rounded-4 Enlaces__link"
            />
          </Link>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col col-sm-3 col-md-3 col-md-3">
          <Link to="/PartidosPoliticos">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e5.png"
              alt="Partidos Políticos"
              className="img-fluid shadow rounded-4 Enlaces__link"
            />
          </Link>
        </div>
        <div className="col col-sm-3 col-md-3 col-md-3">
          <Link to="/Infografias">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e6.png"
              alt=" Infografías"
              className="img-fluid shadow rounded-4 Enlaces__link"
            />
          </Link>
        </div>
        <div className="col col-sm-3 col-md-3 col-md-3">
          <Link to="/MemoriasElectorales">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e7.png"
              alt="Memorias Electorales"
              className="img-fluid shadow rounded-4 Enlaces__link"
            />
          </Link>
        </div>
        <div className="col col-sm-3 col-md-3 col-md-3">
          <Link to="/MetasMSPEN">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e8.png"
              alt="Metas MSPEN"
              className="img-fluid shadow rounded-4 Enlaces__link"
            />
          </Link>
        </div>

        <div className="col col-sm-3 col-md-3 col-md-3">
          <br />
          <Link to="/PersonasDiscapacidad">
            <img
              src="https://itetlax.org.mx/assets/img/icons/dis.jpg"
              alt="Personas con discapacidad"
              className="img-fluid shadow rounded-4 Enlaces__link"
            />
          </Link>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col col-sm-6 col-md-6 col-md-6 d-flex justify-content-center">
          <a
            href="https://www.plataformadetransparencia.org.mx/"
            rel="noreferrer"
          >
            <img
              src="https://itetlax.org.mx/assets/img/icons/e9.png"
              alt="Plataforma Nacional de Transparencia"
              className="img-fluid shadow rounded-4"
            />
          </a>
        </div>
        <div className="col col-sm-6 col-md-6 col-md-6 d-flex justify-content-center">
          <a
            href="http://consultapublicamx.inai.org.mx:8080/vut-web/?idSujetoObigadoParametro=5387&idEntidadParametro=29&idSectorParametro=24"
            rel="noreferrer"
          >
            <img
              src="https://itetlax.org.mx/assets/img/icons/e10.png"
              alt="Consulta Publica"
              className="img-fluid shadow rounded-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Enlaces;
