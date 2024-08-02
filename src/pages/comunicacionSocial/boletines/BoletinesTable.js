import React, { useMemo, useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataBoletines } from "../../../data/dataBoletines";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const baseUrl = "https://itetlax.org.mx/assets/pdf/boletines/";

const PdfLink = ({ baseUrl, year, url }) => {
  const fullUrl = `${baseUrl}${year}/${url}`;
  return (
    <a href={fullUrl} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
    </a>
  );
};

const BoletinesTable = ({ year }) => {
  const data = useMemo(() => dataBoletines[year] || [], [year]);

  useEffect(() => {
    document.title = `Boletines ${year}`;
  }, [year]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "NO.",
        footer: "NO.",
        size: 55,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "monthBoletin",
        header: "MES",
        footer: "MES",
        size: 30,
      },
      {
        accessorKey: "nameBoletin",
        header: "Boletín.",
        footer: "Boletín.",
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
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Comunicación Social", url: "/ComunicacionSocial" },
          { label: "Boletines", url: "/Boletines" },
          { label: `Boletines ${year}` },
        ]}
      />
      <TitlePages title="Comunicación Social" subTitle={`Boletines ${year}`} />

      <MaterialReactTable table={table} />
    </>
  );
};
export default BoletinesTable;
