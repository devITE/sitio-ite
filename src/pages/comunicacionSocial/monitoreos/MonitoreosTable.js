import React, { useMemo, useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataMonitoreos } from "../../../data/dataMonitoreos";

const baseUrl = "https://itetlax.org.mx/assets/pdf/monitoreos/";

const PdfLink = ({ baseUrl, year, url }) => {
  const fullUrl = `${baseUrl}${year}/${url}`;
  return (
    <a href={fullUrl} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
    </a>
  );
};

const MonitoreosTable = ({ year }) => {
  const data = useMemo(() => dataMonitoreos[year] || [], [year]);

  useEffect(() => {
    document.title = `Monitoreos ${year}`;
  }, [year]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "NO.",
        size: 55,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "monthBoletin",
        header: "MES",
        size: 30,
        enableResizing: false,
      },
      {
        accessorKey: "nameBoletin",
        header: "Boletín.",
        size: 150,
        enableResizing: false,
      },
      {
        id: "pdf",
        header: "",
        size: 80,
        enableResizing: false,
        enableColumnFilters: false,
        Cell: ({ row }) =>
          row.original.linkBoletin === "" ? (
            <span></span>
          ) : (
            <PdfLink
              baseUrl={baseUrl}
              year={year}
              url={row.original.linkBoletin}
            />
          ),
      },
    ],
    [year]
  );

  const table = useMaterialReactTable({
    columns,
    data: data,
    enableTopToolbar: false,
    enableBottomToolbar: false,
    enableColumnActions: false,
    enableDensityToggle: false,
    initialState: { density: "compact" },
    localization: {
      ...MRT_Localization_ES,
      pagination: {
        rowsPerPage: "Filas por página",
      },
    },
  });

  return (
    <>
      <TitlePages title="Comunicación Social" subTitle={`Monitoreos ${year}`} />
      <MaterialReactTable table={table} />
    </>
  );
};
export default MonitoreosTable;
