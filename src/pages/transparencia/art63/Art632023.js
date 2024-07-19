import React, { useMemo, useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { dataArt632023 } from "../../../data/dataTransparenciaArt63";
import Expandible from "../../../layout/HelperDataTable/Expandible";

const Art632023 = () => {
  useEffect(() => {
    document.title = `Artículo 63 2023`;
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

  const getExcelFileLinks = (files) => {
    return files.map((file, index) =>
      file ? (
        <p key={index}>
          {file.substring(61, 100).slice(0, -5)}{" "}
          <a href={file} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFileExcel} className="btn btn-success" />
          </a>
        </p>
      ) : null
    );
  };

  const renderTransparencia = ({ row }) => {
    const files = [
      row.original.excel1,
      row.original.excel2,
      row.original.excel3,
      row.original.excel4,
    ].filter(Boolean);

    if (files.length === 0) {
      return <span></span>;
    }

    const fraccion = files[0].substring(72, 100).slice(0, -7);

    return (
      <Box id="Box">
        <p className="text-strong">
          Descarga {files.length > 1 ? "los archivos" : "el archivo"} de la
          Fracción {fraccion}
        </p>
        {getExcelFileLinks(files)}
      </Box>
    );
  };

  const table = useMaterialReactTable({
    columns,
    data: dataArt632023,
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
        subTitle="Artículo 63. (2023) Obligaciones Comunes"
      />
      <Expandible />
      <MaterialReactTable table={table} />
    </>
  );
};

export default Art632023;
