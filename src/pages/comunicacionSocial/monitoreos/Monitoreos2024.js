import React, { useEffect, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MenuItem, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  dataMonitoreoMIyD,
  dataMonitoreoPG,
  dataMonitoreoRyT,
} from "../../../data/2024/dataMonitoreos";
import TitlePages from "../../../layout/TitlePages";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const useMonitoreoTable = (data) => {
  return useMaterialReactTable({
    columns: useMemo(
      () => [
        {
          accessorKey: "id",
          header: "NO.",
        },
        {
          accessorKey: "monthBoletin",
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
          accessorKey: "nameBoletin",
          header: "Boletín.",
        },
        {
          id: "pdf",
          header: "",
          enableColumnFilters: false,
          Cell: ({ row }) =>
            row.original.linkBoletin ? (
              <a
                href={row.original.linkBoletin}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
              </a>
            ) : (
              <span></span>
            ),
        },
      ],
      []
    ),
    data,
    enableExpanding: false,
    enableColumnActions: false,
    enableColumnResizing: true,
    enableDensityToggle: false,
    enableTopToolbar: false,
    enablePagination: false,
  });
};

const Monitoreos2024 = () => {
  useEffect(() => {
    document.title = `Monitoreos 2024`;
  }, []);

  const tablePG = useMonitoreoTable(dataMonitoreoPG);
  const tableRyT = useMonitoreoTable(dataMonitoreoRyT);
  const tableMIyD = useMonitoreoTable(dataMonitoreoMIyD);

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Home", url: "/" },
          { label: "Comunicación Social", url: "/ComunicacionSocial" },
          { label: "Monitoreos", url: "/Monitoreo" },
          { label: `Monitoreos 2024` },
        ]}
      />
      <TitlePages title="Comunicación Social" subTitle="" />
      <br />
      <br />
      <div className="w-50 mx-auto">
        <TitlePages title="" subTitle="Monitoreo con perspectiva de género" />
      </div>
      <MaterialReactTable table={tablePG} />
      <br />
      <br />
      <br />
      <div className="w-50 mx-auto">
        <TitlePages title="" subTitle="Monitoreo radio y televisión" />
      </div>
      <MaterialReactTable table={tableRyT} />
      <br />
      <br />
      <br />
      <div className="w-50 mx-auto">
        <TitlePages title="" subTitle="Monitoreo medios impresos y digitales" />
      </div>
      <MaterialReactTable table={tableMIyD} />
    </>
  );
};

export default Monitoreos2024;
