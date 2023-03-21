import React, { useMemo, useEffect } from "react";
import TitlePages from "../../../layout/TitlePages";
import MaterialReactTable from "material-react-table";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataArt632019 } from "../../../data/dataTransparenciaArt63";

const Art632019 = () => {
  useEffect(() => {
    document.title = `Artículo 63 2019`;
  }, []);
  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "NO.",
        footer: "NO.",
        size: 55,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "fraccion",
        header: "Fracción",
        footer: "Fracción",
        size: 90,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "titulo",
        header: "Título",
        footer: "Título",
        size: 150,
        enableResizing: false,
      },
      {
        accessorKey: "cumplimiento",
        header: "Cumplimiento",
        footer: "Cumplimiento",
        size: 100,
        enableResizing: false,
        filterFn: "equals",
        filterSelectOptions: [
          { text: "Aplica", value: "Aplica" },
          { text: "No Aplica", value: "No Aplica" },
        ],
        filterVariant: "select",
      },
      {
        accessorKey: "fundamentoLegal",
        header: "Fundamento Legal",
        footer: "Fundamento Legal",
        size: 270,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "actualizacion",
        header: "Actualización",
        footer: "Actualización",
        size: 100,
        enableResizing: false,
        enableColumnFilter: false,
      },
    ],
    []
  );

  return (
    <div>
      <TitlePages
        title="Transparencia"
        subTitle="Artículo 63. (2019) Obligaciones Comunes"
      />
      <MaterialReactTable
        columns={columns}
        data={dataArt632019}
        enableExpanding
        enableExpandAll
        enableColumnActions={false}
        enableColumnResizing
        enableDensityToggle={false}
        muiExpandButtonProps={({ row }) => ({
          sx: {
            display: row.original.subRows === "" ? "none" : "flex",
          },
        })}
        renderDetailPanel={({ row }) =>
          (row.original.excel1 === "") &
          (row.original.excel2 === "") &
          (row.original.excel3 === "") &
          (row.original.excel4 === "") &
          (row.original.excel5 === "") &
          (row.original.excel6 === "") &
          (row.original.pdf1 === "") &
          (row.original.pdf2 === "") &
          (row.original.pdf3 === "") &
          (row.original.pdf4 === "") &
          (row.original.pdf5 === "") &
          (row.original.pdf6 === "") ? (
            <span></span>
          ) : (
            <Box id="Box">
              <p className="text-strong">
                Descarga los archivo de la Fracción {row.original.fraccion}
              </p>
              {(row.original.excel1 !== "") &
              (row.original.excel2 === "") &
              (row.original.excel3 === "") &
              (row.original.excel4 === "") &
              (row.original.excel5 === "") &
              (row.original.excel6 === "") &
              (row.original.pdf1 !== "") &
              (row.original.pdf2 === "") &
              (row.original.pdf3 === "") &
              (row.original.pdf4 === "") &
              (row.original.pdf5 === "") &
              (row.original.pdf6 === "") ? (
                <div className="row">
                  <div className="col-md-6">
                    {row.original.excel1
                      ? row.original.excel1.substring(61, 100).slice(0, -5)
                      : []}{" "}
                    <a
                      href={row.original.excel1}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFileExcel}
                        className="btn btn-success"
                      />
                    </a>
                  </div>
                  <div className="col-md-6">
                    {row.original.pdf1
                      ? row.original.pdf1.substring(59, 100).slice(0, -4)
                      : []}{" "}
                    <a
                      href={row.original.pdf1}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        className="btn btn-danger"
                      />
                    </a>
                  </div>
                </div>
              ) : (row.original.excel1 !== "") &
                (row.original.excel2 !== "") &
                (row.original.excel3 === "") &
                (row.original.excel4 === "") &
                (row.original.excel5 === "") &
                (row.original.excel6 === "") &
                (row.original.pdf1 !== "") &
                (row.original.pdf2 !== "") &
                (row.original.pdf3 === "") &
                (row.original.pdf4 === "") &
                (row.original.pdf5 === "") &
                (row.original.pdf6 === "") ? (
                <>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel1
                        ? row.original.excel1.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel1}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf1
                        ? row.original.pdf1.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf1}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel2
                        ? row.original.excel2.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel2}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf2
                        ? row.original.pdf2.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf2}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                </>
              ) : (row.original.excel1 !== "") &
                (row.original.excel2 !== "") &
                (row.original.excel3 !== "") &
                (row.original.excel4 === "") &
                (row.original.excel5 === "") &
                (row.original.excel6 === "") &
                (row.original.pdf1 !== "") &
                (row.original.pdf2 !== "") &
                (row.original.pdf3 !== "") &
                (row.original.pdf4 === "") &
                (row.original.pdf5 === "") &
                (row.original.pdf6 === "") ? (
                <>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel1
                        ? row.original.excel1.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel1}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf1
                        ? row.original.pdf1.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf1}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel2
                        ? row.original.excel2.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel2}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf2
                        ? row.original.pdf2.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf2}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel3
                        ? row.original.excel3.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel3}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf3
                        ? row.original.pdf3.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf3}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                </>
              ) : (row.original.excel1 !== "") &
                (row.original.excel2 !== "") &
                (row.original.excel3 !== "") &
                (row.original.excel4 !== "") &
                (row.original.excel5 === "") &
                (row.original.excel6 === "") &
                (row.original.pdf1 !== "") &
                (row.original.pdf2 !== "") &
                (row.original.pdf3 !== "") &
                (row.original.pdf4 !== "") &
                (row.original.pdf5 === "") &
                (row.original.pdf6 === "") ? (
                <>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel1
                        ? row.original.excel1.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel1}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf1
                        ? row.original.pdf1.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf1}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel2
                        ? row.original.excel2.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel2}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf2
                        ? row.original.pdf2.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf2}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel3
                        ? row.original.excel3.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel3}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf3
                        ? row.original.pdf3.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf3}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel4
                        ? row.original.excel4.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel4}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf4
                        ? row.original.pdf4.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf4}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                </>
              ) : (row.original.excel1 !== "") &
                (row.original.excel2 !== "") &
                (row.original.excel3 !== "") &
                (row.original.excel4 !== "") &
                (row.original.excel5 !== "") &
                (row.original.excel6 === "") &
                (row.original.pdf1 !== "") &
                (row.original.pdf2 !== "") &
                (row.original.pdf3 !== "") &
                (row.original.pdf4 !== "") &
                (row.original.pdf5 !== "") &
                (row.original.pdf6 === "") ? (
                <>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel1
                        ? row.original.excel1.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel1}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf1
                        ? row.original.pdf1.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf1}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel2
                        ? row.original.excel2.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel2}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf2
                        ? row.original.pdf2.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf2}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel3
                        ? row.original.excel3.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel3}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf3
                        ? row.original.pdf3.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf3}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel4
                        ? row.original.excel4.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel4}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf4
                        ? row.original.pdf4.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf4}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel5
                        ? row.original.excel5.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel5}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf5
                        ? row.original.pdf5.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf5}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel1
                        ? row.original.excel1.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel1}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf1
                        ? row.original.pdf1.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf1}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel2
                        ? row.original.excel2.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel2}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf2
                        ? row.original.pdf2.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf2}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel3
                        ? row.original.excel3.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel3}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf3
                        ? row.original.pdf3.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf3}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel4
                        ? row.original.excel4.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel4}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf4
                        ? row.original.pdf4.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf4}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel5
                        ? row.original.excel5.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel5}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf5
                        ? row.original.pdf5.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf5}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      {row.original.excel6
                        ? row.original.excel6.substring(61, 100).slice(0, -5)
                        : []}{" "}
                      <a
                        href={row.original.excel6}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFileExcel}
                          className="btn btn-success"
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      {row.original.pdf6
                        ? row.original.pdf6.substring(59, 100).slice(0, -4)
                        : []}{" "}
                      <a
                        href={row.original.pdf6}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="btn btn-danger"
                        />
                      </a>
                    </div>
                  </div>
                </>
              )}
            </Box>
          )
        }
        muiTablePaginationProps={{
          labelRowsPerPage: "Filas por página",
          getItemAriaLabel: (type) => {
            if (type === "first") {
              return "inicio";
            }
            if (type === "last") {
              return "fin";
            }
            if (type === "next") {
              return "siguiente";
            }
            if (type === "previous") {
              return "anterior";
            }
          },
          labelDisplayedRows: ({ from, to, count }) =>
            `${from}-${to} de ${count !== -1 ? count : `${to} para`}`,
        }}
        localization={{
          actions: "Acciones",
          cancel: "Cancelar",
          clearFilter: "Limpiar filtro",
          clearSearch: "Borrar búsqueda",
          clearSort: "Ordenar claro",
          columnActions: "Acciones de columna",
          edit: "Editar",
          expand: "Expandir",
          expandAll: "Expandir todo",
          filterByColumn: "{column}",
          groupByColumn: "Agrupar por {column}",
          groupedBy: "Agrupados por ",
          hideAll: "Ocultar todo",
          hideColumn: "Ocultar columna de {column}",
          rowActions: "Acciones de fila",
          save: "Salvar",
          search: "Búsqueda",
          selectedCountOfRowCountRowsSelected:
            "{selectedCount} de {rowCount} fila(s) seleccionadas",
          showAll: "Mostrar todo",
          showHideColumns: "Mostrar/Ocultar columnas",
          showHideFilters: "Alternar filtros",
          showHideSearch: "Alternar búsqueda",
          sortByColumnAsc: "Ordenar por {column} ascendente",
          sortByColumnDesc: "Ordenar por {column} descendiendo",
          thenBy: ", entonces por ",
          toggleDensity: "Alternar relleno denso",
          toggleFullScreen: "Alternar pantalla completa",
          toggleSelectAll: "Seleccionar todo",
          toggleSelectRow: "Seleccionar fila",
          ungroupByColumn: "Desagrupar por {column}",
        }}
      />
    </div>
  );
};

export default Art632019;
