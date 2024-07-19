import React, { useMemo, useEffect } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MenuItem, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataInformesPELO } from "../../data/2024/dataInformesPELO2324";

import "./EnlacesStyle.css";

const Encuestas = () => {
  useEffect(() => {
    document.title = `Encuestas y Sondeos de opinión en Materia Electoral del PELO 2023-2024`;
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "",
        size: 55,
        enableResizing: false,
      },
      {
        accessorKey: "year",
        header: "AÑO",
        size: 55,
        enableResizing: false,
      },
      {
        accessorKey: "monthDoc",
        header: "MES",
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
        accessorKey: "title",
        header: "TITULO",
        size: 55,
        enableResizing: false,
      },
      {
        id: "link",
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

  const table = useMaterialReactTable({
    columns,
    data: dataInformesPELO,
    enableExpanding: false,
    enableExpandAll: true,
    enableColumnActions: false,
    enableDensityToggle: false,
    enableColumnResizing: false,
    enableTopToolbar: false,
    enablePagination: false,
    initialState: { density: "compact" },
  });

  return (
    <>
      <NavbarEnlaces title="Encuestas y Sondeos de opinión en materia electoral del Proceso Local Ordinario 2023-2024" />

      <MaterialReactTable table={table} />
    </>
  );
};
export default Encuestas;
