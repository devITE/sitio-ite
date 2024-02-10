import React, { useMemo, useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import MaterialReactTable from "material-react-table";
import { Box } from "@mui/material";
import { MenuItem, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataAcuerdos2024 } from "../../data/2024/dataAcuerdos";
import { dataEstrados } from "../../data/2024/dataEstradosConvocatorias";
import Expandible from "../../layout/HelperDataTable/Expandible";
import TablePDF from "../../layout/Index/Estrados";

const EstradosElectronicos = () => {
  useEffect(() => {
    document.title = `Estrados Electrónicos`;
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
      <TitlePages title="Estrados Electrónicos" subTitle="" />

      <div className="w-75 mx-auto mt-5">
        <TitlePages title="" subTitle="Medios de impugnación" />
      </div>
      <div className="w-50 mx-auto">
        <TablePDF items={dataEstrados} itemsID={"listEstradosElectronicos"} />
      </div>
      <br />
      <br />
      <div className="w-75 mx-auto mt-5">
        <TitlePages title="" subTitle="Acuerdos 2024" />
      </div>
      {/* <Expandible /> */}
      <MaterialReactTable
        columns={columns}
        data={dataAcuerdos2024}
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
                  !row.original.pdfAnexo8 &
                  !row.original.titleAnexo8 &
                  !row.original.pdfAnexo6 &
                  !row.original.titleAnexo9 &
                  !row.original.pdfAnexo9 &
                  !row.original.titleAnexo10 &
                  !row.original.pdfAnexo10 &
                  !row.original.titleAnexo11 &
                  !row.original.pdfAnexo11 &
                  !row.original.titleAnexo12 &
                  !row.original.pdfAnexo11 ? (
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
      <br />
      <br />
    </>
  );
};

export default EstradosElectronicos;
