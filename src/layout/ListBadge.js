import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFileImage,
  faFilePdf,
  faFileVideo,
  faFileZipper,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const ListBadge = ({ ifNumbered, listsBadgeItem, clasName }) => {
  return (
    <ol className={"list-group " + ifNumbered + " " + clasName}>
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
          {listsBadgeItem.linkItem === "" ? (
            <span></span>
          ) : (
            {
              video: (
                <a
                  href={listsBadgeItem.linkItem}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="badge bg-secondary">
                    <FontAwesomeIcon icon={faFileVideo} />
                  </span>
                </a>
              ),
              img: (
                <a
                  href={listsBadgeItem.linkItem}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="badge bg-primary">
                    <FontAwesomeIcon icon={faFileImage} />
                  </span>
                </a>
              ),
              excel: (
                <a
                  href={listsBadgeItem.linkItem}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="badge bg-success">
                    <FontAwesomeIcon icon={faFileExcel} />
                  </span>
                </a>
              ),
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
          )}
        </li>
      ))}
    </ol>
  );
};
export default ListBadge;
