import React, { useEffect, useMemo } from "react";
import TitlePages from "../../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataArt94 } from "../../../data/dataTransparenciaArt94";

const baseUrlPDF = "https://itetlax.org.mx/assets/pdf/transparencia/art94/";
const baseUrlExcel = "https://itetlax.org.mx/assets/excel/transparencia/art94/";

const ExcelLink = ({ baseUrl, year, url }) => {
  const fullUrl = `${baseUrl}${year}/${url}`;
  const displayText = url.substring(0, url.lastIndexOf("."));
  return (
    <p>
      {displayText}
      <a href={fullUrl} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFileExcel} className="btn btn-success" />
      </a>
    </p>
  );
};

const PdfLink = ({ baseUrl, year, url }) => {
  const fullUrl = `${baseUrl}${year}/${url}`;
  const displayText = url.substring(0, url.lastIndexOf("."));
  return (
    <p>
      {displayText}
      <a href={fullUrl} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
      </a>
    </p>
  );
};

const Art94Table = ({ year }) => {
  const data = useMemo(() => dataArt94[year] || [], [year]);

  useEffect(() => {
    document.title = `Artículo 94 ${year}`;
  }, [year]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "NO.",
        size: 55,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "fraccion",
        header: "Fracción",
        size: 90,
        enableResizing: false,
        enableColumnFilter: false,
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
        size: 270,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "actualizacion",
        header: "Actualización",
        size: 100,
        enableResizing: false,
        enableColumnFilter: false,
      },
    ],
    []
  );
  const renderTransparencia = ({ row }) => {
    const { excel, pdf, fraccion } = row.original;

    return (
      <Box id="Box">
        <p className="text-strong">
          Descarga los archivos de la Fracción {fraccion}
        </p>
        {excel && (
          <ExcelLink
            baseUrl={baseUrlExcel}
            year={row.original.actualizacion}
            url={excel}
          />
        )}
        {pdf && (
          <PdfLink
            baseUrl={baseUrlPDF}
            year={row.original.actualizacion}
            url={pdf}
          />
        )}
      </Box>
    );
  };

  const table = useMaterialReactTable({
    columns,
    data: data,
    enableExpanding: true,
    enableExpandAll: true,
    enableColumnActions: false,
    enableColumnResizing: true,
    enableDensityToggle: false,
    muiExpandButtonProps: ({ row }) => ({
      sx: {
        display:
          row.original.subRows && row.original.subRows.length === 0
            ? "none"
            : "flex",
      },
    }),
    muiPaginationProps: {
      rowsPerPageOptions: [10, 25, 50, 100, 200, 300, 400],
    },
    localization: {
      ...MRT_Localization_ES,
      pagination: {
        rowsPerPage: "Filas por página",
      },
    },
    renderDetailPanel: renderTransparencia,
  });

  return (
    <>
      <TitlePages title="Transparencia" subTitle={`Artículo 94 (${year})`} />
      <MaterialReactTable table={table} />
    </>
  );
};

export default Art94Table;
