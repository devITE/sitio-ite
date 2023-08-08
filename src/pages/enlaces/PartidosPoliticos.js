import React, { useEffect } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import ListBadge from "../../layout/ListBadge";
import { dataPartidosPoliticos } from "../../data/dataEnlacesPP";

export const PartidosPoliticos = () => {
  useEffect(() => {
    document.title = `Partidos Políticos`;
  }, []);
  return (
    <>
      <NavbarEnlaces title="Partidos Políticos" />
      <div>
        <ListBadge ifNumbered={""} listsBadgeItem={dataPartidosPoliticos} />
      </div>
    </>
  );
};

export default PartidosPoliticos;
