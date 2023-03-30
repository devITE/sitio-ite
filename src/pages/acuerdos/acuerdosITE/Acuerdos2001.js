import React, { useMemo,useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import MaterialReactTable from "material-react-table";
import {
  dataAcuerdos2001,
  dataAA12001,
  dataAA22001,
} from "../../../data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Acuerdos2001 = () => {
  useEffect(() => {
    document.title = `Acuerdos ITE 2001`;
  }, []);
  const columns = useMemo(
    () => [
      {
        accessorKey: "dateDoc",
        header: "FECHA",
      },
      {
        accessorFn: (row) => `${row.typeDoc} ${row.nameDoc}`,
        id: "titulo",
        header: "TÍTULO",
      },
      {
        id: "pdf",
        header: "",
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

  const columnsAA1 = useMemo(
    () => [
      {
        accessorKey: "nameMunicipio",
        header: "MUNICIPIO",
      },
      {
        id: "pdf",
        header: "",
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

  const columnsAA2 = useMemo(
    () => [
      {
        accessorKey: "dateAcuerdo",
        header: "FECHA",
      },
      {
        accessorKey: "nameDoc",
        header: "TÍTULO",
      },
      {
        id: "pdf",
        header: "",
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
      <TitlePages title="Acuerdos Anteriores" subTitle="Acuerdos ITE 2001" />
      <MaterialReactTable
        columns={columns}
        data={dataAcuerdos2001}
        enableTopToolbar={false}
        enableBottomToolbar={false}
        enableColumnActions={false}
        enableDensityToggle={false}
        initialState={{ density: "compact" }}
      />
      <br />
      <br />
      <TitlePages title="" subTitle="Ayuntamientos 10/Nov/2001" />
      <MaterialReactTable
        columns={columnsAA1}
        data={dataAA12001}
        enableTopToolbar={false}
        enableBottomToolbar={false}
        enableColumnActions={false}
        enableDensityToggle={false}
        initialState={{ density: "compact" }}
      />
      <br />
      <br />
      <TitlePages title="" subTitle="Ayuntamientos Dic-2001" />
      <MaterialReactTable
        columns={columnsAA2}
        data={dataAA22001}
        enableTopToolbar={false}
        enableBottomToolbar={false}
        enableColumnActions={false}
        enableDensityToggle={false}
        initialState={{ density: "compact" }}
      />
    </>
  );
};
export default Acuerdos2001;
