import React, { useMemo, useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWord, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataInstrumentos } from "../../data/2024/dataArchivo";
import Breadcrumbs from "../../layout/Breadcrumbs";

const InstrumentosNormativos = () => {
  useEffect(() => {
    document.title = `Instrumentos Archivísticos`;
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "NO.",
        footer: "NO.",
      },
      {
        accessorKey: "nameDoc",
        header: "Normatividad",
        footer: "Normatividad",
      },
      {
        accessorKey: "post",
        header: "Publicada",
        footer: "Publicada",
      },
    ],
    []
  );

  const renderArchivos = ({ row }) =>
    (row.original.pdf === "") & (row.original.word === "") ? (
      <span></span>
    ) : (
      <Box id="Box">
        <div className="row">
          {(row.original.pdf !== "") & (row.original.word !== "") ? (
            <>
              <div className="col-md-4"></div>
              <div className="col-md-2">
                <span>PDF </span>
                <a
                  href={row.original.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                >
                  <FontAwesomeIcon icon={faFilePdf} />
                </a>
              </div>
              <div className="col-md-2">
                <span>Word </span>
                <a
                  href={row.original.word}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <FontAwesomeIcon icon={faFileWord} />
                </a>
              </div>
              <div className="col-md-4"></div>
            </>
          ) : (row.original.pdf !== "") & (row.original.word === "") ? (
            <>
              <div className="col-md-5"></div>
              <div className="col-md-2">
                <span>PDF </span>
                <a
                  href={row.original.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                >
                  <FontAwesomeIcon icon={faFilePdf} />
                </a>
              </div>
              <div className="col-md-5"></div>
            </>
          ) : (
            <>
              <div className="col-md-4"></div>
              <div className="col-md-2">
                <span>PDF </span>
                <a
                  href={row.original.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-danger"
                >
                  <FontAwesomeIcon icon={faFilePdf} />
                </a>
              </div>
              <div className="col-md-2">
                <span>Word </span>
                <a
                  href={row.original.word}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <FontAwesomeIcon icon={faFileWord} />
                </a>
              </div>
              <div className="col-md-4"></div>
            </>
          )}
        </div>
      </Box>
    );

  const table = useMaterialReactTable({
    columns,
    data: dataInstrumentos,
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
    renderDetailPanel: renderArchivos,
  });

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Instrumentos Archivísticos" },
        ]}
      />
      <TitlePages title="Archivo" subTitle="Instrumentos Archivísticos" />
      <MaterialReactTable table={table} />
    </>
  );
};
export default InstrumentosNormativos;
