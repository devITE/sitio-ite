import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { MenuItem, TextField } from "@mui/material";
import {dataMonitoreos2016} from "../../../assets/data/dataMonitoreos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import imagenes from "../../../img/imgcomunicacion/Comunicacion.jpg";

const Monitoreos2016 = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "NO.",
        footer: "NO.",
        size: 55,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "monthBoletin",
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
            <MenuItem value="NOV">Noviembre</MenuItem>
            <MenuItem value="DIC">Diciembre</MenuItem>
          </TextField>
        ),
      },
      {
        accessorKey: "nameBoletin",
        header: "Boletín.",
        footer: "Boletín.",
        size: 150,
        enableResizing: false,
      },
      {
        id: "pdf",
        header: "",
        footer: "",
        size: 80,
        enableResizing: false,
        enableColumnFilters: false,
        Cell: ({ row }) =>
          row.original.linkBoletin === "" ? (
            <span></span>
          ) : (
            <a href={row.original.linkBoletin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
            </a>
          ),
      },
    ],
    []
  );
  return (
    <div>
      <img
          src={imagenes}
          className="img-fluid w-100"
          alt="Comunicacion Social"
        />
        <hr className="borde" />
        <h2 className="text-center estilos-cintillo">Monitoreos 2016</h2>
      <MaterialReactTable
        columns={columns}
        data={dataMonitoreos2016}
        enableExpanding={false}
        // enableExpandAll
        enableColumnActions={false}
        // enableColumnFilters={false}
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
export default Monitoreos2016;
