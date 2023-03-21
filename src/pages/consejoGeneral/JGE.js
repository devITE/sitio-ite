import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";

const JGE = () => {
  useEffect(() => {
    document.title = `ITE - Junta General Ejecutiva`;
  }, []);
    return (
      <>
        <TitlePages title="Junta General Ejecutiva" subTitle="" />
        <a
          href="https://itetlax.org.mx/assets/img/imgIntITE/2.jpg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://itetlax.org.mx/assets/img/imgIntITE/2.jpg"
            className="img-fluid w-100 mx-auto"
            alt="JGE"
          />
        </a>
      </>
    );
  }
  export default JGE;
