import React, { useMemo } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import MaterialReactTable from "material-react-table";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWord, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataNormatividad } from "../../data/dataNormativad";

const Normatividad = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "nameDoc",
        header: "Normatividad",
        footer: "Normatividad",
      },
      {
        accessorKey: "post",
        header: "Publicada",
        footer: "Publicada",
      },
      {
        accessorKey: "lastUpdate",
        header: "Última Reforma",
        footer: "Última Reforma",
      },
    ],
    []
  );

  return (
    <>
      <NavbarEnlaces title="Normatividad" />
      <div className="d-flex align-items-start w-100">
        <div
          className="nav flex-column nav-pills me-3 w-25"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {dataNormatividad.map((buttonNormatividad) => (
            <button
              key={buttonNormatividad.id}
              className="btn btn-ite"
              id={"v-pills-" + buttonNormatividad.nameButton + "-tab"}
              data-bs-toggle="pill"
              data-bs-target={"#v-pills-" + buttonNormatividad.nameButton}
              type="button"
              role="tab"
              aria-controls={"v-pills-" + buttonNormatividad.nameButton}
              aria-selected="false"
            >
              {buttonNormatividad.titleButton}
            </button>
          ))}
        </div>
        <div className="tab-content w-75" id="v-pills-tabContent">
          {dataNormatividad.map((buttonNormatividad) => (
            <div
              key={buttonNormatividad.id}
              className="tab-pane fade"
              id={"v-pills-" + buttonNormatividad.nameButton}
              role="tabpanel"
              aria-labelledby={
                "v-pills-" + buttonNormatividad.nameButton + "-tab"
              }
              tabIndex="0"
            >
              <MaterialReactTable
                columns={columns}
                data={buttonNormatividad.children}
                enableExpanding
                enableExpandAll
                enableColumnActions={false}
                enableColumnResizing
                enableDensityToggle={false}
                muiExpandButtonProps={({ row }) => ({
                  sx: {
                    display: row.original.subRows === "" ? "none" : "flex",
                  },
                })}
                renderDetailPanel={({ row }) =>
                  (row.original.pdf === "") &
                  (row.original.pdfMobile === "") &
                  (row.original.word === "") ? (
                    <span></span>
                  ) : (
                    <Box id="Box">
                      <div className="row">
                        {(row.original.pdf !== "") &
                        (row.original.pdfMobile === "") &
                        (row.original.word !== "") ? (
                          <>
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                              <span>PDF </span>
                              <a
                                href={row.original.pdf}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-danger"
                              >
                                <FontAwesomeIcon icon={faFilePdf} />
                              </a>
                            </div>
                            <div className="col-md-4">
                              <span>Word </span>
                              <a
                                href={row.original.word}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary"
                              >
                                <FontAwesomeIcon icon={faFileWord} />
                              </a>
                            </div>
                            <div className="col-md-2"></div>
                          </>
                        ) : (row.original.pdf !== "") &
                          (row.original.pdfMobile === "") &
                          (row.original.word === "") ? (
                          <>
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                              <span>PDF </span>
                              <a
                                href={row.original.pdf}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-danger"
                              >
                                <FontAwesomeIcon icon={faFilePdf} />
                              </a>
                            </div>
                            <div className="col-md-4"></div>
                          </>
                        ) : (
                          <>
                            <div className="col-md-4">
                              <span>PDF </span>
                              <a
                                href={row.original.pdf}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-danger"
                              >
                                <FontAwesomeIcon icon={faFilePdf} />
                              </a>
                            </div>
                            <div className="col-md-4">
                              <span>PDF móvil </span>
                              <a
                                href={row.original.pdfMobile}
                                target="_blank"
                                className="btn btn-danger"
                                rel="noreferrer"
                              >
                                <FontAwesomeIcon icon={faFilePdf} />
                              </a>
                            </div>
                            <div className="col-md-4">
                              <span>Word </span>
                              <a
                                href={row.original.word}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary"
                              >
                                <FontAwesomeIcon icon={faFileWord} />
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                    </Box>
                  )
                }
                muiTablePaginationProps={{
                  labelRowsPerPage: "Filas por página",
                  getItemAriaLabel: (type) => {
                    if (type === "first") {
                      return "inicio";
                    }
                    if (type === "last") {
                      return "fin";
                    }
                    if (type === "next") {
                      return "siguiente";
                    }
                    if (type === "previous") {
                      return "anterior";
                    }
                  },
                  labelDisplayedRows: ({ from, to, count }) =>
                    `${from}-${to} de ${count !== -1 ? count : `${to} para`}`,
                }}
                localization={{
                  actions: "Acciones",
                  cancel: "Cancelar",
                  clearFilter: "Limpiar filtro",
                  clearSearch: "Borrar búsqueda",
                  clearSort: "Ordenar claro",
                  columnActions: "Acciones de columna",
                  edit: "Editar",
                  expand: "Expandir",
                  expandAll: "Expandir todo",
                  filterByColumn: "{column}",
                  groupByColumn: "Agrupar por {column}",
                  groupedBy: "Agrupados por ",
                  hideAll: "Ocultar todo",
                  hideColumn: "Ocultar columna de {column}",
                  rowActions: "Acciones de fila",
                  save: "Salvar",
                  search: "Búsqueda",
                  selectedCountOfRowCountRowsSelected:
                    "{selectedCount} de {rowCount} fila(s) seleccionadas",
                  showAll: "Mostrar todo",
                  showHideColumns: "Mostrar/Ocultar columnas",
                  showHideFilters: "Alternar filtros",
                  showHideSearch: "Alternar búsqueda",
                  sortByColumnAsc: "Ordenar por {column} ascendente",
                  sortByColumnDesc: "Ordenar por {column} descendiendo",
                  thenBy: ", entonces por ",
                  toggleDensity: "Alternar relleno denso",
                  toggleFullScreen: "Alternar pantalla completa",
                  toggleSelectAll: "Seleccionar todo",
                  toggleSelectRow: "Seleccionar fila",
                  ungroupByColumn: "Desagrupar por {column}",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Normatividad;
