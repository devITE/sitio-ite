import React, { useMemo } from "react";
import TitlePages from "../../layout/TitlePages";
import MaterialReactTable from "material-react-table";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWord, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataNormatividad } from "../../data/dataArchivo";

const InstrumentosNormativos = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "NO.",
        footer: "NO.",
      },
      {
        accessorKey: "nombre",
        header: "Normatividad",
        footer: "Normatividad",
      },
      {
        accessorKey: "publicada",
        header: "Publicada",
        footer: "Publicada",
      },
      {
        accessorKey: "reforma",
        header: "Última Reforma",
        footer: "Última Reforma",
      },
    ],
    []
  );

  return (
    <>
      <TitlePages title="Archivo" subTitle="Instrumentos Normativos" />
      <MaterialReactTable
        columns={columns}
        data={dataNormatividad}
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
          (row.original.word === "") & (row.original.pdf === "") ? (
            <span></span>
          ) : (
            <Box id="Box">
              <div>
                <div className="row">
                  <div className="col-md-6">
                    {row.original.word
                      ? row.original.word //.substring(14, 100).slice(0, -26)
                      : []}{" "}
                    <a
                      href={row.original.word}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-info"
                    >
                      <FontAwesomeIcon icon={faFileWord} />
                    </a>
                  </div>
                  <div className="col-md-6">
                    {row.original.pdf
                      ? row.original.pdf //.substring(14, 100).slice(0, -25)
                      : []}{" "}
                    <a
                      href={row.original.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-danger"
                    >
                      <FontAwesomeIcon icon={faFilePdf} />
                    </a>
                  </div>
                </div>
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
    </>
  );
};
export default InstrumentosNormativos;
