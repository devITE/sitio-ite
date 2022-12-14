const Informes = ({ items }) => {
  return (
    <div className="w-100 Home__informes ps-5 pe-5">
      {items.map((items) => (
        <div key={items.id}>
          <a href={items.link} target="_blank" rel="noreferrer">
            <img
              src={items.url}
              className="img-fluid rounded-3 shadow-sm"
              alt={items.alt}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Informes;
