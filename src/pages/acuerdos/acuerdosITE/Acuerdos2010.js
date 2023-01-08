import React, { Component } from "react";
import TitlePages from "../../../layout/TitlePages";

export default class Acuerdos2010 extends Component {
  render() {
    return (
      <>
        <TitlePages title="Acuerdos Anteriores" subTitle="Acuerdos ITE 2010" />
        <div className="text-center">
          <img
            src="https://itetlax.org.mx/assets/img/icons/10.png"
            className="img-fluid"
            alt="Warning"
          />
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
