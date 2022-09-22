import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { esES } from "@mui/material/locale";
import "../Transparencia.css";
import { dataArt632017 } from "../../../assets/data/dataTransparencia";

const Transparencia_imppath = require.context("../../../img/imgT");

const Art632017 = () => {
  const columns = useMemo(
    () => [
      // {
      //   accessorKey: "name.firstName",
      //   header: "First Name",
      // },
      {
        accessorKey: "no",
        header: "No.",
        size: 80,
        enableResizing: false,
      },
      {
        accessorKey: "fraccion",
        header: "Fracción",
        size: 75,
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
        size: 110,
        enableResizing: false,
      },
      {
        accessorKey: "fundamentoLegal",
        header: "Fundamento Legal",
        size: 300,
        enableResizing: false,
      },
      {
        accessorKey: "actualizacion",
        header: "Actualización",
        size: 100,
        enableResizing: false,
      },
      {
        accessorKey: "excel",
        header: "Excel",
        size: 80,
        enableResizing: false,
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
        Artículo 63. (2022) Obligaciones Comunes
      </h5>
      <ThemeProvider theme={theme}>
        <MaterialReactTable
          columns={columns}
          data={dataArt632017}
          enableExpanding
          enableExpandAll
          enableColumnActions={false}
          enableColumnFilters={false}
          enableColumnResizing
          enableDensityToggle={false}
          // muiTablePaginationProps={{
          //   labelRowsPerPage: "Filas visibles",
          //   // labelDisplayedRows: "a",
          // }}
        />
      </ThemeProvider>
    </div>
  );
};

const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  esES
);

export default Art632017;
