import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import Breadcrumbs from "../../layout/Breadcrumbs";
import { dataITEConecta } from "../../data/dataITEConecta";

const ITEConecta = () => {
  useEffect(() => {
    document.title = `ITE Conecta`;
  }, []);

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Comunicación Social", url: "/ComunicacionSocial" },
          { label: "ITE Conecta" },
        ]}
      />
      <TitlePages title="Comunicación Social" subTitle="ITE Conecta" />

      <div className="Grid__three">
        {dataITEConecta.map(({ id, title, url }) => (
          <div key={id}>
            <p>{title}</p>
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${url}?rel=0`}
                title={title}
                allowFullScreen
                frameBorder="0"
                aria-label={title}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ITEConecta;
