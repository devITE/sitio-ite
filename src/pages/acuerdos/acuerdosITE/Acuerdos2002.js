import React, { useEffect, useMemo } from "react";
import TitlePages from "../../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box, MenuItem, TextField } from "@mui/material";
import { dataAcuerdos2002, dataAA2002 } from "../../../data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import SinExpandir from "../../../layout/HelperDataTable/SinExpandir";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const baseUrl = "https://itetlax.org.mx/assets/pdf/acuerdos/ITE/2002/";

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
        <PdfLink url={baseUrl + url + ".pdf"} />
      </td>
    </tr>
  ) : null;

const useTableConfig = (data, columns, options = {}) => {
  return useMaterialReactTable({
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
    muiPaginationProps: {
      rowsPerPageOptions: [10, 25, 50, 100, 200, 300, 400],
    },
    localization: {
      ...MRT_Localization_ES,
      pagination: { rowsPerPage: "Filas por página" },
    },
    renderDetailPanel: options.renderDetailPanel,
  });
};

const Acuerdos2002 = () => {
  useEffect(() => {
    document.title = `Acuerdos ITE 2002`;
  }, []);

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
                {row.original.nameDoc}
              </td>
              <td>
                {row.original.link && (
                  <PdfLink baseUrl={baseUrl} url={row.original.link + ".pdf"} />
                )}
              </td>
            </tr>
            {[...Array(70)].map((_, i) => {
              const index = i + 1;
              return (
                <TableRow
                  key={index}
                  baseUrl={baseUrl}
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

  const columns = useMemo(
    () => [
      {
        accessorKey: "monthDoc",
        header: "MES",
        footer: "MES",
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
            <MenuItem value="ENE">Enero</MenuItem>
            <MenuItem value="FEB">Febrero</MenuItem>
            <MenuItem value="MAR">Marzo</MenuItem>
            <MenuItem value="ABR">Abril</MenuItem>
            <MenuItem value="MAY">Mayo</MenuItem>
            <MenuItem value="JUN">Junio</MenuItem>
            <MenuItem value="JUL">Julio</MenuItem>
            <MenuItem value="AGO">Agosto</MenuItem>
            <MenuItem value="SEP">Septiembre</MenuItem>
            <MenuItem value="OCT">Octubre</MenuItem>
            <MenuItem value="NOV">Noviembre</MenuItem>
            <MenuItem value="DIC">Diciembre</MenuItem>
          </TextField>
        ),
      },
      {
        accessorFn: (row) => `${row.typeDoc} ${row.nameDoc}`,
        id: "titulo",
        header: "TÍTULO",
        footer: "TÍTULO",
      },
    ],
    []
  );

  const columnsAA = useMemo(
    () => [
      {
        accessorKey: "monthDoc",
        header: "MES",
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
            <MenuItem value="ENE">Enero</MenuItem>
            <MenuItem value="FEB">Febrero</MenuItem>
            <MenuItem value="MAR">Marzo</MenuItem>
            <MenuItem value="ABR">Abril</MenuItem>
            <MenuItem value="MAY">Mayo</MenuItem>
            <MenuItem value="JUN">Junio</MenuItem>
            <MenuItem value="JUL">Julio</MenuItem>
            <MenuItem value="AGO">Agosto</MenuItem>
            <MenuItem value="SEP">Septiembre</MenuItem>
            <MenuItem value="OCT">Octubre</MenuItem>
            <MenuItem value="NOV">Noviembre</MenuItem>
            <MenuItem value="DIC">Diciembre</MenuItem>
          </TextField>
        ),
      },
      {
        accessorKey: "dateDoc",
        header: "FECHA",
        enableColumnFilter: false,
      },
      {
        accessorFn: (row) => `${row.typeDoc} ${row.nameDoc}`,
        id: "titulo",
        header: "TÍTULO",
      },
    ],
    []
  );

  const table = useTableConfig(dataAcuerdos2002, columns, {
    renderDetailPanel: renderDetailPanelAcuerdos,
  });
  const tableAA = useTableConfig(dataAA2002, columnsAA, {
    renderDetailPanel: renderDetailPanelAcuerdos,
  });

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Acuerdos Anteriores", url: "/AcuerdosAnteriores" },
          { label: `Acuerdos ITE 2002` },
        ]}
      />
      <TitlePages title="Acuerdos Anteriores" subTitle="Acuerdos ITE 2002" />
      <SinExpandir />
      <MaterialReactTable table={table} />
      <TitlePages title="" subTitle="Acuerdos ITE Aprobados 2002" />
      <MaterialReactTable table={tableAA} />
    </>
  );
};

export default Acuerdos2002;
