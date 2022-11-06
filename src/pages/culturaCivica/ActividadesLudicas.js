import React, { Component } from "react";
import TitlePages from "../../layout/TitlePages";
import ModalIMG from "../../layout/ModalIMG";

const CulturaCivica__path = require.context("../../assets");

export default class ActividadesLudicas extends Component {
  render() {
    return (
      <>
        <TitlePages title="Cultura Cívica" />
        <div className="w-100 d-flex justify-content-center align-items-center">
          <img
            src={CulturaCivica__path(`./img/imgcivica/logo.png`)}
            className="img-fluid h-25"
            alt="Actividades Lúdicas"
          />
          <h1>Actividades Lúdicas</h1>
        </div>
        <br />
        <br />
        <div className="Grid__four">
          <div>
            <a
              href="/#"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Juego1"
            >
              <img
                src={CulturaCivica__path(`./img/imgcivica/game1.jpg`)}
                className="img-fluid"
                alt="Mi Estado, Mi distrito Local, Mi Municipio"
              />
            </a>
          </div>
          <div>
            <a
              href="/#"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Juego2"
            >
              <img
                src={CulturaCivica__path(`./img/imgcivica/game2.jpg`)}
                className="img-fluid"
                alt="Serpientes y Escaleras"
              />
            </a>
          </div>
          <div>
            <a
              href="/#"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Juego3"
            >
              <img
                src={CulturaCivica__path(`./img/imgcivica/game3.jpg`)}
                className="img-fluid"
                alt="Sopa de letras, Valores de la democracia"
              />
            </a>
          </div>
          <div>
            <a
              href="/#"
              rel="noreferrer"
              data-bs-toggle="modal"
              data-bs-target="#Juego4"
            >
              <img
                src={CulturaCivica__path(`./img/imgcivica/game4.jpg`)}
                className="img-fluid"
                alt="Crucigrama democrático"
              />
            </a>
          </div>
        </div>
        {/* Modal */}
        <ModalIMG
          idModal="Juego1"
          linkIMG={CulturaCivica__path(`./img/imgcivica/game1.jpg`)}
          altIMG="Mi estado, mi distrito local, mi municipio"
        />
        <ModalIMG
          idModal="Juego2"
          linkIMG={CulturaCivica__path(`./img/imgcivica/game2.jpg`)}
          altIMG="Serpientes y escaleras"
        />
        <ModalIMG
          idModal="Juego3"
          linkIMG={CulturaCivica__path(`./img/imgcivica/game3.jpg`)}
          altIMG="Sopa de letras, valores de la democracia"
        />
        <ModalIMG
          idModal="Juego4"
          linkIMG={CulturaCivica__path(`./img/imgcivica/game4.jpg`)}
          altIMG="Crucigrama democráctico"
        />
      </>
    );
  }
}
