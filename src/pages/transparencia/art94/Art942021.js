import React, { useMemo } from "react";
import TitlePages from "../../../layout/TitlePages";
import MaterialReactTable from "material-react-table";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataArt942021 } from "../../../data/dataTransparenciaArt94";

const Art942021 = () => {
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
        accessorKey: "fraccion",
        header: "Fracción",
        size: 90,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "titulo",
        header: "Título",
        size: 150,
        enableResizing: false,
      },
      {
        accessorKey: "cumplimiento",
        header: "Cumplimiento",
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
      },
    ],
    []
  );

  return (
    <>
      <TitlePages title="Transparencia" subTitle="Artículo 94. (2021)" />
      <MaterialReactTable
        columns={columns}
        data={dataArt942021}
        enableExpanding
        enableExpandAll
        enableTopToolbar={false}
        enableBottomToolbar={false}
        enableColumnActions={false}
        enableColumnResizing
        enableDensityToggle={false}
        muiExpandButtonProps={({ row }) => ({
          sx: {
            display: row.original.subRows === "" ? "none" : "flex",
          },
        })}
        renderDetailPanel={({ row }) =>
          (row.original.excel === "") & (row.original.pdf === "") ? (
            <span></span>
          ) : (
            <Box id="Box">
              <>
                <p className="text-strong">
                  Descarga el archivo de la Fracción:
                </p>
                <p>
                  {row.original.excel
                    ? row.original.excel.substring(14, 100).slice(0, -26)
                    : []}{" "}
                  <a href={row.original.excel} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faFileExcel}
                      className="btn btn-success"
                    />
                  </a>
                </p>
                <p>
                  {row.original.pdf
                    ? row.original.pdf.substring(14, 100).slice(0, -26)
                    : []}{" "}
                  <a href={row.original.pdf} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      className="btn btn-danger"
                    />
                  </a>
                </p>
              </>
            </Box>
          )
        }
      />
    </>
  );
};

export default Art942021;
