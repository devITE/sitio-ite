//APP
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

//Layout
import Header from "./layout/header/Header.js";
import Navbar from "./layout/Navbar.js";
import Home from "./pages/Home.js";
import Footer from "./layout/Footer.js";

//Acerca de ITE
import FinesInstitucionales from "./pages/acercaITE/FinesInstitucionales.js";
import Historia from "./pages/acercaITE/Historia.js";
import PrincipiosRectores from "./pages/acercaITE/PrincipiosRectores.js";
import EstructuraOrganica from "./pages/acercaITE/EstructuraOrganica.js";

function App() {
  return (
    <Router>
      <Header></Header>
      <Navbar></Navbar>
      <div className="App__container">
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
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
