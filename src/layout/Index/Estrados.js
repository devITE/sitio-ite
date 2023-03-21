import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const TablePDF = ({ items }) => {
  return items.length === 0 ? (
    <span></span>
  ) : (
    <table className="table table-hover table-responsive">
      {items.map((items) => (
        <tbody key={items.id}>
          <tr>
            <td>{items.nameCedula}</td>
            <td>
              <a
                className="btn btn-danger btn-sm"
                href={items.linkCedula}
                target="_blank"
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </td>
          </tr>
          <tr>
            <td className="ps-3">{items.nameFolio}</td>
            <td>
              <a
                className="btn btn-danger btn-sm"
                href={items.linkFolio}
                target="_blank"
                role="button"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TablePDF;
