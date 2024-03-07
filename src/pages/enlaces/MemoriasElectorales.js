import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import { dataMemoria } from "../../data/dataMemoriasElectorales";
import "./EnlacesStyle.css";

export const MemoriasElectorales = () => {
  useEffect(() => {
    document.title = `Memorias Electorales`;
  }, []);
  return (
    <>
      <NavbarEnlaces title="Memorias Electorales" />
      <div className="Memoria__grid w-50">
        <div className="Memoria__item">
          <div className="Memoria__header w-100">
            Memoria Electoral 2020 - 2021 Anexos
            <div>
              <Link to="/MemoriaElectoral20202021" rel="noreferrer">
                <img
                  className="img-fluid w-25"
                  src="https://itetlax.org.mx/assets/img/memElect/11.1.png"
                  alt="Memoria Electoral del Proceso Electoral 2021"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="Memoria__grid">
        {dataMemoria
          .sort((a, b) => b.id - a.id)
          .map((itemMemoria) => (
            <div key={itemMemoria.id} className="Memoria__item">
              <div className="Memoria__header w-100">
                {itemMemoria.titleItem}
              </div>
              <div>
                <Link
                  to={itemMemoria.linkItem}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid w-100"
                    src={itemMemoria.imgItem}
                    alt={
                      "Memoria Electoral del Proceso Electoral " +
                      itemMemoria.titleItem
                    }
                  />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MemoriasElectorales;
