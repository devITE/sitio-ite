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
import { dataAcuerdosINE2024 } from "../../../data/2024/dataAcuerdos";
import Expandible from "../../../layout/HelperDataTable/Expandible";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const baseUrl = "https://itetlax.org.mx/assets/pdf/acuerdos/INE/2024";

const FileLink = ({ baseUrl, url, type }) => {
  const icon = type === "pdf" ? faFilePdf : faFileExcel;
  const className = type === "pdf" ? "btn btn-danger" : "btn btn-success";
  const fullUrl = `${baseUrl}/${url}`;

  return (
    <a className="link" href={fullUrl} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} className={className} />
    </a>
  );
};

const TableRow = ({ title, url, type }) => {
  return title && url ? (
    <tr>
      <td>{title.toUpperCase()}</td>
      <td>
        <FileLink baseUrl={baseUrl} url={url} type={type} />
      </td>
    </tr>
  ) : null;
};

const AcuerdosINE2024 = () => {
  useEffect(() => {
    document.title = `Acuerdos INE 2024`;
  }, []);

  const columns = useMemo(
    () => [
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
                <FileLink
                  baseUrl={baseUrl}
                  url={row.original.id + ".pdf"}
                  type="pdf"
                />
              </td>
            </tr>
            {[...Array(70)].map((_, i) => {
              const index = i + 1;
              const titlePDF = row.original[`titleAnexoPDF${index}`];
              const titleExcel = row.original[`titleAnexoEXCEL${index}`];

              return (
                <React.Fragment key={index}>
                  {titlePDF && (
                    <TableRow
                      title={titlePDF}
                      url={`${row.original.id}.${index}.pdf`}
                      type={"pdf"}
                    />
                  )}
                  {titleExcel && (
                    <TableRow
                      title={titleExcel}
                      url={`${row.original.id}.${index}.xlsx`}
                      type={"excel"}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </Box>
  );

  const tableAcuerdos = useMaterialReactTable({
    columns,
    data: dataAcuerdosINE2024,
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
          { label: "Acuerdos INE 2024" },
        ]}
      />
      <TitlePages title="Acuerdos INE" subTitle="Acuerdos INE 2024" />
      <Expandible />
      <MaterialReactTable table={tableAcuerdos} />
    </>
  );
};

export default AcuerdosINE2024;

FileLink.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["pdf", "excel"]).isRequired,
};

TableRow.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["pdf", "excel"]).isRequired,
};
