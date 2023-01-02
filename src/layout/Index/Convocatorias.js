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
            <td>{items.nameFile}</td>
            <td>
              <a
                className="btn btn-danger btn-sm"
                href={items.linkFile}
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
