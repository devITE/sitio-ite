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
import { dataArt67 } from "../../../data/dataTransparenciaArt67";

const baseUrlPDF = "https://itetlax.org.mx/assets/pdf/transparencia/art94/";
const baseUrlExcel = "https://itetlax.org.mx/assets/excel/transparencia/art94/";

const ExcelLink = ({ baseUrl, year, urls }) => {
  return urls.map((url, index) => {
    const fullUrl = `${baseUrl}${year}/${url}`;
    const displayText = url.substring(0, url.lastIndexOf("."));
    return (
      <p key={index}>
        {displayText}
        <a href={fullUrl} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFileExcel} className="btn btn-success" />
        </a>
      </p>
    );
  });
};

const PdfLink = ({ baseUrl, year, urls }) => {
  return urls.map((url, index) => {
    const fullUrl = `${baseUrl}${year}/${url}`;
    const displayText = url.substring(0, url.lastIndexOf("."));
    return (
      <p key={index}>
        {displayText}
        <a href={fullUrl} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
        </a>
      </p>
    );
  });
};

const Art67Table = ({ year }) => {
  const data = useMemo(() => dataArt67[year] || [], [year]);

  useEffect(() => {
    document.title = `Artículo 67 ${year}`;
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
        accessorKey: "letra",
        header: "Letra",
        size: 90,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "descriptivo",
        header: "Descriptivo",
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
        enableColumnFilter: false,
      },
      {
        accessorKey: "actualizacion",
        header: "Actualización",
        size: 100,
        enableResizing: false,
        enableColumnFilter: false,
        Cell: () => year,
      },
    ],
    [year]
  );

  const rootData = useMemo(() => data.filter((r) => !r.managerId), [data]);

  const renderTransparencia = ({ row }) => {
    const { managerId, fraccion, ...rest } = row.original;
    const excels = Object.keys(rest)
      .filter((key) => key.startsWith("excel"))
      .map((key) => rest[key]);
    const pdfs = Object.keys(rest)
      .filter((key) => key.startsWith("pdf"))
      .map((key) => rest[key]);

    if (excels.length > 0 || pdfs.length > 0) {
      return (
        <Box id="Box">
          {excels.length > 0 && (
            <>
              <p className="text-strong">
                Descarga los archivos de la Fracción {fraccion}
              </p>
              <ExcelLink baseUrl={baseUrlExcel} year={year} urls={excels} />
            </>
          )}
          {pdfs.length > 0 && (
            <>
              <p className="text-strong">
                Descarga los archivos de la Fracción {fraccion}
              </p>
              <PdfLink baseUrl={baseUrlPDF} year={year} urls={pdfs} />
            </>
          )}
        </Box>
      );
    }
    return null;
  };

  const table = useMaterialReactTable({
    columns,
    data: rootData,
    enableExpanding: true,
    enableExpandAll: true,
    enableColumnActions: false,
    enableColumnResizing: true,
    enableDensityToggle: false,
    muiPaginationProps: {
      rowsPerPageOptions: [10, 25, 50, 100, 200, 300, 400],
    },
    localization: {
      ...MRT_Localization_ES,
      pagination: {
        rowsPerPage: "Filas por página",
      },
    },
    getSubRows: (row) => data.filter((r) => r.managerId === row.id),
    renderDetailPanel: renderTransparencia,
  });

  return (
    <>
      <TitlePages title="Transparencia" subTitle={`Artículo 67 (${year})`} />
      <MaterialReactTable table={table} />
    </>
  );
};

export default Art67Table;