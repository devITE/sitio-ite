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
import { dataArt672019 } from "../../../data/dataTransparenciaArt67";
import Expandible from "../../../layout/HelperDataTable/Expandible";

const Art672019 = () => {
  useEffect(() => {
    document.title = `Artículo 67 2019`;
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

  const renderTransparencia = ({ row }) =>
    (row.original.excel1 === "") &
    (row.original.excel2 === "") &
    (row.original.excel3 === "") &
    (row.original.excel4 === "") &
    (row.original.pdf1 === "") &
    (row.original.pdf2 === "") &
    (row.original.pdf3 === "") &
    (row.original.pdf4 === "") ? (
      <span></span>
    ) : (
      <Box id="Box">
        <p className="text-strong">
          Descarga los archivo de la Fracción {row.original.letra}
        </p>
        {(row.original.excel1 !== "") &
        (row.original.excel2 === "") &
        (row.original.excel3 === "") &
        (row.original.excel4 === "") &
        (row.original.pdf1 !== "") &
        (row.original.pdf2 === "") &
        (row.original.pdf3 === "") &
        (row.original.pdf4 === "") ? (
          <div className="row">
            <div className="col-md-6">
              {row.original.excel1
                ? row.original.excel1.substring(61, 100).slice(0, -5)
                : []}{" "}
              <a href={row.original.excel1} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faFileExcel}
                  className="btn btn-success"
                />
              </a>
            </div>
            <div className="col-md-6">
              {row.original.pdf1
                ? row.original.pdf1.substring(59, 100).slice(0, -4)
                : []}{" "}
              <a href={row.original.pdf1} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
              </a>
            </div>
          </div>
        ) : (row.original.excel1 !== "") &
          (row.original.excel2 !== "") &
          (row.original.excel3 === "") &
          (row.original.excel4 === "") &
          (row.original.pdf1 !== "") &
          (row.original.pdf2 !== "") &
          (row.original.pdf3 === "") &
          (row.original.pdf4 === "") ? (
          <>
            <div className="row">
              <div className="col-md-6">
                {row.original.excel1
                  ? row.original.excel1.substring(61, 100).slice(0, -5)
                  : []}{" "}
                <a href={row.original.excel1} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFileExcel}
                    className="btn btn-success"
                  />
                </a>
              </div>
              <div className="col-md-6">
                {row.original.pdf1
                  ? row.original.pdf1.substring(59, 100).slice(0, -4)
                  : []}{" "}
                <a href={row.original.pdf1} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="btn btn-danger"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {row.original.excel2
                  ? row.original.excel2.substring(61, 100).slice(0, -5)
                  : []}{" "}
                <a href={row.original.excel2} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFileExcel}
                    className="btn btn-success"
                  />
                </a>
              </div>
              <div className="col-md-6">
                {row.original.pdf2
                  ? row.original.pdf2.substring(59, 100).slice(0, -4)
                  : []}{" "}
                <a href={row.original.pdf2} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="btn btn-danger"
                  />
                </a>
              </div>
            </div>
          </>
        ) : (row.original.excel1 !== "") &
          (row.original.excel2 !== "") &
          (row.original.excel3 !== "") &
          (row.original.excel4 === "") &
          (row.original.pdf1 !== "") &
          (row.original.pdf2 !== "") &
          (row.original.pdf3 !== "") &
          (row.original.pdf4 === "") ? (
          <>
            <div className="row">
              <div className="col-md-6">
                {row.original.excel1
                  ? row.original.excel1.substring(61, 100).slice(0, -5)
                  : []}{" "}
                <a href={row.original.excel1} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFileExcel}
                    className="btn btn-success"
                  />
                </a>
              </div>
              <div className="col-md-6">
                {row.original.pdf1
                  ? row.original.pdf1.substring(59, 100).slice(0, -4)
                  : []}{" "}
                <a href={row.original.pdf1} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="btn btn-danger"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {row.original.excel2
                  ? row.original.excel2.substring(61, 100).slice(0, -5)
                  : []}{" "}
                <a href={row.original.excel2} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFileExcel}
                    className="btn btn-success"
                  />
                </a>
              </div>
              <div className="col-md-6">
                {row.original.pdf2
                  ? row.original.pdf2.substring(59, 100).slice(0, -4)
                  : []}{" "}
                <a href={row.original.pdf2} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="btn btn-danger"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {row.original.excel3
                  ? row.original.excel3.substring(61, 100).slice(0, -5)
                  : []}{" "}
                <a href={row.original.excel3} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFileExcel}
                    className="btn btn-success"
                  />
                </a>
              </div>
              <div className="col-md-6">
                {row.original.pdf3
                  ? row.original.pdf3.substring(59, 100).slice(0, -4)
                  : []}{" "}
                <a href={row.original.pdf3} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="btn btn-danger"
                  />
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                {row.original.excel1
                  ? row.original.excel1.substring(61, 100).slice(0, -5)
                  : []}{" "}
                <a href={row.original.excel1} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFileExcel}
                    className="btn btn-success"
                  />
                </a>
              </div>
              <div className="col-md-6">
                {row.original.pdf1
                  ? row.original.pdf1.substring(59, 100).slice(0, -4)
                  : []}{" "}
                <a href={row.original.pdf1} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="btn btn-danger"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {row.original.excel2
                  ? row.original.excel2.substring(61, 100).slice(0, -5)
                  : []}{" "}
                <a href={row.original.excel2} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFileExcel}
                    className="btn btn-success"
                  />
                </a>
              </div>
              <div className="col-md-6">
                {row.original.pdf2
                  ? row.original.pdf2.substring(59, 100).slice(0, -4)
                  : []}{" "}
                <a href={row.original.pdf2} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="btn btn-danger"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {row.original.excel3
                  ? row.original.excel3.substring(61, 100).slice(0, -5)
                  : []}{" "}
                <a href={row.original.excel3} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFileExcel}
                    className="btn btn-success"
                  />
                </a>
              </div>
              <div className="col-md-6">
                {row.original.pdf3
                  ? row.original.pdf3.substring(59, 100).slice(0, -4)
                  : []}{" "}
                <a href={row.original.pdf3} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="btn btn-danger"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {row.original.excel4
                  ? row.original.excel4.substring(61, 100).slice(0, -5)
                  : []}{" "}
                <a href={row.original.excel4} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFileExcel}
                    className="btn btn-success"
                  />
                </a>
              </div>
              <div className="col-md-6">
                {row.original.pdf4
                  ? row.original.pdf4.substring(59, 100).slice(0, -4)
                  : []}{" "}
                <a href={row.original.pdf4} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="btn btn-danger"
                  />
                </a>
              </div>
            </div>
          </>
        )}
      </Box>
    );

  const table = useMaterialReactTable({
    columns,
    data: dataArt672019,
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
        subTitle="Artículo 67. (2019) Obligaciones Específicas"
      />
      <Expandible />
      <MaterialReactTable table={table} />
    </>
  );
};

export default Art672019;
