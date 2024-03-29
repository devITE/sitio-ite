import React, { useMemo, useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import MaterialReactTable from "material-react-table";
import { Box } from "@mui/material";
import { MenuItem, TextField } from "@mui/material";
import { dataAcuerdosINE2024 } from "../../../data/2024/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Expandible from "../../../layout/HelperDataTable/Expandible";

const AcuerdosINE2024 = () => {
  useEffect(() => {
    document.title = `Acuerdos INE 2024`;
  }, []);
  const columns = useMemo(
    () => [
      {
        accessorKey: "monthDoc",
        header: "MES",
        footer: "MES",
        size: 30,
        enableResizing: false,
        Filter: ({ header }) => (
          <TextField
            onChange={(e) =>
              header.column.setFilterValue(e.target.value || undefined)
            }
            select
            value={header.column.getFilterValue() ?? ""}
            margin="none"
            placeholder="Filter"
            variant="standard"
            fullWidth
          >
            <MenuItem value={null}>Todos</MenuItem>
            <MenuItem value="ENE">Enero</MenuItem>
            <MenuItem value="FEB">Febrero</MenuItem>
            <MenuItem value="MAR">Marzo</MenuItem>
            <MenuItem value="ABR">Abril</MenuItem>
            <MenuItem value="MAY">Mayo</MenuItem>
            <MenuItem value="JUN">Junio</MenuItem>
            <MenuItem value="JUL">Julio</MenuItem>
            <MenuItem value="AGO">Agosto</MenuItem>
            <MenuItem value="SEP">Septiembre</MenuItem>
            <MenuItem value="OCT">Octubre</MenuItem>
            <MenuItem value="NOV">Noviembre</MenuItem>
            <MenuItem value="DIC">Diciembre</MenuItem>
          </TextField>
        ),
      },
      {
        accessorKey: "numDoc",
        header: "ACUERDO",
        footer: "ACUERDO",
        size: 55,
        enableResizing: false,
      },
      {
        accessorFn: (row) => `${row.typeDoc} ${row.nameDoc}`,
        id: "titulo",
        header: "TÍTULO",
        footer: "TÍTULO",
        size: 255,
        enableResizing: false,
      },
    ],
    []
  );

  return (
    <>
      <TitlePages title="Acuerdos INE" subTitle="Acuerdos INE 2024" />
      <Expandible />
      <MaterialReactTable
        columns={columns}
        data={dataAcuerdosINE2024}
        enableExpanding
        enableExpandAll
        enableColumnActions={false}
        enableDensityToggle={false}
        enableColumnResizing={false}
        initialState={{ density: "compact" }}
        muiExpandButtonProps={({ row }) => ({
          sx: {
            display: row.original.subRows === "" ? "none" : "flex",
          },
        })}
        renderDetailPanel={({ row }) => (
          <Box id="Box">
            <div className="table-responsive">
              <table className="table table-hover table-sm table-bordered table align-middle w-40">
                <thead>
                  <tr>
                    <td colSpan={2}>
                      <br />
                      <strong>A C U E R D O</strong>
                      <br />
                      <br />
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-secondary">
                    <td>
                      {row.original.typeDoc} {row.original.numDoc}{" "}
                      {row.original.nameDoc}
                    </td>
                    <td>
                      <a
                        href={row.original.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </td>
                  </tr>
                  {!row.original.titleAnexo1 &
                  !row.original.pdfAnexo1 &
                  !row.original.titleAnexo2 &
                  !row.original.pdfAnexo2 &
                  !row.original.titleAnexo3 &
                  !row.original.pdfAnexo3 &
                  !row.original.titleAnexo4 &
                  !row.original.pdfAnexo4 &
                  !row.original.titleAnexo5 &
                  !row.original.pdfAnexo5 &
                  !row.original.titleAnexo6 &
                  !row.original.pdfAnexo6 &
                  !row.original.titleAnexo7 &
                  !row.original.pdfAnexo7 &
                  !row.original.titleAnexo8 &
                  !row.original.pdfAnexo8 &
                  !row.original.titleAnexo9 &
                  !row.original.pdfAnexo9 &
                  !row.original.titleAnexo10 &
                  !row.original.pdfAnexo10 &
                  !row.original.titleAnexo11 &
                  !row.original.pdfAnexo11 &
                  !row.original.titleAnexo12 &
                  !row.original.pdfAnexo12 &
                  !row.original.titleAnexo13 &
                  !row.original.pdfAnexo13 &
                  !row.original.titleAnexo14 &
                  !row.original.pdfAnexo14 &
                  !row.original.titleAnexo15 &
                  !row.original.pdfAnexo15 &
                  !row.original.titleAnexo16 &
                  !row.original.pdfAnexo16 &
                  !row.original.titleAnexo17 &
                  !row.original.pdfAnexo17 &
                  !row.original.titleAnexo18 &
                  !row.original.pdfAnexo18 &
                  !row.original.titleAnexo19 &
                  !row.original.pdfAnexo19 &
                  !row.original.titleAnexo20 &
                  !row.original.pdfAnexo20 &
                  !row.original.titleAnexo21 &
                  !row.original.pdfAnexo21 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td colSpan={2}>
                        <br />
                        <strong>A N E X O S</strong>
                        <br />
                        <br />
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo1 & !row.original.pdfAnexo1 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo1.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo1}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {/* aqui termina la inserción de un nvo anexo */}
                  {!row.original.titleAnexo2 & !row.original.pdfAnexo2 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo2.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo2}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo3 & !row.original.pdfAnexo3 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo3.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo3}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo4 & !row.original.pdfAnexo4 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo4.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo4}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo5 & !row.original.pdfAnexo5 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo5.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo5}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo6 & !row.original.pdfAnexo6 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo6.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo6}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo7 & !row.original.pdfAnexo7 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo7.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo7}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo8 & !row.original.pdfAnexo8 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo8.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo8}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo9 & !row.original.pdfAnexo9 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo9.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo9}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo10 & !row.original.pdfAnexo10 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo10.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo10}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo11 & !row.original.pdfAnexo11 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo11.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo11}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo12 & !row.original.pdfAnexo12 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo12.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo12}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo13 & !row.original.pdfAnexo13 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo13.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo13}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo14 & !row.original.pdfAnexo14 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo14.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo14}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo15 & !row.original.pdfAnexo15 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo15.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo15}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo16 & !row.original.pdfAnexo16 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo16.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo16}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo17 & !row.original.pdfAnexo17 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo17.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo17}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo18 & !row.original.pdfAnexo18 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo18.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo18}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo19 & !row.original.pdfAnexo19 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo19.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo19}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo20 & !row.original.pdfAnexo20 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo20.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo20}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                  {!row.original.titleAnexo21 & !row.original.pdfAnexo21 ? (
                    <span></span>
                  ) : (
                    <tr>
                      <td>{row.original.titleAnexo21.toUpperCase()}</td>
                      <td>
                        <a
                          href={row.original.pdfAnexo21}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            className="btn btn-danger"
                          />
                        </a>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Box>
        )}
        muiTablePaginationProps={{
          rowsPerPageOptions: [10, 25, 50, 100, 200, 300, 400],
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
          expand: "",
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
    </>
  );
};
export default AcuerdosINE2024;
