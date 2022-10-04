import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { dataAcuerdos2009 } from "../../../assets/data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import top2009 from "../../../img/imgA/h_2009.png";

const Acuerdos2009 = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "numAcuerdo",
        header: "ACUERDO",
        footer: "ACUERDO",
        size: 80,
        enableResizing: false,
      },
      {
        accessorKey: "dateAcuerdo",
        header: "FECHA",
        footer: "FECHA",
        size: 80,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "nameAcuerdo",
        header: "TÍTULO",
        footer: "TÍTULO",
        size: 250,
        enableResizing: false,
      },
      {
        id: "pdf",
        header: "",
        footer: "",
        size: 50,
        enableResizing: false,
        enableColumnFilters: false,
        Cell: ({ row }) =>
          row.original.link === "" ? (
            <span></span>
          ) : (
            <a href={row.original.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
            </a>
          ),
      },
    ],
    []
  );

  return (
    <div>
      <img src={top2009} alt="Acuerdos 2009" className="img-fluid w-100 mb-3" />
      <MaterialReactTable
        columns={columns}
        data={dataAcuerdos2009}
        enableExpanding
        enableExpandAll={false}
        enableColumnActions={false}
        enableColumnResizing
        enableDensityToggle={false}
        initialState={{ density: "compact" }}
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
          rowsPerPageOptions: [10, 25, 50, 100],
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
    </div>
  );
};
export default Acuerdos2009;
