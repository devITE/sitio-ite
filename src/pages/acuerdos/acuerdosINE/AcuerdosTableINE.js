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
import { faFilePdf, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { dataAcuerdosINE } from "../../../data/dataAcuerdos";
import Expandible from "../../../layout/HelperDataTable/Expandible";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const baseUrl = "https://itetlax.org.mx/assets/pdf/acuerdos/INE/";

const FileLink = ({ baseUrl, year, url, type }) => {
  const icon = type === "pdf" ? faFilePdf : faFileExcel;
  const className = type === "pdf" ? "btn btn-danger" : "btn btn-success";
  const fullUrl = `${baseUrl}${year}/${url}`;

  return (
    <a href={fullUrl} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} className={className} />
    </a>
  );
};

const TableRow = ({ baseUrl, year, title, url, type }) =>
  title && url ? (
    <tr>
      <td>{title.toUpperCase()}</td>
      <td>
        <FileLink baseUrl={baseUrl} year={year} url={url} type={type} />
      </td>
    </tr>
  ) : null;

const AcuerdosTableINE = ({ year }) => {
  const data = useMemo(() => dataAcuerdosINE[year] || [], [year]);

  useEffect(() => {
    document.title = `Acuerdos INE ${year}`;
  }, [year]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "numDoc",
        header: "ACUERDO",
        footer: "ACUERDO",
        size: 55,
      },
      {
        accessorFn: (row) =>
          row.nameDoc ? `${row.numDoc} ${row.nameDoc}` : "",
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
                  <FileLink
                    baseUrl={baseUrl}
                    year={year}
                    url={`${row.original.id}.pdf`}
                    type="pdf"
                  />
                )}
              </td>
            </tr>
            {[...Array(70)].map((_, i) => {
              const index = i + 1;
              const pdfTitle = row.original[`titleAnexoPDF${index}`];
              const excelTitle = row.original[`titleAnexoEXCEL${index}`];

              return (
                <>
                  {pdfTitle && (
                    <TableRow
                      baseUrl={baseUrl}
                      year={year}
                      title={pdfTitle}
                      url={`${row.original.id}.${index}.pdf`}
                      type="pdf"
                    />
                  )}
                  {excelTitle && (
                    <TableRow
                      baseUrl={baseUrl}
                      year={year}
                      title={excelTitle}
                      url={`${row.original.id}.${index}.xlsx`}
                      type="excel"
                    />
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </Box>
  );

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
      <Breadcrumbs
        path={[
          { label: "Acuerdos INE", url: "/AcuerdosINE" },
          { label: `Acuerdos INE ${year}` },
        ]}
      />
      <TitlePages title="Acuerdos INE" subTitle={`Acuerdos INE ${year}`} />
      <Expandible />
      <MaterialReactTable table={tableAcuerdos} />
    </>
  );
};

export default AcuerdosTableINE;

FileLink.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["pdf", "excel"]).isRequired,
};

TableRow.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["pdf", "excel"]).isRequired,
};

AcuerdosTableINE.propTypes = {
  year: PropTypes.string.isRequired,
};
