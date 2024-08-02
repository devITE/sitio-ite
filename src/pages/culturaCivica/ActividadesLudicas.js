import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import ModalIMG from "../../layout/Modal/ModalIMG";
import Breadcrumbs from "../../layout/Breadcrumbs";

const GameItem = ({ id, imgSrc, altText }) => (
  <div>
    <a
      href="/#"
      rel="noreferrer"
      data-bs-toggle="modal"
      data-bs-target={`#${id}`}
    >
      <img src={imgSrc} className="img-fluid hover-ite" alt={altText} />
    </a>
  </div>
);

export const ActividadesLudicas = () => {
  useEffect(() => {
    document.title = `Actividades Lúdicas`;
  }, []);

  const games = [
    {
      id: "Juego1",
      imgSrc: "https://itetlax.org.mx/assets/img/imgcivica/game1.jpg",
      altText: "Mi Estado, Mi distrito Local, Mi Municipio",
    },
    {
      id: "Juego2",
      imgSrc: "https://itetlax.org.mx/assets/img/imgcivica/game2.jpg",
      altText: "Serpientes y Escaleras",
    },
    {
      id: "Juego3",
      imgSrc: "https://itetlax.org.mx/assets/img/imgcivica/game3.jpg",
      altText: "Sopa de letras, Valores de la democracia",
    },
    {
      id: "Juego4",
      imgSrc: "https://itetlax.org.mx/assets/img/imgcivica/game4.jpg",
      altText: "Crucigrama democrático",
    },
  ];

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Cultura Cívica", url: "/CulturaCivica" },
          { label: "Actividades Lúdicas" },
        ]}
      />
      <TitlePages title="Cultura Cívica" subTitle="Actividades Lúdicas" />

      <div className="Grid__four">
        {games.map((game) => (
          <GameItem
            key={game.id}
            id={game.id}
            imgSrc={game.imgSrc}
            altText={game.altText}
          />
        ))}
      </div>

      {games.map((game) => (
        <ModalIMG
          key={game.id}
          idModal={game.id}
          linkIMG={game.imgSrc}
          altIMG={game.altText}
        />
      ))}
    </>
  );
};

export default ActividadesLudicas;
