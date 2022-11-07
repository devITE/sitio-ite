import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { dataArt672022 } from "../../../assets/data/dataTransparenciaArt67";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import "../Transparencia.css";

const Transparencia_imppath = require.context("../../../assets/img/imgT");

const Art672022 = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "NO.",
        footer: "NO.",
        size: 45,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "letra",
        header: "Letra",
        footer: "Letra",
        size: 45,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "descriptivo",
        header: "Descriptivo",
        footer: "Descriptivo",
        size: 170,
        enableResizing: false,
      },
      {
        accessorKey: "cumplimiento",
        header: "Cumplimiento",
        footer: "Cumplimiento",
        size: 90,
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
        size: 280,
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
      {
        id: "exccel",
        header: "Excel",
        footer: "Excel",
        columnDefType: "display",
        size: 80,
        enableResizing: false,
        enableColumnFilter: false,
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
        Artículo 67. (2022) Obligaciones Comunes
      </h5>
      <MaterialReactTable
        columns={columns}
        data={dataArt672022}
        enableExpanding
        enableExpandAll
        enableColumnActions={false}
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

export default Art672022;
