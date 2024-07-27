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
import { dataArt672024 } from "../../../data/2024/dataArt67";
import Expandible from "../../../layout/HelperDataTable/Expandible";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const baseUrlPDF = "https://itetlax.org.mx/assets/pdf/transparencia/art67/";
const baseUrlExcel = "https://itetlax.org.mx/assets/excel/transparencia/art67/";

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

const Art672024 = () => {
  useEffect(() => {
    document.title = `Artículo 67 2024`;
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "NO.",
        footer: "NO.",
        size: 55,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "letra",
        header: "Letra",
        footer: "Letra",
        size: 90,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "descriptivo",
        header: "Descriptivo",
        footer: "Descriptivo",
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

  const rootData = useMemo(() => dataArt672024.filter((r) => !r.managerId), []);

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
    getSubRows: (row) => dataArt672024.filter((r) => r.managerId === row.id),
    renderDetailPanel: renderTransparencia,
  });

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Transparencia", url: "/Transparencia" },
          { label: "Artículo 67 Obligaciones Específicas", url: "/Articulo67" },
          { label: `Artículo 67 2024` },
        ]}
      />
      <TitlePages title="Transparencia" subTitle="Artículo 67. (2024)" />
      <Expandible />
      <MaterialReactTable table={table} />
    </>
  );
};

export default Art672024;
