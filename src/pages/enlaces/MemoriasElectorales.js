import React, { Component } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import { dataMemoria } from "../../data/dataMemoriasElectorales";
import "./EnlacesStyle.css";

export default class MemoriasElectorales extends Component {
  render() {
    return (
      <>
        <NavbarEnlaces title="Memorias Electorales" />
        <div className="Memoria__grid">
          {dataMemoria
            .sort((a, b) => b.id - a.id)
            .map((itemMemoria) => (
              <div key={itemMemoria.id} className="Memoria__item">
                <div className="Memoria__header w-100">
                  {itemMemoria.titleItem}
                </div>
                <div>
                  <a
                    href={itemMemoria.linkItem}
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
                  </a>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  }
}
