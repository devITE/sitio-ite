import React, { useMemo } from "react";
import TitlePages from "../../../layout/TitlePages";
import MaterialReactTable from "material-react-table";
import { dataAcuerdosINE2016 } from "../../../assets/data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const AcuerdosINE2016 = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "idDoc",
        header: "ID",
        footer: "ID",
      },
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

  return (
    <>
      <TitlePages title="Acuerdos INE" subTitle="Acuerdos INE 2016" />
      <MaterialReactTable
        columns={columns}
        data={dataAcuerdosINE2016}
        enableExpanding
        enableExpandAll
        enableTopToolbar={false}
        enableBottomToolbar={false}
        enableColumnActions={false}
        enableDensityToggle={false}
        initialState={{
          density: "compact",
          pagination: { pageSize: 50, pageIndex: 2 },
        }}
        muiExpandButtonProps={({ row }) => ({
          sx: {
            display: row.original.subRows === "" ? "none" : "flex",
          },
        })}
        localization={{
          expand: "",
          expandAll: "Expandir todo",
        }}
      />
    </>
  );
};
export default AcuerdosINE2016;
