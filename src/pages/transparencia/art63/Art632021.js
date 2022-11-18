import React, { useMemo } from "react";
import TitlePages from "../../../layout/TitlePages";
import MaterialReactTable from "material-react-table";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { dataArt632021 } from "../../../assets/data/dataTransparenciaArt63";

// let nameFile = "";
const Art632021 = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "NO.",
        footer: "NO.",
        size: 55,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "fraccion",
        header: "Fracción",
        footer: "Fracción",
        size: 90,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "titulo",
        header: "Título",
        footer: "Título",
        size: 150,
        enableResizing: false,
      },
      {
        accessorKey: "cumplimiento",
        header: "Cumplimiento",
        footer: "Cumplimiento",
        size: 100,
        enableResizing: false,
        filterFn: "equals",
        filterSelectOptions: [
          { text: "Aplica", value: "Aplica" },
          { text: "No Aplica", value: "No Aplica" },
        ],
        filterVariant: "select",
      },
      {
        accessorKey: "fundamentoLegal",
        header: "Fundamento Legal",
        footer: "Fundamento Legal",
        size: 270,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "actualizacion",
        header: "Actualización",
        footer: "Actualización",
        size: 100,
        enableResizing: false,
        enableColumnFilter: false,
      },
      // {
      //   id: "exccel",
      //   header: "Excel",
      //   footer: "Excel",
      //   size: 80,
      //   enableResizing: false,
      //   enableColumnFilters: false,
      //   Cell: ({ row }) =>
      //     row.original.excel === "" ? (
      //       <span></span>
      //     ) : (
      //       <a href={row.original.excel} target="_blank" rel="noreferrer">
      //         <FontAwesomeIcon icon={faFileExcel} className="btn btn-success" />
      //       </a>
      //     ),
      // },
    ],
    []
  );

  return (
    <div>
      <TitlePages
        title="Transparencia"
        subTitle="Artículo 63. (2021) Obligaciones Comunes"
      />
      <MaterialReactTable
        columns={columns}
        data={dataArt632021}
        enableExpanding
        enableExpandAll
        enableColumnActions={false}
        enableColumnResizing
        enableDensityToggle={false}
        // data ={row.original}
        renderDetailPanel={
          ({ row }) =>
            row.original.excel === "" ? (
              <Box
                sx={{
                  display: "grid",
                  margin: "auto",
                  gridTemplateColumns: "1fr 1fr",
                  width: "100%",
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                d
              </Box>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  margin: "auto",
                  gridTemplateColumns: "1fr 1fr",
                  width: "100%",
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <p className="text-strong text-center">
                  Descarga el archivo de la Fracción:{" "}
                  {row.original.excel.substring(14, 100).slice(0, -26)}{" "}
                  <a href={row.original.excel} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faFileExcel}
                      className="btn btn-success"
                    />
                  </a>
                </p>
              </Box>
            )
          // <Box
          //   sx={{
          //     display: "grid",
          //     margin: "auto",
          //     gridTemplateColumns: "1fr 1fr",
          //     width: "100%",
          //   }}
          // >
          //   {row.original.excel === "" ? (
          //     <span></span>
          //   ) : (
          //     <h5>
          //       {row.original.excel.substring(14, 100).slice(0, -26)}{" "}
          //       <a href={row.original.excel} target="_blank" rel="noreferrer">
          //         <FontAwesomeIcon
          //           icon={faFileExcel}
          //           className="btn btn-success"
          //         />
          //       </a>
          //     </h5>
          //   )}
          // </Box>
        }
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: "#972069",
            color: "#fff",
          },
        }}
        muiTableFooterCellProps={{
          sx: {
            backgroundColor: "#972069",
            color: "#fff",
          },
        }}
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
      {/* </ThemeProvider> */}
    </div>
  );
};

export default Art632021;
