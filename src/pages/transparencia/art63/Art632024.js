import React, { useMemo, useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataArt632024 } from "../../../data/2024/dataArt63";
import Expandible from "../../../layout/HelperDataTable/Expandible";

const baseUrlPDF = "https://itetlax.org.mx/assets/pdf/transparencia/art63/";
const baseUrlExcel = "https://itetlax.org.mx/assets/excel/transparencia/art63/";

const ExcelLink = ({ baseUrl, urls }) => {
  return urls.map((url, index) => {
    const fullUrl = `${baseUrl}2024/${url}`;
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

const PdfLink = ({ baseUrl, urls }) => {
  return urls.map((url, index) => {
    const fullUrl = `${baseUrl}2024/${url}`;
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

const Art632024 = () => {
  useEffect(() => {
    document.title = `Artículo 63 2024`;
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "fraccion",
        header: "Fracción",
        footer: "Fracción",
        size: 90,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "titulo",
        header: "Título",
        footer: "Título",
        size: 150,
        enableResizing: false,
      },
      {
        accessorKey: "cumplimiento",
        header: "Cumplimiento",
        footer: "Cumplimiento",
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
        footer: "Fundamento Legal",
        size: 270,
        enableResizing: false,
        enableColumnFilter: false,
        Cell: ({ row }) =>
          `Artículo 63 de la Fracción ${row.original.fraccion} de la Ley de Transparencia y Acceso a la Información del Estado de Tlaxcala`,
      },
      {
        accessorKey: "actualizacion",
        header: "Actualización",
        footer: "Actualización",
        size: 100,
        enableResizing: false,
        enableColumnFilter: false,
        Cell: () => `2024`,
      },
    ],
    []
  );

  const rootData = useMemo(
    () => dataArt632024.filter((r) => !r.managerId),
    [dataArt632024]
  );

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
              <ExcelLink baseUrl={baseUrlExcel} urls={excels} />
            </>
          )}
          {pdfs.length > 0 && (
            <>
              <p className="text-strong">
                Descarga los archivos de la Fracción {fraccion}
              </p>
              <PdfLink baseUrl={baseUrlPDF} urls={pdfs} />
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
    getSubRows: (row) => dataArt632024.filter((r) => r.managerId === row.id),
    renderDetailPanel: renderTransparencia,
  });

  return (
    <>
      <TitlePages
        title="Transparencia"
        subTitle="Artículo 63. (2024) Obligaciones Comunes"
      />
      <Expandible />
      <MaterialReactTable table={table} />
    </>
  );
};

export default Art632024;
