import React, { useMemo } from "react";
import CarouselVert from "../../layout/Carousel/CarouselVert/CarouselVert";
import CarouselVertItem from "../../layout/Carousel/CarouselVert/CarouselVertItem";
import MaterialReactTable from "material-react-table";
import { dataRegistros, dataInfografias } from "../../data/dataREPS";
import "./REPS.css";

console.log(dataRegistros.length);
// Fecha actual
const dt = new Date();
const year = dt.getFullYear();
const month = (dt.getMonth() + 1).toString().padStart(2, "0");
const day = dt.getDate().toString().padStart(2, "0");

const REPS = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "nombre",
        header: "Nombre",
        // size: 55,
        // enableResizing: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: "sexo",
        header: "Sexo",
        // size: 90,
        // enableResizing: false,
        // enableColumnFilter: false,
      },
      {
        accessorKey: "cargo",
        header: "Cargo desempeñado al momento de la sanción",
        // size: 150,
        // enableResizing: false,
        // enableColumnFilter: false,
      },
      {
        accessorKey: "ambito",
        header: "Ámbito Territorial",
        // size: 100,
        // enableResizing: false,
        // enableColumnFilter: false,
      },
      {
        accessorKey: "sentencia",
        header: "Datos de identificación de la sentencia",
        // size: 270,
        // enableResizing: false,
        // enableColumnFilter: false,
      },
      {
        accessorKey: "expediente",
        header: "No. de Expediente",
        // size: 270,
        // enableResizing: false,
        // enableColumnFilter: false,
      },
      {
        accessorKey: "autoridad",
        header: "Autoridad que la emite",
        // size: 100,
        // enableResizing: false,
        // enableColumnFilter: false,
      },
      {
        accessorKey: "conducta",
        header: "Conducta por la que se ejerció violencia",
        // size: 100,
        // enableResizing: false,
        // enableColumnFilter: false,
      },
      {
        accessorKey: "fecha",
        header: "Fecha de sentencia",
        // size: 100,
        // enableResizing: false,
        // enableColumnFilter: false,
      },
      {
        accessorKey: "sancion",
        header: "Sanción",
        // size: 100,
        // enableResizing: false,
        // enableColumnFilter: false,
      },
      {
        accessorKey: "permanenciaReg",
        header: "Permanencia en el registro",
        // size: 100,
        // enableResizing: false,
        // enableColumnFilter: false,
      },
      {
        accessorKey: "reincidencia",
        header: "Reincidencia de la conducta",
        // size: 100,
        // enableResizing: false,
        // enableColumnFilter: false,
      },
    ],
    []
  );
  return (
    <div className="REPS">
      <img
        src="https://itetlax.org.mx/assets/img/reps/1.png"
        alt="Registro Estatal de Personas Sancionadas en Materia de Violencia Política Contra las Mujeres en Razón de Género"
        className="img-fluid w-100"
      />
      <div className="mt-5 w-100 REPS__header">
        <div>
          <img
            src="https://itetlax.org.mx/assets/img/reps/2.png"
            alt="¿Qué es?"
            className="img-fluid w-100"
          />
        </div>
        <div>
          <h4 className="REPS__title">
            ¿QUÉ ES EL REGISTRO ESTATAL DE PERSONAS SANCIONADAS?
          </h4>
        </div>
      </div>
      <h4 className="REPS__title-dotter">ESTE REGISTRO CONTRIBUYE A:</h4>
      <ul className="REPS__para-que-sirve">
        <li> Inhibir este tipo de violencia.</li>
        <li>
          Concretar la reforma de 2020 sobre violencia política en razón de
          género.
        </li>
        <li>
          Facilitar la cooperación entre instituciones para la generación de
          información.
        </li>
        <li> Consultar la información previo al registro de candidaturas </li>
        <ul>
          <li>
            El Decreto 209 del Congreso del Estado estableció como requisito de
            elegibilidad para todos los cargos de elección popular, no estar
            condenada o condenado por el delito de violencia política contra las
            mujeres en razón de género (Ley de Instituciones y Procedimientos
            Electorales para el Estado de Tlaxcala, Artículo 17 fracción II).
          </li>
        </ul>
      </ul>
      <div className="mt-5 REPS__header">
        <div>
          <h4 className="REPS__title">
            Registro Estatal de Personas Sancionadas en Materia de Violencia
            Política contra las Mujeres en Razón de Género
          </h4>
        </div>
        <div className="REPS__header-reps-text pt-3 pb-3">
          Fecha de actualización: {day + "/" + month + "/" + year}
        </div>
      </div>
      <div className="mt-5 row mx-auto text-center text-light REPS__datos-publicos">
        <div className=" col-md-4 p-3 rounded-4">
          Total de Registros: <strong>{dataRegistros.length}</strong>
        </div>
        <div className="col-md-1"></div>
        <div className=" col-md-3 p-3 rounded-4">DATOS PÚBLICOS</div>
        <div className="col-md-1"></div>
        <div className=" col-md-3 p-3 rounded-4">
          Personas Sancionadas: <strong>0</strong>
        </div>
      </div>
      <br />
      <div id="tableREPS">
        <MaterialReactTable
          columns={columns}
          data={dataRegistros}
          // enableExpanding
          // enableExpandAll
          enableTopToolbar={false}
          enableBottomToolbar={false}
          enableColumnActions={false}
          enableColumnResizing
          enableDensityToggle={false}
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
            noRecordsToDisplay: "Sin registros",
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
      {/* <div className="mt-5 table-responsive REPS__table-public-data">
        <table className="mb-0 table table-bordered">
          <thead>
            <tr>
              <th className="align-middle" scope="col">
                Nombre
              </th>
              <th className="align-middle" scope="col">
                Sexo
              </th>
              <th className="align-middle" scope="col">
                Cargo desempeñado al momento de la sanción
              </th>
              <th className="align-middle" scope="col">
                Ámbito Territorial
              </th>
              <th className="align-middle" scope="col">
                Datos de identificación de la sentencia
              </th>
              <th className="align-middle" scope="col">
                No. de Expediente
              </th>
              <th className="align-middle" scope="col">
                Autoridad que la emite
              </th>
              <th className="align-middle" scope="col">
                Conducta por la que se ejerció violencia
              </th>
              <th className="align-middle" scope="col">
                Fecha de sentencia
              </th>
              <th className="align-middle" scope="col">
                Sanción
              </th>
              <th className="align-middle" scope="col">
                Permanencia en el registro
              </th>
              <th className="align-middle" scope="col">
                Reincidencia de la conducta
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div> */}
      <div className="mt-0 mb-5 REPS__sentencia"> SENTENCIA </div>
      <br />
      <br />
      <ul className="w-100 mt-5 nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="sXG-tab"
            data-bs-toggle="tab"
            data-bs-target="#sXG-tab-pane"
            type="button"
            role="tab"
            aria-controls="sXG-tab-pane"
            aria-selected="true"
          >
            Personas Sancionadas por Género
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="sXC-tab"
            data-bs-toggle="tab"
            data-bs-target="#sXC-tab-pane"
            type="button"
            role="tab"
            aria-controls="sXC-tab-pane"
            aria-selected="false"
          >
            Personas Sancionadas por Cargo
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="dVxC-tab"
            data-bs-toggle="tab"
            data-bs-target="#dVxC-tab-pane"
            type="button"
            role="tab"
            aria-controls="dVxC-tab-pane"
            aria-selected="false"
          >
            Distribución de Víctimas por Cargo
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="sXG-tab-pane"
          role="tabpanel"
          aria-labelledby="sXG-tab"
          tabIndex="0"
        >
          <div className="mt-5 row mx-auto text-center text-light REPS__datos-publicos">
            <div className=" col-md-4 p-3 rounded-4">
              Mujeres Sancionadas: <strong>0</strong>
            </div>
            <div className="col-md-1"></div>
            <div className=" col-md-3 p-3 rounded-4">
              Hombres Sancionados: <strong>0</strong>
            </div>
            <div className="col-md-1"></div>
            <div className=" col-md-3 p-3 rounded-4">
              Total: <strong>0</strong>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-2"></div>
            <div className="col-md-3 rounded-3 shadow p-0">
              <div className="bg-secondary bg-opacity-50 p-1 text-center text-dark border border-dark border-top-0 border-start-0 border-end-0 border-bottom-5">
                Total de Personas inscritas:{" "}
                <strong>{dataRegistros.length}</strong>
              </div>
              <div className="bg-secondary bg-opacity-10 text-center p-2">
                <img
                  src="https://itetlax.org.mx/assets/img/reps/3.png"
                  alt="Total de personas inscritas"
                  className="img-fluid w-75"
                />
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3 rounded-3 shadow p-0">
              <div className="bg-secondary bg-opacity-50 p-1 text-center text-dark border border-dark border-top-0 border-start-0 border-end-0 border-bottom-5">
                Sansiones por Género: <strong>{dataRegistros.length}</strong>
              </div>
              <div className="bg-secondary bg-opacity-10 text-center p-2">
                <img
                  src="https://itetlax.org.mx/assets/img/reps/4.png"
                  alt="Sanciones por género"
                  className="img-fluid w-75"
                />
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="sXC-tab-pane"
          role="tabpanel"
          aria-labelledby="sXC-tab"
          tabIndex="0"
        >
          <div className="mt-5 row mx-auto text-center text-light REPS__datos-publicos">
            <div className=" col-md-4 p-3 rounded-4">
              Mujeres Sancionadas: <strong>0</strong>
            </div>
            <div className="col-md-1"></div>
            <div className=" col-md-3 p-3 rounded-4">
              Hombres Sancionados: <strong>0</strong>
            </div>
            <div className="col-md-1"></div>
            <div className=" col-md-3 p-3 rounded-4">
              Total: <strong>0</strong>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="dVxC-tab-pane"
          role="tabpanel"
          aria-labelledby="dVxC-tab"
          tabIndex="0"
        >
          <div className="mt-5 row mx-auto text-center text-light REPS__datos-publicos">
            <div className=" col-md-4 p-3 rounded-4">
              Mujeres Sancionadas: <strong>0</strong>
            </div>
            <div className="col-md-1"></div>
            <div className=" col-md-3 p-3 rounded-4">
              Hombres Sancionados: <strong>0</strong>
            </div>
            <div className="col-md-1"></div>
            <div className=" col-md-3 p-3 rounded-4">
              Total: <strong>0</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary fst-italic w-100 mt-5 text-light text-center">
        NOTA: Al momento, no existen resoluciones en las que sea existente la
        infracción en Materia de Violencia Política contra las Mujeres en Razón
        de Género y existan personas Sancionadas.
      </div>
      <h4 className="REPS__title-dotter">INFORMACIÓN NORMATIVA:</h4>
      <div className="mt-5 row">
        <div className="col-md-6">
          <div className="REPS__enlances-card">
            <div className="REPS__enlaces-card-franja"></div>
            <div className="REPS__enlaces-card-body">
              Lineamientos para que los partidos políticos nacionales y, en su
              caso, los partidos políticos locales, prevengan, atiendan,
              sancionen, reparen y erradiquen la violencia política contra las
              mujeres en razón de género.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="REPS__enlances-card">
            <div className="REPS__enlaces-card-franja"></div>
            <div className="REPS__enlaces-card-body">
              Lineamientos para la integración, funcionamiento, actualización y
              conservación del Registro Estatal de personas sancionadas en
              materia de Violencia Política contra las Mujeres en Razón de
              Género del Instituto Tlaxcalteca de Elecciones.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 row">
        <div className="col-md-6">
          <div className="REPS__enlances-card mt-3">
            <div className="REPS__enlaces-card-franja"></div>
            <div className="REPS__enlaces-card-body">
              Reglamento de Quejas y Denuncias del Instituto Tlaxcalteca de
              Elecciones.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="REPS__enlances-card mt-3">
            <div className="REPS__enlaces-card-franja"></div>
            <div className="REPS__enlaces-card-body">
              Guía de actuación para la prevención, atención y erradicación de
              la Violencia Política en Razón de Género.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 mb-5 row">
        <div className="col-md-12">
          <div className="REPS__enlances-card mt-3">
            <div className="REPS__enlaces-card-franja"></div>
            <div className="REPS__enlaces-card-body">
              De conformidad con el <strong>Acuerdo INE/CG269/2020</strong>, por
              el que se aprobaron los Lineamientos para la integración,
              funcionamiento, actualización y conservación del Registro Nacional
              de Personas Sancionadas en Materia de Violencia Política contra
              las Mujeres en Razón de Género, en acatamiento a la sentencia
              dictada por la Sala Superior, en el expediente
              <strong>SUP-REC-91/2020</strong> y acumulado; y el{" "}
              <strong>Acuerdo ITE-CG 20/2021</strong> aprobado por el Consejo
              General del Instituto Tlaxcalteca de Elecciones, mediante el Anexo
              2 del mismo, se aprobó los Lineamientos para la integración,
              funcionamiento, actualización y conservación del Registro Estatal
              de Personas Sancionadas en materia de Violencia Política contra
              las Mujeres en Razón de Género del Instituto Tlaxcalteca de
              Elecciones.
            </div>
          </div>
        </div>
      </div>
      <h4 className="REPS__title-dotter">INFOGRAFÍAS:</h4>
      <CarouselVert>
        {dataInfografias.map((img) => (
          <CarouselVertItem key={img.id} link={img.link} alt={img.alt} />
        ))}
      </CarouselVert>
      <div className="fst-italic w-100">
        Fundamento: Lineamientos para la integración, funcionamiento,
        actualización y conservación del Registro Estatal de personas
        sancionadas en materia de Violencia Política contra las Mujeres en razón
        de género del Instituto Tlaxcalteca de Elecciones.
      </div>
    </div>
  );
};

export default REPS;
