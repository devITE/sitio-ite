import React, { useMemo, useEffect } from "react";
import PropTypes from "prop-types";
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
import Breadcrumbs from "../../../layout/Breadcrumbs";

const baseUrl = "https://itetlax.org.mx/assets/pdf/acuerdos/ITE/";

const PdfLink = ({ baseUrl, year, url }) => (
  <a href={`${baseUrl}${year}/${url}`} target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
  </a>
);

const TableRow = ({ baseUrl, year, title, url }) =>
  title && url ? (
    <tr>
      <td>{title.toUpperCase()}</td>
      <td>
        <PdfLink baseUrl={baseUrl} year={year} url={url} />
      </td>
    </tr>
  ) : null;

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
        accessorFn: (row) => `ITE-CG ${row.id}-${year}`,
        id: "acuerdo",
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
    [year]
  );

  const renderDetailPanelAcuerdos = ({ row }) => {
    const anexoTitles = Object.keys(row.original).filter(
      (key) => key.startsWith("titleAnexo") && row.original[key]
    );

    return (
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
                  {`${row.original.typeDoc} ITE-CG ${row.original.id}-${year} ${
                    row.original.nameDoc || ""
                  }`}
                </td>
                <td>
                  {row.original.id && (
                    <PdfLink
                      baseUrl={baseUrl}
                      year={year}
                      url={`${row.original.id}.pdf`}
                    />
                  )}
                </td>
              </tr>
              {anexoTitles.length > 0 && (
                <tr>
                  <td colSpan={2}>
                    <br />
                    <strong>A N E X O</strong>
                    <br />
                    <br />
                  </td>
                </tr>
              )}
              {anexoTitles.map((key) => {
                const index = key.replace("titleAnexo", "");
                return (
                  <TableRow
                    key={index}
                    baseUrl={baseUrl}
                    year={year}
                    title={row.original[key]}
                    url={`${row.original.id}.${index}.pdf`}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </Box>
    );
  };

  const tableAcuerdos = useMaterialReactTable({
    columns,
    data,
    enableExpanding: true,
    enableExpandAll: true,
    enableSorting: false,
    enableHiding: false,
    enableColumnActions: false,
    enableDensityToggle: false,
    initialState: { density: "compact" },
    muiExpandButtonProps: ({ row }) => ({
      sx: { display: row.original.subRows === "" ? "none" : "flex" },
    }),
    renderDetailPanel: renderDetailPanelAcuerdos,
    muiPaginationProps: {
      rowsPerPageOptions: [10, 25, 50, 100, 200, 300, 400],
    },
    localization: {
      ...MRT_Localization_ES,
      pagination: { rowsPerPage: "Filas por página" },
    },
  });

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Acuerdos Anteriores", url: "/AcuerdosAnteriores" },
          { label: `Acuerdos ${year}` },
        ]}
      />
      <TitlePages title="Acuerdos ITE" subTitle={`Acuerdos ITE ${year}`} />
      <Expandible />
      <MaterialReactTable table={tableAcuerdos} />
    </>
  );
};

export default AcuerdosTableITE;

PdfLink.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

TableRow.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

AcuerdosTableITE.propTypes = {
  year: PropTypes.string.isRequired,
};
