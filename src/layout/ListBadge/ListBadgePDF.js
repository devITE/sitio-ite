import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faFileZipper,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const ListBadgePDF = ({ ifNumbered, listsBadgeItem }) => {
  return (
    <>
      <ol className={"list-group " + ifNumbered}>
        {listsBadgeItem.map((listsBadgeItem) => (
          <li
            key={listsBadgeItem.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {listsBadgeItem.img === "" ? (
              <span></span>
            ) : (
              <img
                src={listsBadgeItem.img}
                alt={listsBadgeItem.alt}
                className="img-fluid"
              />
            )}
            <div className="ms-2 me-auto">
              <div>{listsBadgeItem.titleItem}</div>
            </div>
            {/* {listsBadgeItem.linkItem === "" ? (
              <span></span>
            ) : (
              <a
                href={listsBadgeItem.linkItem}
                target="_blank"
                rel="noreferrer"
              >
                <span className="badge bg-danger">
                  <FontAwesomeIcon icon={faFilePdf} />
                </span>
              </a>
            )} */}
            {
              {
                pdf: (
                  <a
                    href={listsBadgeItem.linkItem}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="badge bg-danger">
                      <FontAwesomeIcon icon={faFilePdf} />
                    </span>
                  </a>
                ),
                link: (
                  <a
                    href={listsBadgeItem.linkItem}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="badge bg-info">
                      <FontAwesomeIcon icon={faLink} />
                    </span>
                  </a>
                ),
                zip: (
                  <a
                    href={listsBadgeItem.linkItem}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="badge bg-warning">
                      <FontAwesomeIcon icon={faFileZipper} />
                    </span>
                  </a>
                ),
              }[listsBadgeItem.typeDocument]
            }
          </li>
        ))}
      </ol>
    </>
  );
};
export default ListBadgePDF;
