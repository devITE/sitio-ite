import React, { Component } from "react";
import warning from "../../../img/icons/10.png";

export default class Acuerdos2014 extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={warning} className="img-fluid" alt="Warning" />
        <h4 className="mt-4">
          Si requiere la información contenida de este acuerdo, favor de
          solicitarla a través del área de “Transparencia” o para mayor
          información comunicate con nosotros
        </h4>
      </div>
    );
  }
}
