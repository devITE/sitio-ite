import React, { Component } from "react";
import { dataAcuerdos2022 } from "../../assets/data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import top2022 from "../../img/imgA_A/h_2022.png";

export default class Acuerdos2022 extends Component {
  render() {
    return (
      <div>
        <img
          src={top2022}
          alt="Acuerdos 2022"
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
            {dataAcuerdos2022.map((acuerdo) => {
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
