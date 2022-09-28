// import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const ListBadgePDF = ({ ifNumbered, listsBadgeItem }) => {
  return (
    <>
      <ol className={"list-group " + ifNumbered}>
        {listsBadgeItem.map((listsBadgeItem) => (
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div>{listsBadgeItem.titleItem}</div>
            </div>
            <a href={listsBadgeItem.linkItem} target="_blank" rel="noreferrer">
              <span className="badge bg-danger">
                <FontAwesomeIcon icon={faFilePdf} />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </>
  );
};
export default ListBadgePDF;
