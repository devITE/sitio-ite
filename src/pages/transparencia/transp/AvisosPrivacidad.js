import PropTypes from "prop-types";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useMemo } from "react";
import TitlePages from "../../../layout/TitlePages";
import { dataAvisosPrivacidad } from "../../../data/dataTransparenciaAvisosPrivacidad";
import Breadcrumbs from "../../../layout/Breadcrumbs";
import "../Transparencia.css";

const baseUrl = "https://itetlax.org.mx/assets/pdf/avisosPrivacidad";

const PdfLink = ({ url }) => {
  if (!url) return null;
  const fullUrl = `${baseUrl}/${url}`;
  return (
    <p>
      <a href={fullUrl} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
      </a>
    </p>
  );
};

const renderSimplificadoCell = ({ cell }) => <PdfLink url={cell.getValue()} />;
const renderIntegralCell = ({ cell }) => <PdfLink url={cell.getValue()} />;
const renderCortoCell = ({ cell }) => <PdfLink url={cell.getValue()} />;

const Privacidad = () => {
  useEffect(() => {
    document.title = `Avisos de Privacidad`;
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "titulo",
        header: "Título",
        footer: "Título",
      },
      {
        accessorKey: "simplificado",
        header: "Simplificado",
        footer: "Simplificado",
        Cell: renderSimplificadoCell,
      },
      {
        accessorKey: "integral",
        header: "Integral",
        footer: "Integral",
        Cell: renderIntegralCell,
      },
      {
        accessorKey: "corto",
        header: "Corto",
        footer: "Corto",
        Cell: renderCortoCell,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: dataAvisosPrivacidad,
    enableExpanding: false,
    enableExpandAll: false,
    enableColumnActions: false,
    enableColumnResizing: true,
    enableDensityToggle: false,
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
    <>
      <Breadcrumbs
        path={[
          { label: "Transparencia", url: "/Transparencia" },
          { label: "Avisos de Privacidad" },
        ]}
      />
      <TitlePages title="Transparencia" subTitle="Avisos de Privacidad" />
      <MaterialReactTable table={table} />
    </>
  );
};

export default Privacidad;

PdfLink.propTypes = {
  url: PropTypes.string.isRequired,
};

Privacidad.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired,
  }),
};
