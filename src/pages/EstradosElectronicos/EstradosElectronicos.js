import React, { useMemo, useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box, MenuItem, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataAcuerdos2024 } from "../../data/2024/dataAcuerdos";
import { dataEstrados } from "../../data/2024/dataEstradosConvocatorias";
import Expandible from "../../layout/HelperDataTable/Expandible";

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

const EstradosElectronicos = () => {
  useEffect(() => {
    document.title = `Estrados Electrónicos`;
  }, []);

  const columnsEstrados = useMemo(
    () => [
      {
        accessorFn: (row) => `MEDIO DE IMPUGNACIÓN 0${row.numCedula}`,
        id: "titulo",
        header: "TÍTULO",
        footer: "TÍTULO",
        size: 255,
      },
    ],
    []
  );

  const renderDetailPanelEstrados = ({ row }) => (
    <Box id="Box">
      <div className="table-responsive">
        <table className="table table-hover table-sm table-bordered table align-middle w-50">
          <thead></thead>
          <tbody>
            {["", ".1"].map((suffix) => (
              <tr
                key={suffix}
                className={suffix === "" ? "table-secondary" : ""}
              >
                <td>{`FOLIO 0${row.original.numCedula}${
                  suffix ? `-2024` : ""
                }`}</td>
                <td>
                  <PdfLink
                    url={`https://itetlax.org.mx/assets/pdf/estrados/${row.original.numCedula}${suffix}.pdf`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );

  const tableEstrados = useMaterialReactTable({
    columns: columnsEstrados,
    data: dataEstrados,
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
    renderDetailPanel: renderDetailPanelEstrados,
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
      <TitlePages title="Estrados Electrónicos" subTitle="" />

      <Expandible />

      <div className="w-75 mx-auto mt-5">
        <TitlePages title="" subTitle="Medios de impugnación" />
      </div>
      <MaterialReactTable table={tableEstrados} />
      <br />
      <br />
      <div className="w-75 mx-auto mt-5">
        <TitlePages title="" subTitle="Acuerdos 2024" />
      </div>
      <MaterialReactTable table={tableAcuerdos} />
      <br />
      <br />
    </>
  );
};

export default EstradosElectronicos;
