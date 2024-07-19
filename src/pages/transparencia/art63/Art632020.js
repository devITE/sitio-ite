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
import { dataArt632020 } from "../../../data/dataTransparenciaArt63";
import Expandible from "../../../layout/HelperDataTable/Expandible";

const Art632020 = () => {
  useEffect(() => {
    document.title = `Artículo 63 2020`;
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

  const renderTransparencia = ({ row }) =>
    (row.original.excel === "") & (row.original.pdf === "") ? (
      <span></span>
    ) : (
      <Box id="Box">
        <>
          <p className="text-strong">
            Descarga los archivo de la Fracción {row.original.fraccion}
          </p>
          <div className="row">
            <div className="col-md-6">
              {row.original.excel
                ? row.original.excel.substring(61, 100).slice(0, -5)
                : []}{" "}
              <a href={row.original.excel} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faFileExcel}
                  className="btn btn-success"
                />
              </a>
            </div>
            <div className="col-md-6">
              {row.original.pdf
                ? row.original.pdf.substring(59, 100).slice(0, -4)
                : []}{" "}
              <a href={row.original.pdf} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
              </a>
            </div>
          </div>
        </>
      </Box>
    );

  const table = useMaterialReactTable({
    columns,
    data: dataArt632020,
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
    muiPaginationProps: {
      rowsPerPageOptions: [10, 25, 50, 100, 200, 300, 400],
    },
    localization: {
      ...MRT_Localization_ES,
      pagination: {
        rowsPerPage: "Filas por página",
      },
    },
  });

  return (
    <>
      <TitlePages
        title="Transparencia"
        subTitle="Artículo 63. (2020) Obligaciones Comunes"
      />
      <Expandible />
      <MaterialReactTable table={table} />
    </>
  );
};

export default Art632020;
