import React, { useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import TitlePages from "../../../layout/TitlePages";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { dataArt63 } from "../../../data/dataTransparenciaArt63";
import Breadcrumbs from "../../../layout/Breadcrumbs";

const baseUrlPDF = "https://itetlax.org.mx/assets/pdf/transparencia/art63/";
const baseUrlExcel = "https://itetlax.org.mx/assets/excel/transparencia/art63/";

const ExcelLink = ({ baseUrl, year, urls }) => {
  return urls.map((url) => {
    const fullUrl = `${baseUrl}${year}/${url}`;
    const displayText = url.substring(0, url.lastIndexOf("."));
    return (
      <p key={fullUrl}>
        {displayText}
        <a href={fullUrl} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFileExcel} className="btn btn-success" />
        </a>
      </p>
    );
  });
};

const PdfLink = ({ baseUrl, year, urls }) => {
  return urls.map((url) => {
    const fullUrl = `${baseUrl}${year}/${url}`;
    const displayText = url.substring(0, url.lastIndexOf("."));
    return (
      <p key={fullUrl}>
        {displayText}
        <a href={fullUrl} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFilePdf} className="btn btn-danger" />
        </a>
      </p>
    );
  });
};

const Art63Table = ({ year }) => {
  const data = useMemo(() => dataArt63[year] || [], [year]);

  useEffect(() => {
    document.title = `Artículo 63 ${year}`;
  }, [year]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "fraccion",
        header: "Fracción",
        footer: "Fracción",
        size: 130,
        enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "titulo",
        header: "Título",
        footer: "Título",
        size: 200,
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
        Cell: ({ row }) =>
          `Artículo 63 de la Fracción ${row.original.fraccion} de la Ley de Transparencia y Acceso a la Información del Estado de Tlaxcala`,
      },
      {
        accessorKey: "actualizacion",
        header: "Actualización",
        size: 100,
        enableResizing: false,
        enableColumnFilter: false,
        Cell: () => year,
      },
    ],
    [year]
  );

  const rootData = useMemo(() => data.filter((r) => !r.managerId), [data]);

  const renderTransparencia = ({ row }) => {
    const { managerId, fraccion, ...rest } = row.original;
    const excels = Object.keys(rest)
      .filter((key) => key.startsWith("excel"))
      .map((key) => rest[key]);
    const pdfs = Object.keys(rest)
      .filter((key) => key.startsWith("pdf"))
      .map((key) => rest[key]);

    if (excels.length > 0 || pdfs.length > 0) {
      return (
        <Box id="Box">
          {excels.length > 0 && (
            <>
              <p className="text-strong">
                Descarga los archivos de la Fracción {fraccion}
              </p>
              <ExcelLink baseUrl={baseUrlExcel} year={year} urls={excels} />
            </>
          )}
          {pdfs.length > 0 && (
            <>
              <p className="text-strong">
                Descarga los archivos de la Fracción {fraccion}
              </p>
              <PdfLink baseUrl={baseUrlPDF} year={year} urls={pdfs} />
            </>
          )}
        </Box>
      );
    }
    return null;
  };

  const table = useMaterialReactTable({
    columns,
    data: rootData,
    enableExpanding: true,
    enableExpandAll: true,
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
    getSubRows: (row) => data.filter((r) => r.managerId === row.id),
    renderDetailPanel: renderTransparencia,
  });

  return (
    <>
      <Breadcrumbs
        path={[
          { label: "Transparencia", url: "/Transparencia" },
          { label: "Artículo 63 Obligaciones Comunes", url: "/Articulo63" },
          { label: `Artículo 63 ${year}` },
        ]}
      />
      <TitlePages
        title="Transparencia"
        subTitle={`Artículo 63 (${year}) Obligaciones Comunes`}
      />
      <MaterialReactTable table={table} />
    </>
  );
};

Art63Table.propTypes = {
  year: PropTypes.number.isRequired,
};

ExcelLink.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

PdfLink.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Art63Table;
