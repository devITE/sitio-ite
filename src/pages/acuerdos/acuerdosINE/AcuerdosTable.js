import React, { useMemo, useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Expandible from "../../../layout/HelperDataTable/Expandible";

const PdfLink = ({ url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
  </a>
);

const TableRow = ({ title, url }) =>
  title && url ? (
    <tr>
      <td>{title.toUpperCase()}</td>
      <td>
        <PdfLink url={url} />
      </td>
    </tr>
  ) : null;

const AcuerdosTable = ({ data, year }) => {
  useEffect(() => {
    document.title = `Acuerdos INE ${year}`;
  }, [year]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "idDoc",
        header: "ID",
        footer: "ID",
      },
      {
        accessorKey: "numDoc",
        header: "DOCUMENTO",
        footer: "DOCUMENTO",
      },
      {
        accessorKey: "nameDoc",
        header: "DESCRIPCIÓN",
        footer: "DESCRIPCIÓN",
      },
      {
        id: "pdf",
        header: "",
        footer: "",
        enableColumnFilters: false,
        Cell: ({ row }) =>
          row.original.link === "" ? (
            <span></span>
          ) : (
            <a href={row.original.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
            </a>
          ),
      },
    ],
    []
  );

  const renderDetailPanelAcuerdos = ({ row }) => (
    <Box id="Box">
      <div className="table-responsive">
        <table className="table table-hover table-sm table-bordered table align-middle w-40">
          <thead>
            <tr>
              <td colSpan={2}>
                <br />
                <strong>A C U E R D O</strong>
                <br />
                <br />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="table-secondary">
              <td>
                {row.original.numDoc} {row.original.nameDoc || ""}
              </td>
              <td>
                {row.original.link && <PdfLink url={row.original.link} />}
              </td>
            </tr>
            {[...Array(70)].map((_, i) => {
              const index = i + 1;
              return (
                <TableRow
                  key={index}
                  title={row.original[`titleAnexo${index}`]}
                  url={row.original[`pdfAnexo${index}`]}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </Box>
  );

  const tableAcuerdos = useMaterialReactTable({
    columns,
    data: data,
    enableExpanding: true,
    enableExpandAll: true,
    enableSorting: false,
    enableHiding: false,
    enableColumnActions: false,
    enableDensityToggle: false,
    initialState: { density: "compact" },
    muiExpandButtonProps: ({ row }) => ({
      sx: {
        display: row.original.subRows === "" ? "none" : "flex",
      },
    }),
    renderDetailPanel: renderDetailPanelAcuerdos,
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
      <TitlePages title="Acuerdos INE" subTitle={`Acuerdos INE ${year}`} />
      <Expandible />
      <MaterialReactTable table={tableAcuerdos} />
    </>
  );
};

export default AcuerdosTable;
