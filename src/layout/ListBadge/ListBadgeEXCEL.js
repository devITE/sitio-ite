import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

const ListBadgeEXCEL = ({ ifNumbered, listsBadgeItem }) => {
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
            {listsBadgeItem.linkItem === "" ? (
              <span></span>
            ) : (
              <a
                href={listsBadgeItem.linkItem}
                target="_blank"
                rel="noreferrer"
              >
                <span className="badge bg-success">
                  <FontAwesomeIcon icon={faFileExcel} />
                </span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </>
  );
};
export default ListBadgeEXCEL;
