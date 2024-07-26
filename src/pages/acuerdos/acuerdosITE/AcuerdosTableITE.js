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
import { dataAcuerdosITE } from "../../../data/dataAcuerdos";
import Expandible from "../../../layout/HelperDataTable/Expandible";

const baseUrl = "https://itetlax.org.mx/assets/pdf/acuerdos/ITE/";

const PdfLink = ({ baseUrl, year, url }) => {
  const fullUrl = `${baseUrl}${year}/${url}`;
  return (
    <a href={fullUrl} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
    </a>
  );
};

const TableRow = ({ baseUrl, year, title, url }) => {
  if (title && url) {
    console.log(`Title: ${title.toUpperCase()}, URL: ${url}`);
  }

  return title && url ? (
    <tr>
      <td>{title.toUpperCase()}</td>
      <td>
        <PdfLink baseUrl={baseUrl} year={year} url={url} />
      </td>
    </tr>
  ) : null;
};

const AcuerdosTableITE = ({ year }) => {
  const data = useMemo(() => dataAcuerdosITE[year] || [], [year]);

  useEffect(() => {
    document.title = `Acuerdos ITE ${year}`;
  }, [year]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "monthDoc",
        header: "MES",
        footer: "MES",
        size: 30,
      },
      {
        accessorKey: "numDoc",
        header: "ACUERDO",
        footer: "ACUERDO",
        size: 55,
      },
      {
        accessorFn: (row) =>
          row.nameDoc ? `${row.typeDoc} ${row.nameDoc}` : "",
        id: "titulo",
        header: "TÍTULO",
        footer: "TÍTULO",
        size: 255,
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
                {row.original.typeDoc} {row.original.numDoc}{" "}
                {row.original.nameDoc || ""}
              </td>
              <td>
                {row.original.link && (
                  <PdfLink
                    baseUrl={baseUrl}
                    year={year}
                    url={row.original.link + ".pdf"}
                  />
                )}
              </td>
            </tr>
            {[...Array(70)].map((_, i) => {
              const index = i + 1;
              return (
                <TableRow
                  key={index}
                  baseUrl={baseUrl}
                  year={year}
                  title={row.original[`titleAnexo${index}`]}
                  url={row.original.link + [`.${index}.pdf`]}
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
      <TitlePages title="Acuerdos ITE" subTitle={`Acuerdos ITE ${year}`} />
      <Expandible />
      <MaterialReactTable table={tableAcuerdos} />
    </>
  );
};

export default AcuerdosTableITE;