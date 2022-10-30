import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import {
  dataAcuerdos2001,
  dataAA12001,
  dataAA22001,
} from "../../../assets/data/dataAcuerdos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Acuerdos__imgpath = require.context("../../../assets/img/imgA");

const Acuerdos2001 = () => {
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
    <div className="mb-3">
      <img
        src={Acuerdos__imgpath(`./h_2001.png`)}
        alt="Acuerdos 2001"
        className="img-fluid w-100 mb-3"
      />
      <MaterialReactTable
        columns={columns}
        data={dataAcuerdos2001}
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
      <img
        src={Acuerdos__imgpath(`./h_2001_AA1.png`)}
        alt="Ayuntamientos 10-NOV-2001"
        className="img-fluid w-100 mt-5 mb-4"
      />
      <MaterialReactTable
        columns={columnsAA1}
        data={dataAA12001}
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

      <img
        src={Acuerdos__imgpath(`./h_2001_AA2.png`)}
        alt="Ayuntamientos 10-NOV-2001"
        className="img-fluid w-100 mt-5 mb-4"
      />
      <MaterialReactTable
        columns={columnsAA2}
        data={dataAA22001}
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
    </div>
  );
};
export default Acuerdos2001;
