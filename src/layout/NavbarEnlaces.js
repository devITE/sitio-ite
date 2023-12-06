import { Link } from "react-router-dom";
import "./NavbarEnlaces.css";

const NavbarEnlaces = (props) => {
  return (
    <>
      <div className="w-100 NavbarEnlaces">
        <div className="NavbarEnlaces__item">
          <Link to="/ProcesosElectorales">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e1.png"
              alt="Procesos Electorales"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/Normatividad">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e2.png"
              alt="Normatividad"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/Galeria">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e3.png"
              alt="Galeria fotográfica"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/OIC">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e4.png"
              alt="Órgano Interno de Control"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/PartidosPoliticos">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e5.png"
              alt="Partidos Políticos"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/Infografias">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e6.png"
              alt=" Infografías"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/MemoriasElectorales">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e7.png"
              alt="Memorias Electorales"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/MetasMSPEN">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e8.png"
              alt="Metas MSPEN"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/PersonasDiscapacidad">
            <img
              src="https://itetlax.org.mx/assets/img/icons/dis.jpg"
              alt="Personas con discapacidad"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
        <div className="NavbarEnlaces__item">
          <Link to="/Informes">
            <img
              src="https://itetlax.org.mx/assets/img/icons/e6.png"
              alt=" Informes"
              className="img-fluid shadow rounded-4"
            />
          </Link>
        </div>
      </div>
      <div className="Enlances__title mb-4">{props.title}</div>
    </>
  );
};
export default NavbarEnlaces;
