import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Breadcrumbs.css";

const Breadcrumbs = ({ path }) => {
  const homePath = { label: "Home", url: "/" };
  const fullPath = [homePath, ...path];

  return (
    <div
      id="breadcrumbID"
      className="bg-dark-subtle fw-bolder fs-6 text-dark p-2 d-flex "
    >
      {fullPath.map((item, index) => (
        <React.Fragment key={item.url || item.label || index}>
          {index > 0 && (
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-strong ps-2 pe-2 pt-1 fs-6"
            />
          )}
          {item.url ? (
            <Link to={item.url} className="breadcrumb-link text-dark">
              <span>{item.label}</span>
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  path: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ).isRequired,
};
