import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { dataArt942021 } from "../../../assets/data/dataTransparenciaArt94";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import "../Transparencia.css";

const Transparencia_imppath = require.context("../../../img/imgT");

const Art942021 = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "NO.",
        size: 55,
        enableResizing: false,
      },
      {
        accessorKey: "fraccion",
        header: "Fracción",
        size: 90,
        enableResizing: false,
      },
      {
        accessorKey: "titulo",
        header: "Título",
        size: 150,
        enableResizing: false,
      },
      {
        accessorKey: "cumplimiento",
        header: "Cumplimiento",
        size: 100,
        enableResizing: false,
      },
      {
        accessorKey: "fundamentoLegal",
        header: "Fundamento Legal",
        size: 270,
        enableResizing: false,
      },
      {
        accessorKey: "actualizacion",
        header: "Actualización",
        size: 100,
        enableResizing: false,
      },
      {
        id: "exccel",
        header: "Excel",
        columnDefType: "display",
        size: 80,
        enableResizing: false,
        Cell: ({ row }) =>
          row.original.excel === "" ? (
            <span></span>
          ) : (
            <a href={row.original.excel} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFileExcel} className="btn btn-success" />
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
        Tlaxcala.
      </div>
      <h5 className="mt-3 Transparencia__title">
        Artículo 94. (2021) Obligaciones Comunes
      </h5>
      <MaterialReactTable
        columns={columns}
        data={dataArt942021}
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
  );
};

export default Art942021;
