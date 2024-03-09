import React, { useMemo, useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import MaterialReactTable from "material-react-table";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWord, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataPlaneacion } from "../../data/2024/dataArchivo";

const InstrumentosNormativos = () => {
  useEffect(() => {
    document.title = `Planeación Archivística`;
  }, []);
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "NO.",
        footer: "NO.",
      },
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
    ],
    []
  );

  return (
    <>
      <TitlePages title="Archivo" subTitle="Planeación Archivística" />
      <MaterialReactTable
        columns={columns}
        data={dataPlaneacion}
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
        renderDetailPanel={({ row }) => (
          <Box id="Box">
            {!row.original.pdf ? (
              <span></span>
            ) : (
              <div className="">
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
            )}

            {!row.original.word ? (
              <span></span>
            ) : (
              <div className="">
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
            )}
          </Box>
        )}
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
