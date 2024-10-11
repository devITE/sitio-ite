import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Enlaces.css";

export const Enlaces = () => {
  useEffect(() => {
    document.title = `Enlaces`;
  }, []);
  return (
    <div className="w-100">
      <div className="NavbarEnlaces">
        <Link to="/ProcesosElectorales">
          <img
            src="https://itetlax.org.mx/assets/img/icons/e1.png"
            alt="Proceso Electorales"
            className="img-fluid shadow rounded-4 Enlaces__link"
          />
        </Link>

        <Link to="/Normatividad">
          <img
            src="https://itetlax.org.mx/assets/img/icons/e2.png"
            alt="Normatividad"
            className="img-fluid shadow rounded-4 Enlaces__link"
          />
        </Link>

        <Link to="/Galeria">
          <img
            src="https://itetlax.org.mx/assets/img/icons/e3.png"
            alt="Galeria fotográfica"
            className="img-fluid shadow rounded-4 Enlaces__link"
          />
        </Link>

        <Link to="/OIC">
          <img
            src="https://itetlax.org.mx/assets/img/icons/e4.png"
            alt="Órgano Interno de Control"
            className="img-fluid shadow rounded-4 Enlaces__link"
          />
        </Link>

        <Link to="/PartidosPoliticos">
          <img
            src="https://itetlax.org.mx/assets/img/icons/e5.png"
            alt="Partidos Políticos"
            className="img-fluid shadow rounded-4 Enlaces__link"
          />
        </Link>

        <Link to="/Infografias">
          <img
            src="https://itetlax.org.mx/assets/img/icons/e6.png"
            alt=" Infografías"
            className="img-fluid shadow rounded-4 Enlaces__link"
          />
        </Link>

        <Link to="/MemoriasElectorales">
          <img
            src="https://itetlax.org.mx/assets/img/icons/e7.png"
            alt="Memorias Electorales"
            className="img-fluid shadow rounded-4 Enlaces__link"
          />
        </Link>

        <Link to="/MetasMSPEN">
          <img
            src="https://itetlax.org.mx/assets/img/icons/e8.png"
            alt="Metas MSPEN"
            className="img-fluid shadow rounded-4 Enlaces__link"
          />
        </Link>

        <Link to="/PersonasDiscapacidad">
          <img
            src="https://itetlax.org.mx/assets/img/icons/dis.jpg"
            alt="Personas con discapacidad"
            className="img-fluid shadow rounded-4 Enlaces__link"
          />
        </Link>

        <Link to="/Informes">
          <img
            src="https://itetlax.org.mx/assets/img/icons/encuestas.png"
            alt=" Informes"
            className="img-fluid shadow rounded-2"
          />
        </Link>
        {/* <div className="col-2 col-md-2 w-25">
          <Link to="/InformesAnualesITE">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e26.png"
              alt="Enlaces"
              className="img-fluid w-60 shadow rounded-4"
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Enlaces;
