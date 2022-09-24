//APP
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Layout
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Home from "./pages/index/Home";
import Footer from "./layout/Footer";

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
import AcuerdosINE2015 from "./pages/acuerdos/acuerdosINE/AcuerdosINE2015";
import AcuerdosINE2016 from "./pages/acuerdos/acuerdosINE/AcuerdosINE2016";
import AcuerdosINE2020 from "./pages/acuerdos/acuerdosINE/AcuerdosINE2020";
import AcuerdosINE2021 from "./pages/acuerdos/acuerdosINE/AcuerdosINE2021";
import AcuerdosINE2022 from "./pages/acuerdos/acuerdosINE/AcuerdosINE2022";
import AcuerdosINE2023 from "./pages/acuerdos/acuerdosINE/AcuerdosINE2023";

//Acuerdos ITE
import AcuerdosAnteriores from "./pages/acuerdos/AcuerdosAnteriores";
import Acuerdos1998 from "./pages/acuerdos/acuerdosITE/Acuerdos1998";
import Acuerdos2001 from "./pages/acuerdos/acuerdosITE/Acuerdos2001";
import Acuerdos2002 from "./pages/acuerdos/acuerdosITE/Acuerdos2002";
import Acuerdos2003 from "./pages/acuerdos/acuerdosITE/Acuerdos2003";
import Acuerdos2004 from "./pages/acuerdos/acuerdosITE/Acuerdos2004";
import Acuerdos2005 from "./pages/acuerdos/acuerdosITE/Acuerdos2005";
import Acuerdos2006 from "./pages/acuerdos/acuerdosITE/Acuerdos2006";
import Acuerdos2007 from "./pages/acuerdos/acuerdosITE/Acuerdos2007";
import Acuerdos2008 from "./pages/acuerdos/acuerdosITE/Acuerdos2008";
import Acuerdos2009 from "./pages/acuerdos/acuerdosITE/Acuerdos2009";
import Acuerdos2010 from "./pages/acuerdos/acuerdosITE/Acuerdos2010";
import Acuerdos2011 from "./pages/acuerdos/acuerdosITE/Acuerdos2011";
import Acuerdos2012 from "./pages/acuerdos/acuerdosITE/Acuerdos2012";
import Acuerdos2013 from "./pages/acuerdos/acuerdosITE/Acuerdos2013";
import Acuerdos2014 from "./pages/acuerdos/acuerdosITE/Acuerdos2014";
import Acuerdos2015 from "./pages/acuerdos/acuerdosITE/Acuerdos2015";
import Acuerdos2016 from "./pages/acuerdos/acuerdosITE/Acuerdos2016";
import Acuerdos2017 from "./pages/acuerdos/acuerdosITE/Acuerdos2017";
import Acuerdos2018 from "./pages/acuerdos/acuerdosITE/Acuerdos2018";
import Acuerdos2019 from "./pages/acuerdos/acuerdosITE/Acuerdos2019";
import Acuerdos2020 from "./pages/acuerdos/acuerdosITE/Acuerdos2020";
import Acuerdos2021 from "./pages/acuerdos/acuerdosITE/Acuerdos2021";
import Acuerdos2022 from "./pages/acuerdos/acuerdosITE/Acuerdos2022";
import Acuerdos2023 from "./pages/acuerdos/acuerdosITE/Acuerdos2023";

//Demarcaciones
import Acuerdos from "./pages/demarcaciones/Acuerdos";
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

import Infografias from "./pages/transparencia/Infografias";
import PreguntasFrecuentes from "./pages/transparencia/PreguntasFrecuentes";
import DatosAbiertos from "./pages/transparencia/DatosAbiertos";

import ComunicacionSocial from "./pages/ComunicacionSocial";
import CulturaCivica from "./pages/CulturaCivica";

function App() {
  return (
    <Router>
      <Header></Header>
      <Navbar></Navbar>
      <div className="mt-3 App__container">
        <Routes>
          <Route exact path="/" element={<Home />} />

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

          {/* Acuerdos */}
          <Route path="/AcuerdosAnteriores" element={<AcuerdosAnteriores />} />
          <Route path="/AcuerdosINE" element={<AcuerdosINE />} />
          <Route path="/Acuerdos1998" element={<Acuerdos1998 />} />
          <Route path="/Acuerdos2001" element={<Acuerdos2001 />} />
          <Route path="/Acuerdos2002" element={<Acuerdos2002 />} />
          <Route path="/Acuerdos2003" element={<Acuerdos2003 />} />
          <Route path="/Acuerdos2004" element={<Acuerdos2004 />} />
          <Route path="/Acuerdos2005" element={<Acuerdos2005 />} />
          <Route path="/Acuerdos2006" element={<Acuerdos2006 />} />
          <Route path="/Acuerdos2007" element={<Acuerdos2007 />} />
          <Route path="/Acuerdos2008" element={<Acuerdos2008 />} />
          <Route path="/Acuerdos2009" element={<Acuerdos2009 />} />
          <Route path="/Acuerdos2010" element={<Acuerdos2010 />} />
          <Route path="/Acuerdos2011" element={<Acuerdos2011 />} />
          <Route path="/Acuerdos2012" element={<Acuerdos2012 />} />
          <Route path="/Acuerdos2013" element={<Acuerdos2013 />} />
          <Route path="/Acuerdos2014" element={<Acuerdos2014 />} />
          <Route path="/Acuerdos2015" element={<Acuerdos2015 />} />
          <Route path="/Acuerdos2016" element={<Acuerdos2016 />} />
          <Route path="/Acuerdos2017" element={<Acuerdos2017 />} />
          <Route path="/Acuerdos2018" element={<Acuerdos2018 />} />
          <Route path="/Acuerdos2019" element={<Acuerdos2019 />} />
          <Route path="/Acuerdos2020" element={<Acuerdos2020 />} />
          <Route path="/Acuerdos2021" element={<Acuerdos2021 />} />
          <Route path="/Acuerdos2022" element={<Acuerdos2022 />} />
          <Route path="/Acuerdos2023" element={<Acuerdos2023 />} />

          {/* Acuerdos INE */}
          <Route path="/AcuerdosINE2015" element={<AcuerdosINE2015 />} />
          <Route path="/AcuerdosINE2016" element={<AcuerdosINE2016 />} />
          <Route path="/AcuerdosINE2020" element={<AcuerdosINE2020 />} />
          <Route path="/AcuerdosINE2021" element={<AcuerdosINE2021 />} />
          <Route path="/AcuerdosINE2022" element={<AcuerdosINE2022 />} />
          <Route path="/AcuerdosINE2023" element={<AcuerdosINE2023 />} />

          {/* Demarcaciones */}
          <Route path="/Acuerdos" element={<Acuerdos />} />
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

          <Route path="/Infografias" element={<Infografias />} />
          <Route
            path="/PreguntasFrecuentes"
            element={<PreguntasFrecuentes />}
          />
          <Route path="/DatosAbiertos" element={<DatosAbiertos />} />

          <Route path="/ComunicacionSocial" element={<ComunicacionSocial />} />
          <Route path="/CulturaCivica" element={<CulturaCivica />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
