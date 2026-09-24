import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexto/AuthContexto";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Progreso from "./pages/Progreso";
import MedioAmbiente from "./pages/MedioAmbiente";
import LenguaMaya from "./pages/LenguaMaya";
import Saberes from "./pages/Saberes";
import ClasificaBasura from "./pages/ClasificaBasura";
import CenoteMenu from "./pages/CenoteMenu";
import SalvaElCenote from "./pages/SalvaElCenote";
import MemoramaCenote from "./pages/MemoramaCenote";
import ArbolMenu from "./pages/ArbolMenu";
import MapaSelva from "./pages/MapaSelva";
import TriviaArbol from "./pages/TriviaArbol";
import MenuFlotante from "./components/MenuFlotante";
import MilpaMenu from "./pages/MilpaMenu";
import AdivinaPlanta from "./pages/AdivinaPlanta";
import ConstruyeMilpa from "./pages/ConstruyeMilpa";
import PlantasMenu from "./pages/PlantasMenu";
import ExploraPlantas from "./pages/ExploraPlantas";
import IdentificaPlanta from "./pages/IdentificaPlanta";
import AprenderPalabras from "./pages/AprenderPalabras";
import TriviaMaya from "./pages/TriviaMaya";

function RutaProtegida({ children }) {
  const { usuario } = useAuth();
  return usuario ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RutaProtegida><Home /></RutaProtegida>} />
        <Route path="/progreso" element={<RutaProtegida><Progreso /></RutaProtegida>} />
        <Route path="/medio-ambiente" element={<RutaProtegida><MedioAmbiente /></RutaProtegida>} />
        <Route path="/lengua-maya" element={<RutaProtegida><LenguaMaya /></RutaProtegida>} />
        <Route path="/saberes" element={<RutaProtegida><Saberes /></RutaProtegida>} />
        <Route path="/game/reciclaje" element={<RutaProtegida><ClasificaBasura /></RutaProtegida>} />
        <Route path="/game/cenote" element={<RutaProtegida><CenoteMenu /></RutaProtegida>} />
        <Route path="/game/cenote/arrastra" element={<RutaProtegida><SalvaElCenote /></RutaProtegida>} />
        <Route path="/game/cenote/memorama" element={<RutaProtegida><MemoramaCenote /></RutaProtegida>} />
        <Route path="/game/arbol" element={<RutaProtegida><ArbolMenu /></RutaProtegida>} />
        <Route path="/game/arbol/mapa" element={<RutaProtegida><MapaSelva /></RutaProtegida>} />
        <Route path="/game/arbol/trivia" element={<RutaProtegida><TriviaArbol /></RutaProtegida>} />
        <Route path="/game/milpa" element={<RutaProtegida><MilpaMenu /></RutaProtegida>} />
        <Route path="/game/milpa/adivina" element={<RutaProtegida><AdivinaPlanta /></RutaProtegida>} />
        <Route path="/game/milpa/construye" element={<RutaProtegida><ConstruyeMilpa /></RutaProtegida>} />
        <Route path="/saberes/plantas" element={<RutaProtegida><PlantasMenu /></RutaProtegida>} />
        <Route path="/saberes/plantas/explora" element={<RutaProtegida><ExploraPlantas /></RutaProtegida>} />
        <Route path="/saberes/plantas/identifica" element={<RutaProtegida><IdentificaPlanta /></RutaProtegida>} />
        <Route path="/lengua-maya/palabras" element={<RutaProtegida><AprenderPalabras /></RutaProtegida>} />
<       Route path="/lengua-maya/trivia" element={<RutaProtegida><TriviaMaya /></RutaProtegida>} />
      </Routes>
      <MenuFlotante />
    </BrowserRouter>
  );
}

export default App;