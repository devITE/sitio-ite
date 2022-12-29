import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";
import warning from "../../../assets/img/icons/10.png";

export default class Acuerdos2011 extends Component {
  render() {
    return (
      <>
        <TitlePages title="Acuerdos Anteriores" subTitle="Acuerdos ITE 2011" />
        <div className="text-center">
          <img src={warning} className="img-fluid" alt="Warning" />
          <h4 className="mt-4">
            Si requiere la información contenida de este acuerdo, favor de
            solicitarla a través del área de “Transparencia” o para mayor
            información comunicate con nosotros
          </h4>
        </div>
      </>
    );
  }
}
