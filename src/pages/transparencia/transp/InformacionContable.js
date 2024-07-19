import React, { useEffect, useMemo } from "react";
import TitlePages from "../../../layout/TitlePages";
import ListBadge from "../../../layout/ListBadge";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { MenuItem, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataInfContable } from "../../../data/dataTransparencia";
import { dataCuentaPublicaNew } from "../../../data/2024/dataCuentaPublica";
import SinExpandir from "../../../layout/HelperDataTable/SinExpandir";

const InformacionContable = () => {
  useEffect(() => {
    document.title = `Información Contable`;
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        footer: "ID",
        enableResizing: false,
      },
      {
        accessorKey: "year",
        header: "AÑO",
        footer: "AÑO",
        enableResizing: false,
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
            <MenuItem value="2014">2014</MenuItem>
            <MenuItem value="2015">2015</MenuItem>
            <MenuItem value="2016">2016</MenuItem>
            <MenuItem value="2017">2017</MenuItem>
            <MenuItem value="2018">2018</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2024">2024</MenuItem>
          </TextField>
        ),
      },
      {
        accessorFn: (row) => `${row.title} ${row.year}`,
        id: "title",
        header: "NOMBRE",
        footer: "NOMBRE",
      },
      {
        id: "pdf",
        header: "",
        footer: "",
        enableColumnFilters: false,
        Cell: ({ row }) =>
          row.original.link === "" ? (
            <span></span>
          ) : (
            <a href={row.original.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
            </a>
          ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: dataCuentaPublicaNew,
    enableColumnActions: false,
    enableDensityToggle: false,
    enableColumnResizing: true,
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
      pagination: {
        rowsPerPage: "Filas por página",
      },
    },
  });

  return (
    <div>
      <TitlePages title="Transparencia" subTitle="Información Contable" />
      <ListBadge
        ifNumbered={""}
        listsBadgeItem={dataInfContable}
        clasName="w-75 mx-auto"
      />
      <br />
      <br />
      <TitlePages title="" subTitle="Cuenta Pública" />
      <SinExpandir />
      <MaterialReactTable table={table} />
    </div>
  );
};
export default InformacionContable;
