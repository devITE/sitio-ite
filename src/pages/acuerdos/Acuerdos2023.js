import React, { Component } from "react";
import { dataAcuerdos2023 } from "../../assets/data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import top2023 from "../../img/imgA_A/h_2023.png";

export default class Acuerdos2023 extends Component {
  render() {
    return (
      <div>
        <img
          src={top2023}
          alt="Acuerdos 2023"
          className="img-fluid w-100 mb-3"
        />
        <table className="table table-hover table-responsive align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mes</th>
              <th scope="col">Acuerdo</th>
              <th scope="col">File</th>
            </tr>
          </thead>
          <tbody>
            {dataAcuerdos2023.map((acuerdo) => {
              return (
                <tr key={acuerdo.id}>
                  <th scope="row">{acuerdo.id}</th>
                  <td>{acuerdo.month}</td>
                  <td>{acuerdo.name}</td>
                  <td>
                    <a
                      className="btn btn-danger"
                      href={acuerdo.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faFilePdf} />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
