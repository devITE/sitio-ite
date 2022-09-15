import React, { Component } from "react";
import { dataAcuerdos2015 } from "../../assets/data/dataAcuerdosAnteriores";
import top2015 from "../../img/ac/2015.png";

export default class Acuerdos2015 extends Component {
  render() {
    return (
      <div>
        <img
          src={top2015}
          alt="Acuerdos 2015"
          className="img-fluid w-100 mb-3"
        />
        <table class="table table-hover table-responsive">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mes</th>
              <th scope="col">Acuerdo</th>
              <th scope="col">File</th>
            </tr>
          </thead>
          <tbody>
            {dataAcuerdos2015.map((acuerdo) => {
              return (
                <tr key={acuerdo.id}>
                  <th scope="row">{acuerdo.id}</th>
                  <td>{acuerdo.month}</td>
                  <td>{acuerdo.name}</td>
                  <td>{acuerdo.link}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
