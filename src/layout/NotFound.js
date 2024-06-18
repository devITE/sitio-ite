import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  useEffect(() => {
    document.title = `NotFound`;
  }, []);
  return (
    <>
      <div className="error-404">
        <p>404 Error</p>
        <p>¡Oops, parece que has llegado a un callejón sin salida!</p>
        <Link className="btn btn-ite" to="./">
          Regresar al inicio
        </Link>
      </div>
    </>
  );
};
export default NotFound;
