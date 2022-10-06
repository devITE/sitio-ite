import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { MenuItem, TextField } from "@mui/material";
import { dataAcuerdos2016 } from "../../../assets/data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import top2016 from "../../../img/imgA/h_2016.png";

const Acuerdos2016 = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "monthAcuerdo",
        header: "MES",
        footer: "MES",
        size: 30,
        enableResizing: false,
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
            <MenuItem value="NOV">Nov</MenuItem>
            <MenuItem value="DIC">Diciembre</MenuItem>
          </TextField>
        ),
        //   filterFn: (row, _columnIds, filterValue) =>
        //     row.getValue.('gender').toLowerCase() ===
        //     filterValue.toLowerCase(),
      },
      {
        accessorKey: "numAcuerdo",
        header: "ACUERDO",
        footer: "ACUERDO",
        size: 60,
        enableResizing: false,
      },
      {
        accessorKey: "dateAcuerdo",
        header: "FECHA",
        footer: "FECHA",
        size: 70,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "nameAcuerdo",
        header: "TÍTULO",
        footer: "TÍTULO",
        size: 270,
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
      <img src={top2016} alt="Acuerdos 2016" className="img-fluid w-100 mb-3" />
      <MaterialReactTable
        columns={columns}
        data={dataAcuerdos2016}
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
    </div>
  );
};
export default Acuerdos2016;
