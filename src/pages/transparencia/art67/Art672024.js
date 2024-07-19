import React, { useEffect, useMemo } from "react";
import TitlePages from "../../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { dataArt672024 } from "../../../data/2024/dataArt67";
import Expandible from "../../../layout/HelperDataTable/Expandible";

const FileDownload = ({ file }) =>
  file ? (
    <p>
      {file.substring(61, 100).slice(0, -5)}{" "}
      <a href={file} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFileExcel} className="btn btn-success" />
      </a>
    </p>
  ) : null;

const renderTransparencia = ({ row }) => {
  const { excel1, excel2, excel3, excel4, letra } = row.original;
  const files = [excel1, excel2, excel3, excel4];

  if (files.every((file) => file === "")) return <span></span>;

  return (
    <Box id="Box">
      <p className="text-strong">
        {files.filter((file) => file !== "").length === 1
          ? `Descarga los archivo de la Fracción ${letra}`
          : `Descarga los archivos de las Fracciones:`}
      </p>
      {files.map((file) => (
        <FileDownload key={file} file={file} />
      ))}
    </Box>
  );
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
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: dataArt672024,
    enableExpanding: true,
    enableExpandAll: true,
    enableColumnActions: false,
    enableColumnResizing: true,
    enableDensityToggle: false,
    muiExpandButtonProps: ({ row }) => ({
      sx: {
        display: row.original.subRows === "" ? "none" : "flex",
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
      <TitlePages
        title="Transparencia"
        subTitle="Artículo 67. (2024) Obligaciones Específicas"
      />
      <Expandible />
      <MaterialReactTable table={table} />
    </>
  );
};

export default Art672024;
