import React, { useMemo, useEffect } from "react";
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

const TableRow = ({ baseUrl, year, title, url, type }) => {
  if (title && url) {
    console.log(`Title: ${title.toUpperCase()}, URL: ${url}, TYPE: ${type}`);
  }

  return title && url ? (
    <tr>
      <td>{title.toUpperCase()}</td>
      <td>
        <FileLink baseUrl={baseUrl} year={year} url={url} type={type} />
      </td>
    </tr>
  ) : null;
};

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
                    url={row.original.link + ".pdf"}
                  />
                )}
              </td>
            </tr>
            {[...Array(70)].map((_, i) => {
              const index = i + 1;
              const anexoPDF = row.original[`AnexoPDF${index}`];
              const anexoEXCEL = row.original[`AnexoPDF${index}`];
              return (
                <>
                  <TableRow
                    key={`pdf-${index}`}
                    baseUrl={baseUrl}
                    year={year}
                    title={anexoPDF}
                    url={[`.${index}.pdf`]}
                    type="pdf"
                  />

                  <TableRow
                    key={`excel-${index}`}
                    baseUrl={baseUrl}
                    year={year}
                    title={anexoEXCEL}
                    url={[`.${index}.xlsx`]}
                    type="excel"
                  />
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
