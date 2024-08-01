import React, { useEffect, useMemo } from "react";
import TitlePages from "../../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box } from "@mui/material";
import {
  dataAcuerdos2001,
  dataAA12001,
  dataAA22001,
} from "../../../data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
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
    enableTopToolbar: false,
    enableBottomToolbar: false,
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
    muiPaginationProps: {
      rowsPerPageOptions: [10, 25, 50, 100, 200, 300, 400],
    },
    localization: {
      ...MRT_Localization_ES,
      pagination: { rowsPerPage: "Filas por página" },
    },
    ...options,
  });
};

const Acuerdos2001 = () => {
  useEffect(() => {
    document.title = `Acuerdos ITE 2001`;
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
        accessorFn: (row) => `${row.typeDoc} ${row.nameDoc}`,
        id: "titulo",
        header: "TÍTULO",
      },
    ],
    []
  );

  const table = useTableConfig(dataAcuerdos2001, columns, {
    renderDetailPanel: renderDetailPanelAcuerdos,
  });
  const tableAA1 = useTableConfig(dataAA12001, [
    { accessorKey: "nameMunicipio", header: "MUNICIPIO" },
    {
      id: "pdf",
      header: "",
      Cell: ({ row }) =>
        row.original.link ? <PdfLink url={row.original.link + ".pdf"} /> : null,
    },
  ]);

  const tableAA2 = useTableConfig(dataAA22001, [
    { accessorKey: "nameDoc", header: "TÍTULO" },
    {
      id: "pdf",
      header: "",
      Cell: ({ row }) =>
        row.original.link ? <PdfLink url={row.original.link + ".pdf"} /> : null,
    },
  ]);

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Acuerdos Anteriores", url: "/AcuerdosAnteriores" },
          { label: `Acuerdos ITE 2001` },
        ]}
      />
      <TitlePages title="Acuerdos Anteriores" subTitle="Acuerdos ITE 2001" />
      <MaterialReactTable table={table} />
      <br />
      <br />
      <TitlePages title="" subTitle="Ayuntamientos 10/Nov/2001" />
      <MaterialReactTable table={tableAA1} />
      <br />
      <br />
      <TitlePages title="" subTitle="Ayuntamientos Dic-2001" />
      <MaterialReactTable table={tableAA2} />
    </>
  );
};

export default Acuerdos2001;
