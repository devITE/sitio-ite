import React, { useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import TitlePages from "../../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box, MenuItem, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataAcuerdos2024 } from "../../../data/2024/dataAcuerdos";
import Expandible from "../../../layout/HelperDataTable/Expandible";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const baseUrl = "https://itetlax.org.mx/assets/pdf/acuerdos/ITE/2024/";

const PdfLink = ({ url }) => {
  const fullUrl = `${baseUrl}${url}`;
  return (
    <a href={fullUrl} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
    </a>
  );
};

const TableRow = ({ title, url }) =>
  title && url ? (
    <tr>
      <td>{title.toUpperCase()}</td>
      <td>
        <PdfLink url={url} />
      </td>
    </tr>
  ) : null;

const AcuerdosITE2024 = () => {
  useEffect(() => {
    document.title = `Acuerdos ITE 2024`;
  }, []);

  const columnsAcuerdos = useMemo(
    () => [
      {
        accessorKey: "monthDoc",
        header: "MES",
        footer: "MES",
        size: 30,
        Filter: ({ header }) => (
          <TextField
            onChange={(e) =>
              header.column.setFilterValue(e.target.value || undefined)
            }
            select
            value={header.column.getFilterValue() ?? ""}
            margin="none"
            placeholder="Filter"
            variant="standard"
            fullWidth
          >
            <MenuItem value={null}>Todos</MenuItem>
            {[
              "ENE",
              "FEB",
              "MAR",
              "ABR",
              "MAY",
              "JUN",
              "JUL",
              "AGO",
              "SEP",
              "OCT",
              "NOV",
              "DIC",
            ].map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </TextField>
        ),
      },
      {
        accessorFn: (row) => `ITE-CG ${row.id}-2024`,
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
    []
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
                  {`${row.original.typeDoc} ITE-CG ${row.original.id}-2024 ${
                    row.original.nameDoc || ""
                  }`}
                </td>
                <td>
                  {row.original.id && (
                    <PdfLink url={row.original.id + ".pdf"} />
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
    columns: columnsAcuerdos,
    data: dataAcuerdos2024,
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
      <Breadcrumbs path={[{ label: `Acuerdos 2024` }]} />
      <TitlePages title="Acuerdos ITE" subTitle="Acuerdos ITE 2024" />
      <Expandible />
      <MaterialReactTable table={tableAcuerdos} />
    </>
  );
};

export default AcuerdosITE2024;

PdfLink.propTypes = {
  url: PropTypes.string.isRequired,
};

TableRow.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
