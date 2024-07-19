import React, { useMemo, useEffect } from "react";
import NavbarEnlaces from "../../layout/NavbarEnlaces";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWord, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataNormatividad } from "../../data/dataNormativad";

const Normatividad = () => {
  useEffect(() => {
    document.title = `Normatividad`;
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "nameDoc",
        header: "Normatividad",
        footer: "Normatividad",
      },
      {
        accessorKey: "post",
        header: "Publicada",
        footer: "Publicada",
      },
      {
        accessorKey: "lastUpdate",
        header: "Última Reforma",
        footer: "Última Reforma",
      },
    ],
    []
  );

  const renderDetailPanel = ({ row }) => {
    const { pdf, pdfMobile, word } = row.original;

    const renderFile = (file, icon, className) =>
      file ? (
        <div className="col-md-4">
          <span>{icon === faFilePdf ? "PDF" : "Word"} </span>
          <a
            href={file}
            target="_blank"
            rel="noreferrer"
            className={`btn ${className}`}
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        </div>
      ) : null;

    return (
      <Box id="Box">
        <div className="row">
          {renderFile(pdf, faFilePdf, "btn-danger")}
          {renderFile(word, faFileWord, "btn-primary")}
          {renderFile(pdfMobile, faFilePdf, "btn-danger")}
        </div>
      </Box>
    );
  };

  const tableConfigs = useMemo(
    () =>
      dataNormatividad.map((buttonNormatividad) => ({
        columns,
        data: buttonNormatividad.children || [],
        enableExpanding: true,
        enableExpandAll: true,
        enableColumnActions: false,
        enableColumnResizing: true,
        enableDensityToggle: false,
        muiExpandButtonProps: ({ row }) => ({
          sx: {
            display:
              row.original.subRows && row.original.subRows.length === 0
                ? "none"
                : "flex",
          },
        }),
        muiTablePaginationProps: {
          rowsPerPageOptions: [10, 25, 50, 100, 200, 300, 400],
        },
        localization: {
          ...MRT_Localization_ES,
          pagination: {
            rowsPerPage: "Filas por página",
          },
        },
        renderDetailPanel,
      })),
    [columns] // Aquí eliminamos 'dataNormatividad' de las dependencias
  );

  return (
    <>
      <NavbarEnlaces title="Normatividad" />
      <div className="d-flex align-items-start w-100">
        <div
          className="nav flex-column nav-pills me-3 w-25"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {dataNormatividad.map((buttonNormatividad) => (
            <button
              key={buttonNormatividad.id}
              className="btn btn-ite"
              id={"v-pills-" + buttonNormatividad.nameButton + "-tab"}
              data-bs-toggle="pill"
              data-bs-target={"#v-pills-" + buttonNormatividad.nameButton}
              type="button"
              role="tab"
              aria-controls={"v-pills-" + buttonNormatividad.nameButton}
              aria-selected="false"
            >
              {buttonNormatividad.titleButton}
            </button>
          ))}
        </div>
        <div className="tab-content w-75" id="v-pills-tabContent">
          {dataNormatividad.map((buttonNormatividad, index) => {
            const tableConfig = tableConfigs[index];
            return (
              <div
                key={buttonNormatividad.id}
                className="tab-pane fade"
                id={"v-pills-" + buttonNormatividad.nameButton}
                role="tabpanel"
                aria-labelledby={
                  "v-pills-" + buttonNormatividad.nameButton + "-tab"
                }
                tabIndex="0"
              >
                <MaterialReactTable {...tableConfig} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Normatividad;
