import "./Videoteca.css";

const Videoteca = ({ items }) => {
  return (
    <div className="Videoteca">
      <div className="Videoteca-content">
        {items.map((items) => (
          <div key={items.id} className="Videoteca-tag">
            <div className="ratio ratio-16x9">
              <iframe
                src={items.url}
                title={items.title}
                allowFullScreen
              ></iframe>
            </div>
            <h5>{items.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videoteca;
