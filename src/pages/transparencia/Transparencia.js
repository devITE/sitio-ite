import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TransparenciaItem = ({ to, href, imgSrc, imgAlt, text }) => (
  <div>
    {to ? (
      <Link to={to}>
        <img className="img-fluid w-100 mt-3" src={imgSrc} alt={imgAlt} />
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noreferrer">
        <img className="img-fluid w-100 mt-3" src={imgSrc} alt={imgAlt} />
      </a>
    )}
    <p className="mt-2">{text}</p>
  </div>
);

// Validación de props
TransparenciaItem.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TransparenciaItem;
