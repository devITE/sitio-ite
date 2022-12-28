import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";

const EspacioITE_path = require.context("../../assets");

export default class EspacioIte extends Component {
  render() {
    return (
      <>
        <TitlePages title="Comunicación Social" subTitle="Espacio ITE" />

        <div className="w-100 row">
          <div className="col-md-4">
            <a
              href={EspacioITE_path(
                `./${"pdf/comunicacion/"}${"presidenta.pdf"}`
              )}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={EspacioITE_path(
                  `./${"img/imgEspITE/"}${"presidenta.jpg"}`
                )}
                className="img-fluid hover-ite"
                alt="presidenta"
              />
            </a>
          </div>
          <div className="col-md-4">
            <a
              href={EspacioITE_path(`./${"pdf/comunicacion/"}${"erika.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={EspacioITE_path(`./${"img/imgEspITE/"}${"erika.jpg"}`)}
                className="img-fluid hover-ite"
                alt="Consejera Electoral Erika Periañez Rodríguez"
              />
            </a>
          </div>
          <div className="col-md-4">
            <a
              href={EspacioITE_path(`./${"pdf/comunicacion/"}${"aldave.pdf"}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={EspacioITE_path(`./${"img/imgEspITE/"}${"aldave.jpg"}`)}
                className="img-fluid hover-ite"
                alt="Consejero Electoral Edgar Alfonso Aldave Aguilar"
              />
            </a>
          </div>
        </div>
      </>
    );
  }
}
