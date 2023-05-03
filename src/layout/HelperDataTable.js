import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faAngleDoubleDown,
  faSearch,
  faExpand,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const HelperDataTable = () => {
  return (
    <div className="mb-3">
      <h5>Ayuda en tabla de registros</h5>
      La presente tabla tiene la función de realizar busquedas, filtros y
      ordenamiento.
      <ol>
        <li>
          Para poder ver los archivos correspondientes al registro que se esta
          consultado, es necesario dar click en el botón{" "}
          <strong>
            <FontAwesomeIcon icon={faChevronDown} />
          </strong>
        </li>
        <li>
          Para mostrar los archivos adjuntos de todos los registros, es
          necesario dar click en el botón{" "}
          <strong>
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </strong>
        </li>
        <li>
          Es posible realizar búsquedas en los registros, presionando el botón{" "}
          <strong>
            <FontAwesomeIcon icon={faSearch} />
          </strong>{" "}
          y en el cuadro de búsqueda ingresar el texto. Para cerrar el cuadro de
          búsqueda, es necesario limpiar el contenido y dar click en el botón
          <strong>
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="SearchOffIcon"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3 6.08 3 3.28 5.64 3.03 9h2.02C5.3 6.75 7.18 5 9.5 5 11.99 5 14 7.01 14 9.5S11.99 14 9.5 14c-.17 0-.33-.03-.5-.05v2.02c.17.02.33.03.5.03 1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"></path>
              <path d="M6.47 10.82 4 13.29l-2.47-2.47-.71.71L3.29 14 .82 16.47l.71.71L4 14.71l2.47 2.47.71-.71L4.71 14l2.47-2.47z"></path>
            </svg>
          </strong>
        </li>
        <li>
          Se habilitaron filtrados de búsqueda, para poder hacer uso de ellos,
          es necesario dar click en el botón{" "}
          <strong>
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FilterListIcon"
            >
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
            </svg>
          </strong>
          . Abajo del nombre de la columna aparecen los filtros disponibles, ya
          sea por texto o lista. Para ocultarlos, dar click en{" "}
          <strong>
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FilterListOffIcon"
            >
              <path d="M10.83 8H21V6H8.83l2 2zm5 5H18v-2h-4.17l2 2zM14 16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h.17L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41L14 16.83z"></path>
            </svg>
          </strong>
        </li>
        <li>
          Para personalizar las columnas a mostrar, es necesario dar click en el
          botón{" "}
          <strong>
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ViewColumnIcon"
            >
              <path d="M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"></path>
            </svg>
          </strong>{" "}
          y seleccionar las columnas a ocultar.
        </li>
        <li>
          Es posible expandir la vista de la tabla, para ello basta dar click en
          el botón{" "}
          <strong>
            <FontAwesomeIcon icon={faExpand} />
          </strong>
        </li>
        <li>
          La presente tabla por default muestra diez registros, para poder ver
          un mayor número de registros, es necesario que, en la parte inferior
          de la tabla, en el apartado <strong>Filas por página</strong> se
          seleccione la cantidad de registros que quiera ver. Si los registros
          superan el número máximo que se encuentra en esa lista, el restro de
          registros se pueden ver mediante paginación
          <ul>
            <li>
              Dando click en el bóton{" "}
              <strong>
                <FontAwesomeIcon icon={faChevronRight} />
              </strong>{" "}
              para avanzar una página
            </li>
            <li>
              En el botón{" "}
              <strong>
                <FontAwesomeIcon icon={faChevronLeft} />
              </strong>{" "}
              para retroceder una página
            </li>
            <li>
              Click en el botón{" "}
              <strong>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="FirstPageIcon"
                >
                  <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
                </svg>
              </strong>{" "}
              para ir a la primer página,
            </li>
            <li>
              Click en el botón{" "}
              <strong>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LastPageIcon"
                >
                  <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
                </svg>
              </strong>{" "}
              para ir a la última página,
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};
export default HelperDataTable;
