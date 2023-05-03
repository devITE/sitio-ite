import React, { useMemo, useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import MaterialReactTable from "material-react-table";
import { MenuItem, TextField, Box } from "@mui/material";
import { dataAcuerdos2022 } from "../../../data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import HelperDataTable from "../../../layout/HelperDataTable";

const Acuerdos2022 = () => {
  useEffect(() => {
    document.title = `Acuerdos ITE 2022`;
  }, []);
  const columns = useMemo(
    () => [
      {
        accessorKey: "monthDoc",
        header: "MES",
        footer: "MES",
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
      },
      {
        accessorFn: (row) => `${row.typeDoc} ${row.nameDoc}`,
        id: "titulo",
        header: "TÍTULO",
        footer: "TÍTULO",
      },
      // {
      //   id: "pdf",
      //   header: "",
      //   footer: "",
      //   enableColumnFilters: false,
      //   Cell: ({ row }) =>
      //     row.original.link === "" ? (
      //       <span></span>
      //     ) : (
      //       <a href={row.original.link} target="_blank" rel="noreferrer">
      //         <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
      //       </a>
      //     ),
      // },
    ],
    []
  );

  return (
    <>
      <TitlePages title="Acuerdos ITE" subTitle="Acuerdos ITE 2022" />
      <HelperDataTable />
      <MaterialReactTable
        columns={columns}
        data={dataAcuerdos2022}
        enableExpanding
        enableExpandAll
        enableColumnActions={false}
        enableDensityToggle={false}
        initialState={{ density: "compact" }}
        muiExpandButtonProps={({ row }) => ({
          sx: {
            display: row.original.subRows === "" ? "none" : "flex",
          },
        })}
        renderDetailPanel={({ row }) => (
          <Box id="Box">
            {
              <div className="w-100">
                <table className="w-50 table table-borderless table-striped mx-auto">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>
                        {row.original.typeDoc} {row.original.nameDoc}{" "}
                      </td>
                      <td>
                        <a
                          href={row.original.pdf}
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
                    <tr>
                      <td colSpan={2}>
                        <br />
                        <strong>ANEXOS</strong>
                      </td>
                    </tr>
                    {(row.original.nameDoc1 === "") &
                    (row.original.pdf1 === "") &
                    (row.original.nameDoc2 === "") &
                    (row.original.pdf2 === "") &
                    (row.original.nameDoc3 === "") &
                    (row.original.pdf3 === "") &
                    (row.original.nameDoc4 === "") &
                    (row.original.pdf4 === "") ? (
                      <tr>
                        <td colSpan={2}>SIN ANEXOS</td>
                      </tr>
                    ) : //------------
                    (row.original.nameDoc1 !== "") &
                      (row.original.pdf1 !== "") ? (
                      <tr>
                        <td>{row.original.nameDoc1} </td>
                        <td>
                          <a
                            href={row.original.pdf1}
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
                    ) : (
                      <tr>
                        <td colSpan={2}>1</td>
                      </tr>
                    )}
                    {(row.original.nameDoc2 !== "") &
                    (row.original.pdf2 !== "") ? (
                      <tr>
                        <td>{row.original.nameDoc2} </td>
                        <td>
                          <a
                            href={row.original.pdf2}
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
                    ) : (
                      <tr>
                        <td colSpan={2}>2</td>
                      </tr>
                    )}
                    {(row.original.nameDoc3 !== "") &
                    (row.original.pdf3 !== "") ? (
                      <tr>
                        <td>{row.original.nameDoc3} </td>
                        <td>
                          <a
                            href={row.original.pdf3}
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
                    ) : (
                      <tr>
                        <td colSpan={2}>3</td>
                      </tr>
                    )}
                    {
                      (row.original.nameDoc4 !== "") &
                      (row.original.pdf4 !== "") ? (
                        <tr>
                          <td>{row.original.nameDoc4} </td>
                          <td>
                            <a
                              href={row.original.pdf4}
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
                      ) : (
                        <tr>
                          <td colSpan={2}>4</td>
                        </tr>
                      )
                      //-------------
                    }
                  </tbody>
                </table>
              </div>
            }
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
export default Acuerdos2022;
