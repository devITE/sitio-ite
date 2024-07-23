//APP
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Layout
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Home from "./pages/index/Home";
import Footer from "./layout/Footer";

//Enlaces
import ProcesosElectorales from "./pages/enlaces/ProcesosElectorales/ProcesosElectorales";
import HistorialPE from "./pages/enlaces/ProcesosElectorales/HistorialPE";
import PE20152016 from "./pages/enlaces/ProcesosElectorales/PE20152016";
import PEE2017 from "./pages/enlaces/ProcesosElectorales/PEE2017";
import PE2018 from "./pages/enlaces/ProcesosElectorales/PE2018";
import PE20202021 from "./pages/enlaces/ProcesosElectorales/PE20202021";
import PE20232024 from "./pages/enlaces/ProcesosElectorales/PE20232024";
import Normatividad from "./pages/enlaces/Normatividad";
import Galeria from "./pages/enlaces/Galeria/Galeria";
import Galeria2016 from "./pages/enlaces/Galeria/Galeria2016";
import Galeria2017 from "./pages/enlaces/Galeria/Galeria2017";
import Galeria2018 from "./pages/enlaces/Galeria/Galeria2018";
import Galeria2019 from "./pages/enlaces/Galeria/Galeria2019";

import OIC from "./pages/enlaces/OIC/OIC";
import GaleriaOIC from "./pages/enlaces/OIC/GaleriaOIC";
import Infografias from "./pages/enlaces/Infografias";
import MemoriasElectorales from "./pages/enlaces/MemoriasElectorales";
import MetasMSPEN from "./pages/enlaces/MetasMSPEN";
import PartidosPoliticos from "./pages/enlaces/PartidosPoliticos";
import PersonasDiscapacidad from "./pages/enlaces/PersonasDiscapacidad";
import Informes from "./pages/enlaces/Informes";
import InformesAnualesITE from "./pages/enlaces/InformesAnualesITE";

//Acerca de ITE
import FinesInstitucionales from "./pages/acercaITE/FinesInstitucionales";
import Historia from "./pages/acercaITE/Historia";
import PrincipiosRectores from "./pages/acercaITE/PrincipiosRectores";
import EstructuraOrganica from "./pages/acercaITE/EstructuraOrganica";

//Consejo General
import Integracion from "./pages/consejoGeneral/Integracion";
import Comisiones from "./pages/consejoGeneral/Comisiones";
import JGE from "./pages/consejoGeneral/JGE";
import Estructura from "./pages/consejoGeneral/Estructura";

//Acuerdos INE
import AcuerdosINE from "./pages/acuerdos/acuerdosINE/AcuerdosINE";
import AcuerdosINE2024 from "./pages/acuerdos/acuerdosINE/AcuerdosINE2024";
import AcuerdosTableINE from "./pages/acuerdos/acuerdosINE/AcuerdosTableINE";

//Acuerdos ITE
import AcuerdosAnteriores from "./pages/acuerdos/AcuerdosAnteriores";
import AcuerdosTableITE from "./pages/acuerdos/acuerdosITE/AcuerdosTableITE";
import Acuerdos2001 from "./pages/acuerdos/acuerdosITE/Acuerdos2001";
import Acuerdos2002 from "./pages/acuerdos/acuerdosITE/Acuerdos2002";
import Acuerdos2010 from "./pages/acuerdos/acuerdosITE/Acuerdos2010";
import Acuerdos2011 from "./pages/acuerdos/acuerdosITE/Acuerdos2011";
import Acuerdos2013 from "./pages/acuerdos/acuerdosITE/Acuerdos2013";
import Acuerdos2014 from "./pages/acuerdos/acuerdosITE/Acuerdos2014";
import Acuerdos2024 from "./pages/acuerdos/acuerdosITE/Acuerdos2024";

//Demarcaciones
import Acuerdos from "./pages/demarcaciones/Acuerdos";
import Distritacion2015 from "./pages/demarcaciones/Distritacion2015";
import Distritacion2022 from "./pages/demarcaciones/Distritacion2022";
import Mapas from "./pages/demarcaciones/Mapas";

//Transparencia
import Transparencia from "./pages/transparencia/Transparencia";

//Transparencia Artículo 63
import Articulo63 from "./pages/transparencia/art63/Articulo63";
import Art632017 from "./pages/transparencia/art63/Art632017";
import Art632018 from "./pages/transparencia/art63/Art632018";
import Art632019 from "./pages/transparencia/art63/Art632019";
import Art632020 from "./pages/transparencia/art63/Art632020";
import Art632021 from "./pages/transparencia/art63/Art632021";
import Art632022 from "./pages/transparencia/art63/Art632022";
import Art632023 from "./pages/transparencia/art63/Art632023";
import Art632024 from "./pages/transparencia/art63/Art632024";

//Transparencia Artículo 67
import Articulo67 from "./pages/transparencia/art67/Articulo67";
import Art672017 from "./pages/transparencia/art67/Art672017";
import Art672018 from "./pages/transparencia/art67/Art672018";
import Art672019 from "./pages/transparencia/art67/Art672019";
import Art672020 from "./pages/transparencia/art67/Art672020";
import Art672021 from "./pages/transparencia/art67/Art672021";
import Art672022 from "./pages/transparencia/art67/Art672022";
import Art672023 from "./pages/transparencia/art67/Art672023";
import Art672024 from "./pages/transparencia/art67/Art672024";

//Transparencia Artículo 94
import Articulo94 from "./pages/transparencia/art94/Articulo94";
import Art94Table from "./pages/transparencia/art94/Art94Table";

//Transparencia General
import Convenios from "./pages/transparencia/transp/Convenios";
import InformesAnuales from "./pages/transparencia/transp/InformesAnuales";
import AvisosPrivacidad from "./pages/transparencia/transp/AvisosPrivacidad";
import FormatoSolicitud from "./pages/transparencia/transp/FormatoSolicitud";
import POA from "./pages/transparencia/transp/POA";
import InformacionFinanciera from "./pages/transparencia/transp/InformacionFinanciera";
import InformacionContable from "./pages/transparencia/transp/InformacionContable";

import PreguntasFrecuentes from "./pages/transparencia/PreguntasFrecuentes";
import DatosAbiertos from "./pages/transparencia/DatosAbiertos";

//Comunicacion Social
import ComunicacionSocial from "./pages/comunicacionSocial/ComunicacionSocial";
import Boletines from "./pages/comunicacionSocial/boletines/Boletines";
import BoletinesTable from "./pages/comunicacionSocial/boletines/BoletinesTable";

import Monitoreo from "./pages/comunicacionSocial/monitoreos/Monitoreo";
import MonitoreosTable from "./pages/comunicacionSocial/monitoreos/MonitoreosTable";
import Monitoreos2024 from "./pages/comunicacionSocial/monitoreos/Monitoreos2024";

import ITEConecta from "./pages/comunicacionSocial/ITEConecta";

//Cultura Cívica
import CulturaCivica from "./pages/culturaCivica/CulturaCivica";
import ActividadesLudicas from "./pages/culturaCivica/ActividadesLudicas";
import EleccionesEscolares from "./pages/culturaCivica/EleccionesEscolares";
import ParlamentoInfantil from "./pages/culturaCivica/ParlamentoInfantil";
import ParlamentoJuvenil from "./pages/culturaCivica/ParlamentoJuvenil";
import ValoresDemocracia from "./pages/culturaCivica/ValoresDemocracia";

//Archivo
import InfografiasArchivo from "./pages/archivo/InfografiasArchivo";
import InstrumentosArchivisticos from "./pages/archivo/InstrumentosArchivisticos";
import InstrumentosNormativos from "./pages/archivo/InstrumentosNormativos";
import PlaneacionArchivistica from "./pages/archivo/PlaneacionArchivistica";

//Convocatorias

import ConvocatoriasApartado from "./pages/ConvocatoriasApartado/ConvocatoriasApartado";

//Micrositios
import REPS from "./pages/reps/REPS";

//Memoria Electoral
import MemoriaElectoral20202021 from "./pages/memElect2023/MemoriaElectoral20202021";
import EstradosElectronicos from "./pages/EstradosElectronicos/EstradosElectronicos";
import NotFound from "./layout/NotFound";

function App() {
  return (
    <Router>
      <Header></Header>
      <Navbar></Navbar>
      <div className="mt-3 App__container">
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route exact path="/" element={<Home />} />

          {/* Enlaces */}
          <Route
            path="/ProcesosElectorales"
            element={<ProcesosElectorales />}
          />
          <Route path="/PE20152016" element={<PE20152016 />} />
          <Route path="/PEE2017" element={<PEE2017 />} />
          <Route path="/PE2018" element={<PE2018 />} />
          <Route path="/PE20202021" element={<PE20202021 />} />
          <Route path="/PE20232024" element={<PE20232024 />} />
          <Route path="/HistorialPE" element={<HistorialPE />} />
          <Route path="/Normatividad" element={<Normatividad />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Galeria2016" element={<Galeria2016 />} />
          <Route path="/Galeria2017" element={<Galeria2017 />} />
          <Route path="/Galeria2018" element={<Galeria2018 />} />
          <Route path="/Galeria2019" element={<Galeria2019 />} />
          <Route path="/OIC" element={<OIC />} />
          <Route path="/GaleriaOIC" element={<GaleriaOIC />} />
          <Route path="/Infografias" element={<Infografias />} />
          <Route
            path="/MemoriasElectorales"
            element={<MemoriasElectorales />}
          />
          <Route path="/MetasMSPEN" element={<MetasMSPEN />} />
          <Route path="/PartidosPoliticos" element={<PartidosPoliticos />} />
          <Route
            path="/PersonasDiscapacidad"
            element={<PersonasDiscapacidad />}
          />
          <Route path="/Informes" element={<Informes />} />
          <Route path="/InformesAnualesITE" element={<InformesAnualesITE />} />

          {/* Acerca de ITE */}
          <Route
            path="/FinesInstitucionales"
            element={<FinesInstitucionales />}
          />
          <Route path="/Historia" element={<Historia />} />
          <Route path="/PrincipiosRectores" element={<PrincipiosRectores />} />
          <Route path="/EstructuraOrganica" element={<EstructuraOrganica />} />

          {/* Consejo General */}
          <Route path="/Integracion" element={<Integracion />} />
          <Route path="/Comisiones" element={<Comisiones />} />
          <Route path="/JGE" element={<JGE />} />
          <Route path="/Estructura" element={<Estructura />} />

          {/* Acuerdos ITE */}
          <Route path="/AcuerdosAnteriores" element={<AcuerdosAnteriores />} />
          <Route path="/AcuerdosINE" element={<AcuerdosINE />} />
          <Route
            path="/Acuerdos1998"
            element={<AcuerdosTableITE year="1998" />}
          />
          <Route path="/Acuerdos2001" element={<Acuerdos2001 />} />
          <Route path="/Acuerdos2002" element={<Acuerdos2002 />} />
          <Route
            path="/Acuerdos2003"
            element={<AcuerdosTableITE year="2003" />}
          />
          <Route
            path="/Acuerdos2004"
            element={<AcuerdosTableITE year="2004" />}
          />
          <Route
            path="/Acuerdos2005"
            element={<AcuerdosTableITE year="2005" />}
          />
          <Route
            path="/Acuerdos2006"
            element={<AcuerdosTableITE year="2006" />}
          />
          <Route
            path="/Acuerdos2007"
            element={<AcuerdosTableITE year="2007" />}
          />
          <Route
            path="/Acuerdos2008"
            element={<AcuerdosTableITE year="2008" />}
          />
          <Route
            path="/Acuerdos2009"
            element={<AcuerdosTableITE year="2009" />}
          />
          <Route path="/Acuerdos2010" element={<Acuerdos2010 />} />
          <Route path="/Acuerdos2011" element={<Acuerdos2011 />} />
          <Route
            path="/Acuerdos2012"
            element={<AcuerdosTableITE year="2012" />}
          />
          <Route path="/Acuerdos2013" element={<Acuerdos2013 />} />
          <Route path="/Acuerdos2014" element={<Acuerdos2014 />} />
          <Route
            path="/Acuerdos2015"
            element={<AcuerdosTableITE year="2015" />}
          />
          <Route
            path="/Acuerdos2016"
            element={<AcuerdosTableITE year="2016" />}
          />
          <Route
            path="/Acuerdos2017"
            element={<AcuerdosTableITE year="2017" />}
          />
          <Route
            path="/Acuerdos2018"
            element={<AcuerdosTableITE year="2018" />}
          />
          <Route
            path="/Acuerdos2019"
            element={<AcuerdosTableITE year="2019" />}
          />
          <Route
            path="/Acuerdos2020"
            element={<AcuerdosTableITE year="2020" />}
          />
          <Route
            path="/Acuerdos2021"
            element={<AcuerdosTableITE year="2021" />}
          />
          <Route
            path="/Acuerdos2022"
            element={<AcuerdosTableITE year="2022" />}
          />
          <Route
            path="/Acuerdos2023"
            element={<AcuerdosTableITE year="2023" />}
          />
          <Route path="/Acuerdos2024" element={<Acuerdos2024 />} />

          {/* Acuerdos INE */}
          <Route
            path="/AcuerdosINE2015"
            element={<AcuerdosTableINE year="2015" />}
          />
          <Route
            path="/AcuerdosINE2016"
            element={<AcuerdosTableINE year="2016" />}
          />
          <Route
            path="/AcuerdosINE2020"
            element={<AcuerdosTableINE year="2020" />}
          />
          <Route
            path="/AcuerdosINE2021"
            element={<AcuerdosTableINE year="2021" />}
          />
          <Route
            path="/AcuerdosINE2022"
            element={<AcuerdosTableINE year="2022" />}
          />
          <Route
            path="/AcuerdosINE2023"
            element={<AcuerdosTableINE year="2023" />}
          />

          <Route path="/AcuerdosINE2024" element={<AcuerdosINE2024 />} />

          {/* Demarcaciones */}
          <Route path="/Acuerdos" element={<Acuerdos />} />
          <Route path="/Distritacion2015" element={<Distritacion2015 />} />
          <Route path="/Distritacion2022" element={<Distritacion2022 />} />
          <Route path="/Mapas" element={<Mapas />} />

          {/* Transparencia */}
          <Route path="/Transparencia" element={<Transparencia />} />

          {/* Artículo 63 */}
          <Route path="/Articulo63" element={<Articulo63 />} />
          <Route path="/Art632017" element={<Art632017 />} />
          <Route path="/Art632018" element={<Art632018 />} />
          <Route path="/Art632019" element={<Art632019 />} />
          <Route path="/Art632020" element={<Art632020 />} />
          <Route path="/Art632021" element={<Art632021 />} />
          <Route path="/Art632022" element={<Art632022 />} />
          <Route path="/Art632023" element={<Art632023 />} />
          <Route path="/Art632024" element={<Art632024 />} />

          {/* Artículo 67 */}
          <Route path="/Articulo67" element={<Articulo67 />} />
          <Route path="/Art672017" element={<Art672017 />} />
          <Route path="/Art672018" element={<Art672018 />} />
          <Route path="/Art672019" element={<Art672019 />} />
          <Route path="/Art672020" element={<Art672020 />} />
          <Route path="/Art672021" element={<Art672021 />} />
          <Route path="/Art672022" element={<Art672022 />} />
          <Route path="/Art672023" element={<Art672023 />} />
          <Route path="/Art672024" element={<Art672024 />} />

          {/* Artículo 94 */}
          <Route path="/Articulo94" element={<Articulo94 />} />
          <Route path="/Art942020" element={<Art94Table year="2020" />} />
          <Route path="/Art942021" element={<Art94Table year="2021" />} />

          {/* Transparencia General */}
          <Route path="/Convenios" element={<Convenios />} />
          <Route path="/InformesAnuales" element={<InformesAnuales />} />
          <Route path="/AvisosPrivacidad" element={<AvisosPrivacidad />} />
          <Route path="/FormatoSolicitud" element={<FormatoSolicitud />} />
          <Route path="/POA" element={<POA />} />
          <Route
            path="/InformacionFinanciera"
            element={<InformacionFinanciera />}
          />
          <Route
            path="/InformacionContable"
            element={<InformacionContable />}
          />
          <Route path="/Infografias" element={<Infografias />} />
          <Route
            path="/PreguntasFrecuentes"
            element={<PreguntasFrecuentes />}
          />
          <Route path="/DatosAbiertos" element={<DatosAbiertos />} />

          <Route path="/ComunicacionSocial" element={<ComunicacionSocial />} />
          <Route path="/Boletines" element={<Boletines />} />
          <Route
            path="/Boletines2015"
            element={<BoletinesTable year="2015" />}
          />
          <Route
            path="/Boletines2016"
            element={<BoletinesTable year="2016" />}
          />
          <Route
            path="/Boletines2017"
            element={<BoletinesTable year="2017" />}
          />
          <Route
            path="/Boletines2019"
            element={<BoletinesTable year="2019" />}
          />
          <Route
            path="/Boletines2020"
            element={<BoletinesTable year="2020" />}
          />
          <Route
            path="/Boletines2021"
            element={<BoletinesTable year="2021" />}
          />
          <Route
            path="/Boletines2022"
            element={<BoletinesTable year="2022" />}
          />
          <Route
            path="/Boletines2023"
            element={<BoletinesTable year="2023" />}
          />
          <Route
            path="/Boletines2024"
            element={<BoletinesTable year="2024" />}
          />

          <Route path="/Monitoreo" element={<Monitoreo />} />
          <Route
            path="/Monitoreos2015"
            element={<MonitoreosTable year="2015" />}
          />
          <Route
            path="/Monitoreos2016"
            element={<MonitoreosTable year="2016" />}
          />
          <Route
            path="/Monitoreos2017"
            element={<MonitoreosTable year="2017" />}
          />
          <Route
            path="/Monitoreos2018"
            element={<MonitoreosTable year="2018" />}
          />
          <Route
            path="/Monitoreos2020"
            element={<MonitoreosTable year="2020" />}
          />
          <Route
            path="/Monitoreos2021"
            element={<MonitoreosTable year="2021" />}
          />
          <Route
            path="/Monitoreos2023"
            element={<MonitoreosTable year="2023" />}
          />
          <Route path="/Monitoreos2024" element={<Monitoreos2024 />} />

          <Route path="/ITEConecta" element={<ITEConecta />} />
          <Route path="/CulturaCivica" element={<CulturaCivica />} />
          <Route path="/ActividadesLudicas" element={<ActividadesLudicas />} />
          <Route
            path="/EleccionesEscolares"
            element={<EleccionesEscolares />}
          />
          <Route path="/ParlamentoInfantil" element={<ParlamentoInfantil />} />
          <Route path="/ParlamentoJuvenil" element={<ParlamentoJuvenil />} />
          <Route path="/ValoresDemocracia" element={<ValoresDemocracia />} />

          {/* Archivo */}
          <Route path="/InfografiasArchivo" element={<InfografiasArchivo />} />
          <Route
            path="/InstrumentosArchivisticos"
            element={<InstrumentosArchivisticos />}
          />
          <Route
            path="/InstrumentosNormativos"
            element={<InstrumentosNormativos />}
          />
          <Route
            path="/PlaneacionArchivistica"
            element={<PlaneacionArchivistica />}
          />

          {/* Convocatorias */}
          <Route
            path="/ConvocatoriasApartado"
            element={<ConvocatoriasApartado />}
          />

          {/* Estrados Electrónicos */}
          <Route
            path="/EstradosElectronicos"
            element={<EstradosElectronicos />}
          />

          {/* Micrositios */}
          <Route path="/REPS" element={<REPS />} />

          {/* MemoriaElectoral20202021 */}
          <Route
            path="/MemoriaElectoral20202021"
            element={<MemoriaElectoral20202021 />}
          />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
