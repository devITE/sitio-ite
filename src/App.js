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

//Acuerdos
import AcuerdosAnteriores from "./pages/acuerdos/AcuerdosAnteriores";
import AcuerdosINE from "./pages/acuerdos/AcuerdosINE";
import Acuerdos2015 from "./pages/acuerdos/Acuerdos2015";
import Acuerdos2016 from "./pages/acuerdos/Acuerdos2016";
import Acuerdos2017 from "./pages/acuerdos/Acuerdos2017";
import Acuerdos2018 from "./pages/acuerdos/Acuerdos2018";
import Acuerdos2019 from "./pages/acuerdos/Acuerdos2019";
import Acuerdos2020 from "./pages/acuerdos/Acuerdos2020";
import Acuerdos2021 from "./pages/acuerdos/Acuerdos2021";
import Acuerdos2022 from "./pages/acuerdos/Acuerdos2022";

//Demarcaciones
import Acuerdos from "./pages/demarcaciones/Acuerdos";
import Mapas from "./pages/demarcaciones/Mapas";

//Transparencia
import Transparencia from "./pages/transparencia/Transparencia";
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
          <Route path="/Acuerdos2015" element={<Acuerdos2015 />} />
          <Route path="/Acuerdos2016" element={<Acuerdos2016 />} />
          <Route path="/Acuerdos2017" element={<Acuerdos2017 />} />
          <Route path="/Acuerdos2018" element={<Acuerdos2018 />} />
          <Route path="/Acuerdos2019" element={<Acuerdos2019 />} />
          <Route path="/Acuerdos2020" element={<Acuerdos2020 />} />
          <Route path="/Acuerdos2021" element={<Acuerdos2021 />} />
          <Route path="/Acuerdos2022" element={<Acuerdos2022 />} />

          {/* Demarcaciones */}
          <Route path="/Acuerdos" element={<Acuerdos />} />
          <Route path="/Mapas" element={<Mapas />} />

          {/* Transparencia */}
          <Route path="/Transparencia" element={<Transparencia />} />
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
