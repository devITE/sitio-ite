import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import {
  dataAcuerdos2001,
  dataAA12001,
  dataAA22001,
} from "../../../assets/data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
// import top2001 from "../../../img/imgA/h_2001.png";
// import top2001_AA from "../../../img/imgA/h_2001_AA.png";

const Acuerdos__imgpath = require.context("../../../img/imgA");

const Acuerdos2001 = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "dateAcuerdo",
        header: "FECHA",
        footer: "FECHA",
        size: 60,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "nameAcuerdo",
        header: "TÍTULO",
        footer: "TÍTULO",
        size: 320,
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

  const columnsAA1 = useMemo(
    () => [
      {
        accessorKey: "nameMunicipio",
        header: "MUNICIPIO",
        size: 380,
        enableResizing: false,
      },
      {
        id: "pdf",
        header: "",
        size: 50,
        enableResizing: false,
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

  const columnsAA2 = useMemo(
    () => [
      {
        accessorKey: "dateAcuerdo",
        header: "FECHA",
        size: 60,
        enableResizing: false,
      },
      {
        accessorKey: "nameAcuerdo",
        header: "TÍTULO",
        size: 320,
        enableResizing: false,
      },
      {
        id: "pdf",
        header: "",
        size: 50,
        enableResizing: false,
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
    <div className="mb-3">
      <img
        src={Acuerdos__imgpath(`./h_2001.png`)}
        alt="Acuerdos 2001"
        className="img-fluid w-100 mb-3"
      />
      <MaterialReactTable
        columns={columns}
        data={dataAcuerdos2001}
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
          rowsPerPageOptions: [10, 25, 50],
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
      <img
        src={Acuerdos__imgpath(`./h_2001_AA1.png`)}
        alt="Ayuntamientos 10-NOV-2001"
        className="img-fluid w-100 mt-5 mb-4"
      />
      <MaterialReactTable
        columns={columnsAA1}
        data={dataAA12001}
        enableTopToolbar={false}
        enableBottomToolbar={false}
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
      />

      <img
        src={Acuerdos__imgpath(`./h_2001_AA2.png`)}
        alt="Ayuntamientos 10-NOV-2001"
        className="img-fluid w-100 mt-5 mb-4"
      />
      <MaterialReactTable
        columns={columnsAA2}
        data={dataAA22001}
        enableTopToolbar={false}
        enableBottomToolbar={false}
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
      />
    </div>
  );
};
export default Acuerdos2001;
