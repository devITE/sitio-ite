import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { MenuItem, TextField } from "@mui/material";
import {
  dataAcuerdos2002,
  dataAA2002,
} from "../../../assets/data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import top2002 from "../../../img/imgA/h_2002.png";
import top2002_AA from "../../../img/imgA/h_2002_AA.png";

const Acuerdos2002 = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "monthDoc",
        header: "MES",
        footer: "MES",
        // size: 30,
        // enableResizing: false,
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
      // {
      //   accessorKey: "numDoc",
      //   header: "ACUERDO",
      //   footer: "ACUERDO",
      //   size: 60,
      //   enableResizing: false,
      // },
      {
        accessorKey: "dateDoc",
        header: "FECHA",
        footer: "FECHA",
        // size: 70,
        // enableResizing: false,
        enableColumnFilter: false,
      },
      // {
      //   accessorKey: "nameAcuerdo",
      //   header: "TÍTULO",
      //   footer: "TÍTULO",
      //   size: 270,
      //   enableResizing: false,
      // },
      {
        accessorFn: (row) => `${row.typeDoc} ${row.nameDoc}`,
        id: "titulo",
        header: "TÍTULO",
        footer: "TÍTULO",
        // size: 380,
        // enableResizing: false,
      },
      {
        id: "pdf",
        header: "",
        footer: "",
        // size: 50,
        // enableResizing: false,
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

  const columnsAA = useMemo(
    () => [
      {
        accessorKey: "monthDoc",
        header: "MES",
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
        accessorKey: "dateDoc",
        header: "FECHA",
        enableColumnFilter: false,
      },
      {
        accessorFn: (row) => `${row.typeDoc} ${row.nameDoc}`,
        id: "titulo",
        header: "TÍTULO",
      },
      {
        id: "pdf",
        header: "",
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
    <div className="mb-3">
      <img src={top2002} alt="Acuerdos 2002" className="img-fluid w-100 mb-3" />
      <MaterialReactTable
        columns={columns}
        data={dataAcuerdos2002}
        enableExpanding
        enableExpandAll={false}
        enableColumnActions={false}
        enableDensityToggle={false}
        initialState={{ density: "compact" }}
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: "#972069",
            color: "#fff",
          },
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
        src={top2002_AA}
        alt="Acuerdos Aprobados 2002"
        className="img-fluid w-100 mt-5 mb-4"
      />
      <MaterialReactTable
        columns={columnsAA}
        data={dataAA2002}
        enablePagination={false}
        enableTopToolbar={false}
        enableColumnActions={false}
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
export default Acuerdos2002;
