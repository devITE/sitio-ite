import React, { useMemo,useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import MaterialReactTable from "material-react-table";
import { dataAcuerdosINE2022 } from "../../../data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const AcuerdosINE2022 = () => {
  useEffect(() => {
    document.title = `ITE - Acuerdos INE2022`;
  }, []);
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
      <TitlePages title="Acuerdos INE" subTitle="Acuerdos INE 2022" />
      <MaterialReactTable
        columns={columns}
        data={dataAcuerdosINE2022}
        enableTopToolbar={false}
        enableBottomToolbar={false}
        enableColumnActions={false}
        enableDensityToggle={false}
        initialState={{ density: "compact" }}
      />
    </>
  );
};
export default AcuerdosINE2022;
