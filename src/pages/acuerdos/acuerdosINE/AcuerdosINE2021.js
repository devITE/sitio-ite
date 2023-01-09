import React, { useMemo } from "react";
import TitlePages from "../../../layout/TitlePages";
import MaterialReactTable from "material-react-table";
import { dataAcuerdosINE2021 } from "../../../data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const AcuerdosINE2021 = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "numDoc",
        header: "DOCUMENTO",
      },
      {
        accessorKey: "nameDoc",
        header: "DESCRIPCIÓN",
      },
      {
        id: "pdf",
        header: "",
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
      <TitlePages title="Acuerdos INE" subTitle="Acuerdos INE 2021" />
      <MaterialReactTable
        columns={columns}
        data={dataAcuerdosINE2021}
        enableExpanding
        enableExpandAll
        enableTopToolbar={false}
        enableBottomToolbar={false}
        enableColumnActions={false}
        enableDensityToggle={false}
        initialState={{ density: "compact" }}
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
export default AcuerdosINE2021;
