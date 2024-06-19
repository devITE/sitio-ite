import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarEnlaces from "../../../layout/NavbarEnlaces";
import Modal from "../../../layout/Modal/Modal";
import ListBadge from "../../../layout/ListBadge";
import { dataResultadosE2021 } from "../../../data/dataProcesosElectorales";

const ProcesosElectorales = () => {
  useEffect(() => {
    document.title = `Procesos Electorales`;
  }, []);
  return (
    <>
      <NavbarEnlaces title="Procesos Electorales" />
      <div className="Content__grid">
        <div>
          <Link to="/HistorialPE">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/e20.png"
              alt="Historial de Resultados 1995 - 2013"
            />
          </Link>
          <p className="mt-2">Historial de Resultados (1995 - 2013)</p>
        </div>
        <div>
          <Link to="/PE20152016">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/e19.png"
              alt="Proceso Electoral 2015 -2015"
            />
          </Link>
          <p className="mt-2">Proceso Electoral 2015 - 2016</p>
        </div>
        <div>
          <Link to="/PEE2017">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/e19.png"
              alt="Proceso Electoral Extraordinario 2017"
            />
          </Link>
          <p className="mt-2">Proceso Electoral 2017</p>
        </div>
        <div>
          <Link to="/PE2018">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/e19.png"
              alt="Proceso Electoral 2018"
            />
          </Link>
          <p className="mt-2">Proceso Electoral 2017 - 2018</p>
        </div>
        <div>
          <Link to="/PE20202021">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/e19.png"
              alt="Proceso Electoral 2020 - 2021"
            />
          </Link>
          <p className="mt-2">Proceso Electoral 2020 - 2021</p>
        </div>
        <div>
          <a
            href="/#"
            rel="noreferrer"
            data-bs-toggle="modal"
            data-bs-target="#PresidenciasComunidad2021"
          >
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/e19.png"
              alt="Proceso Electoral Extraordinario 2021"
            />
          </a>
          <p className="mt-2">Proceso Electoral Extraordinario 2021</p>
        </div>
        <div>
          <Link to="/PE20232024">
            <img
              className="img-fluid"
              src="https://itetlax.org.mx/assets/img/icons/e19.png"
              alt="Proceso Electoral 2023 - 2024"
            />
          </Link>
          <p className="mt-2">Proceso Electoral 2023 - 2024</p>
        </div>
      </div>
      {/* Modal */}
      <Modal
        idModal="PresidenciasComunidad2021"
        titleModal="Resultados Electorales Presidencias de Comunidad 2021"
        sizeModal=""
        contentModal={
          <ListBadge ifNumbered={""} listsBadgeItem={dataResultadosE2021} />
        }
      />
    </>
  );
};
export default ProcesosElectorales;
