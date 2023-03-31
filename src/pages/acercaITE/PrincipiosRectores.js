import React, { useEffect } from "react";
import TitlePages from "../../layout/TitlePages";
import "./PrincipiosRectores.css";

const PrincipiosRectores = () => {
  useEffect(() => {
    document.title = `Principios Rectores`;
  }, []);
    return (
      <>
        <TitlePages title="Principios Rectores" subTitle="" />

        <p>
          La Constitución Política del Estado de Tlaxcala en su artículo 95
          señala que el Instituto Tlaxcalteca de Elecciones, cumplirá sus
          funciones bajo los principios de constitucionalidad, legalidad,
          imparcialidad, objetividad, equidad, certeza, profesionalismo,
          independencia y máxima publicidad.
        </p>
        <p>
          De la misma manera, el artículo 2 de la Ley de Instituciones y
          Procedimientos para el Estado de Tlaxcala establece como principios
          rectores en el ejercicio de la función electoral, la
          constitucionalidad, legalidad, certeza, autonomía, independencia,
          imparcialidad, equidad, objetividad, profesionalismo y máxima
          publicidad
        </p>

        <div className="PrincipiosRectores">
          <div className="bg-ite"> </div>
          <div>
            <h4>Constitucionalidad</h4>
            Referido al apego escrupuloso que mantiene el Instituto en el
            mandato constitucional para el ejercicio de sus atribuciones y el
            desempeño de las funciones encomendadas.
          </div>
        </div>
        <div className="PrincipiosRectores mt-3">
          <div className="bg-ite"> </div>
          <div>
            <h4>Legalidad</h4>
            El Instituto Tlaxcalteca de Elecciones debe observar
            escrupulosamente el mandato constitucional en el ejercicio de las
            atribuciones y el desempeño de las funciones que tiene encomendadas,
            así como las disposiciones legales que lo reglamentan.
          </div>
        </div>
        <div className="PrincipiosRectores mt-3">
          <div className="bg-ite"> </div>
          <div>
            <h4>Certeza</h4>
            Todas las acciones que desempeñe el Instituto Tlaxcalteca de
            Elecciones estarán dotadas de veracidad, certidumbre y apego a los
            hechos, esto es, que los resultados de sus actividades sean
            completamente verificables, fidedignos y confiables.
          </div>
        </div>
        <div className="PrincipiosRectores mt-3">
          <div className="bg-ite"> </div>
          <div>
            <h4>Autonomía</h4>
            Se establece como la facultad que le otorga la ley al Instituto
            Tlaxcalteca de Elecciones, que le permite actuar, hacer o decidir en
            la deliberación de sus procesos y desarrollo de sus actividades en
            apego a las normas y leyes que lo reglamentan.
          </div>
        </div>
        <div className="PrincipiosRectores mt-3">
          <div className="bg-ite"> </div>
          <div>
            <h4>Independencia</h4>
            Es la garantía que disponen las autoridades que conforman la
            Institución para que sus procesos de deliberación y toma de
            decisiones se den con absoluta libertad y respondan única y
            exclusivamente al imperio de la ley.Es la garantía que disponen las
            autoridades que conforman la Institución para que sus procesos de
            deliberación y toma de decisiones se den con absoluta libertad y
            respondan única y exclusivamente al imperio de la ley.
          </div>
        </div>
        <div className="PrincipiosRectores mt-3">
          <div className="bg-ite"> </div>
          <div>
            <h4 className="text-strong">Imparcialidad</h4>
            En el desarrollo de sus actividades, el Instituto Tlaxcalteca de
            Elecciones debe reconocer y velar permanentemente por el interés de
            la sociedad y por los valores fundamentales de la democracia,
            supeditando a éstos, de manera irrestricta, cualquier interés
            personal o preferencia política.
          </div>
        </div>
        <div className="PrincipiosRectores mt-3">
          <div className="bg-ite"> </div>
          <div>
            <h4>Equidad</h4>
            Es considerada como un instrumento del derecho que permite la
            aplicación de las disposiciones legales a casos concretos, en un
            estricto sentido de justicia e imparcialidad.
          </div>
        </div>
        <div className="PrincipiosRectores mt-3">
          <div className="bg-ite"> </div>
          <div>
            <h4>Objetividad</h4>
            La objetividad implica al Instituto Tlaxcalteca de Elecciones un
            quehacer institucional fundado en el reconocimiento coherente y
            razonado de la realidad sobre la que se actúa y la obligación de
            percibir e interpretar los hechos por encima de visiones y
            opiniones, parciales o unilaterales, máxime si éstas pueden alterar
            la expresión o consecuencia del quehacer del Instituto.
          </div>
        </div>
        <div className="PrincipiosRectores mt-3">
          <div className="bg-ite"> </div>
          <div>
            <h4>Profesionalismo</h4>
            Se establece como una condición que mantiene el Instituto
            Tlaxcalteca de elecciones en el desarrollo de sus actividades en
            base a la eficacia, aplicación, seriedad, honradez y pericia.
          </div>
        </div>
        <div className="PrincipiosRectores mt-3">
          <div className="bg-ite"> </div>
          <div>
            <h4>Máxima Publicidad</h4>
            Todos los actos y la información en poder del Instituto Tlaxcalteca
            de Elecciones son públicos y sólo por excepción se podrán reservar
            en los casos expresamente previstos por las leyes y justificados
            bajo determinadas circunstancias.
          </div>
        </div>
        <div className="PrincipiosRectores mt-3">
          <div className="bg-ite"> </div>
          <div>
            <h4>Paridad</h4>
            La paridad es un principio constitucional que tiene como finalidad
            la igualdad sustantiva entre los sexos, que adopta nuestro país como
            parte de los compromisos internacionales que ha adquirido con el
            objeto de que los derechos político electorales de las y los
            ciudadanos se ejerzan en condiciones de igualdad.
          </div>
        </div>
      </>
    );
  }
  export default PrincipiosRectores;

