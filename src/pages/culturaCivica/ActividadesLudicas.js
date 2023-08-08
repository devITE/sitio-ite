import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import ModalIMG from "../../layout/Modal/ModalIMG";

export const ActividadesLudicas = () => {
  useEffect(() => {
    document.title = `Actividades Lúdicas`;
  }, []);
  return (
    <>
      <TitlePages title="Cultura Cívica" subTitle="Actividades Lúdicas" />

      <div className="Grid__four">
        <div>
          <a
            href="/#"
            rel="noreferrer"
            data-bs-toggle="modal"
            data-bs-target="#Juego1"
          >
            <img
              src="https://itetlax.org.mx/assets/img/imgcivica/game1.jpg"
              className="img-fluid hover-ite"
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
              src="https://itetlax.org.mx/assets/img/imgcivica/game2.jpg"
              className="img-fluid hover-ite"
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
              src="https://itetlax.org.mx/assets/img/imgcivica/game3.jpg"
              className="img-fluid hover-ite"
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
              src="https://itetlax.org.mx/assets/img/imgcivica/game4.jpg"
              className="img-fluid hover-ite"
              alt="Crucigrama democrático"
            />
          </a>
        </div>
      </div>
      <ModalIMG
        idModal="Juego1"
        linkIMG="https://itetlax.org.mx/assets/img/imgcivica/game1.jpg"
        altIMG="Mi estado, mi distrito local, mi municipio"
      />
      <ModalIMG
        idModal="Juego2"
        linkIMG="https://itetlax.org.mx/assets/img/imgcivica/game2.jpg"
        altIMG="Serpientes y escaleras"
      />
      <ModalIMG
        idModal="Juego3"
        linkIMG="https://itetlax.org.mx/assets/img/imgcivica/game3.jpg"
        altIMG="Sopa de letras, valores de la democracia"
      />
      <ModalIMG
        idModal="Juego4"
        linkIMG="https://itetlax.org.mx/assets/img/imgcivica/game4.jpg"
        altIMG="Crucigrama democráctico"
      />
    </>
  );
};

export default ActividadesLudicas;
