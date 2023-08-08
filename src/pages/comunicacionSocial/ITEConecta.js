import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import { dataITEConecta } from "../../data/dataITEConecta";

const ITEConecta = () => {
  useEffect(() => {
    document.title = `ITE Conecta`;
  }, []);
  return (
    <>
      <TitlePages title="Comunicación Social" subTitle="ITE Conecta" />

      <div className="Grid__three">
        {dataITEConecta.map((itemVideo) => (
          <div key={itemVideo.id}>
            <p>{itemVideo.title}</p>
            <div className="Home__video-embed ratio ratio-16x9 w-100">
              <iframe
                src={
                  "https://www.youtube-nocookie.com/embed/" +
                  itemVideo.url +
                  "?rel=0"
                }
                title={itemVideo.title}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ITEConecta;
