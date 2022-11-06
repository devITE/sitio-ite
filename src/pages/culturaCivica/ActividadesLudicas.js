import React, { Component } from "react";
import imagenes from "../../img/imgcivica/cultura_civica.png";
import imagenes1 from "../../img/imgcivica/logo.png";
import imagenes2 from "../../img/imgcivica/act_ludicas1.jpg";
import imagenes3 from "../../img/imgcivica/act_ludicas2.jpg";
import imagenes4 from "../../img/imgcivica/act_ludicas3.jpg";
import imagenes5 from "../../img/imgcivica/act_ludicas4.jpg";
import imagenes6 from "../../img/imgcivica/game1.jpg";
import imagenes7 from "../../img/imgcivica/game2.jpg";
import imagenes8 from "../../img/imgcivica/game3.jpg";
import imagenes9 from "../../img/imgcivica/game4.jpg";

export default class ActividadesLudicas extends Component {
  render() {
    return <div>
<img src={imagenes} className="img-fluid w-100" alt="Actividades lúdicas" />
        <hr className="borde" />
        <img src={imagenes1} className="img-fluid style-ec" alt="Actividades lúdicas logo" />
        <h2 className="element-style">
          Actividades lúdicas
        </h2>
        <br /><br />
        <div className="PRUEBA">
        <a
                  href={imagenes6}
                  target="_blank"
                  rel="noreferrer"
                >
        <img src={imagenes2} className="img-fluid w-100" alt="Mi Estado, Mi distrito" />
        </a>
        <a
                  href={imagenes7}
                  target="_blank"
                  rel="noreferrer"
                >
        <img src={imagenes3} className="img-fluid w-100" alt="Mi Estado, Mi distrito" />
        </a>
        <a
                  href={imagenes8}
                  target="_blank"
                  rel="noreferrer"
                >
        <img src={imagenes4} className="img-fluid w-100" alt="Mi Estado, Mi distrito" />
        </a>
        <a
                  href={imagenes9}
                  target="_blank"
                  rel="noreferrer"
                >
        <img src={imagenes5} className="img-fluid w-100" alt="Mi Estado, Mi distrito" />
        </a>
        </div>
    </div>;
  }
}
