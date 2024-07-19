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
import { dataArt632019 } from "../../../data/dataTransparenciaArt63";
import Expandible from "../../../layout/HelperDataTable/Expandible";

const FileLink = ({ url, type }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <FontAwesomeIcon
      icon={type === "excel" ? faFileExcel : faFilePdf}
      className={`btn btn-${type === "excel" ? "success" : "danger"}`}
    />
  </a>
);

const renderFileLinks = (fileUrls) =>
  fileUrls.map(({ url, type }, index) => (
    <div className="col-md-6" key={index}>
      {url ? url.substring(61, 100).slice(0, -(type === "excel" ? 5 : 4)) : []}{" "}
      <FileLink url={url} type={type} />
    </div>
  ));

const Art632019 = () => {
  useEffect(() => {
    document.title = `Artículo 63 2019`;
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

  const renderTransparencia = ({ row }) => {
    const fileTypes = [
      "excel1",
      "excel2",
      "excel3",
      "excel4",
      "excel5",
      "excel6",
    ]
      .map((type, index) => ({ url: row.original[type], type: "excel" }))
      .concat(
        ["pdf1", "pdf2", "pdf3", "pdf4", "pdf5", "pdf6"].map((type, index) => ({
          url: row.original[type],
          type: "pdf",
        }))
      );

    const filesToShow = fileTypes.filter((file) => file.url !== "");

    if (filesToShow.length === 0) return <span></span>;

    return (
      <Box id="Box">
        <p className="text-strong">
          Descarga los archivos de la Fracción {row.original.fraccion}
        </p>
        <div className="row">{renderFileLinks(filesToShow)}</div>
      </Box>
    );
  };

  const table = useMaterialReactTable({
    columns,
    data: dataArt632019,
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
    renderDetailPanel: renderTransparencia,
  });

  return (
    <div>
      <TitlePages
        title="Transparencia"
        subTitle="Artículo 63. (2019) Obligaciones Comunes"
      />
      <Expandible />
      <MaterialReactTable table={table} />
    </div>
  );
};

export default Art632019;
