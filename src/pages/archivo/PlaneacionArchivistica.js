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
import { dataPlaneacion } from "../../data/2024/dataArchivo";

const InstrumentosNormativos = () => {
  useEffect(() => {
    document.title = `Planeación Archivística`;
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
    ],
    []
  );

  const renderPlaneacion = ({ row }) => (
    <Box id="Box">
      {!row.original.pdf ? (
        <span></span>
      ) : (
        <div className="">
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
      )}

      {!row.original.word ? (
        <span></span>
      ) : (
        <div className="">
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
      )}
    </Box>
  );

  const table = useMaterialReactTable({
    columns,
    data: dataPlaneacion,
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
    renderDetailPanel: renderPlaneacion,
  });

  return (
    <>
      <TitlePages title="Archivo" subTitle="Planeación Archivística" />
      <MaterialReactTable table={table} />
    </>
  );
};
export default InstrumentosNormativos;
