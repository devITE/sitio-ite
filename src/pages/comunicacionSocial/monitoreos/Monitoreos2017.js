import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataMonitoreos2017 } from "../../../data/dataMonitoreos";
import TitlePages from "../../../layout/TitlePages";

const Monitoreos2017 = () => {
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
            <a href={row.original.linkBoletin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
            </a>
          ),
      },
    ],
    []
  );
  return (
    <>
      <TitlePages title="Comunicación Social" subTitle="Monitoreos 2017" />
      <MaterialReactTable
        columns={columns}
        data={dataMonitoreos2017}
        enableTopToolbar={false}
        enableBottomToolbar={false}
        enableColumnActions={false}
        enableDensityToggle={false}
        initialState={{ density: "compact" }}
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: "#972069",
            color: "#fff",
          },
        }}
      />
    </>
  );
};
export default Monitoreos2017;
