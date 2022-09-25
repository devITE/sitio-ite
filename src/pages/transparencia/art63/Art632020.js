import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { esES } from "@mui/material/locale";
import { dataArt632020 } from "../../../assets/data/dataTransparenciaArt63";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import "../Transparencia.css";

const Transparencia_imppath = require.context("../../../img/imgT");

const Art632020 = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "NO.",
        footer: "NO.",
        size: 55,
        enableResizing: false,
      },
      {
        accessorKey: "fraccion",
        header: "Fracción",
        footer: "Fracción",
        size: 90,
        enableResizing: false,
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
      },
      {
        accessorKey: "fundamentoLegal",
        header: "Fundamento Legal",
        footer: "Fundamento Legal",
        size: 270,
        enableResizing: false,
      },
      {
        accessorKey: "actualizacion",
        header: "Actualización",
        footer: "Actualización",
        size: 100,
        enableResizing: false,
      },
      {
        id: "exccel",
        header: "Excel",
        footer: "Excel",
        columnDefType: "display",
        size: 80,
        enableResizing: false,
        Cell: ({ row }) => (
          <a href={row.original.excel} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faFileExcel}
              className="btn btn-success ms-3"
            />
          </a>
        ),
      },
    ],
    []
  );

  return (
    <div>
      <img
        className="img-fluid w-100"
        src={Transparencia_imppath(`./head.png`)}
        alt="Transparencia"
      />
      <div className="w-100 mt-3 Transparencia__header-title">
        Ley de Transparencia y Acceso a la Información Pública del Estado de
        Tlaxcala. 2016.
      </div>
      <h5 className="mt-3 Transparencia__title">
        Artículo 63. (2020) Obligaciones Comunes
      </h5>
      <ThemeProvider theme={createTheme({}, esES)}>
        <MaterialReactTable
          columns={columns}
          data={dataArt632020}
          enableExpanding
          enableExpandAll
          enableColumnActions={false}
          enableColumnFilters={false}
          enableColumnResizing
          enableDensityToggle={false}
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
            clearFilter: "Filtro claro",
            clearSearch: "Borrar búsqueda",
            clearSort: "Ordenar claro",
            columnActions: "Acciones de columna",
            edit: "Editar",
            expand: "Expandir",
            expandAll: "Expandir todo",
            filterByColumn: "Filtrar por {column}",
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
      </ThemeProvider>
    </div>
  );
};

export default Art632020;
