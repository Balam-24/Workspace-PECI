import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuFlotante from "./components/MenuFlotante";

import Home from "./pages/Home";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medio-ambiente" element={<MedioAmbiente />} />
        <Route path="/lengua-maya" element={<LenguaMaya />} />
        <Route path="/saberes" element={<Saberes />} />
        <Route path="/game/reciclaje" element={<ClasificaBasura />} />
        <Route path="/game/cenote" element={<CenoteMenu />} />
        <Route path="/game/cenote/arrastra" element={<SalvaElCenote />} />
        <Route path="/game/cenote/memorama" element={<MemoramaCenote />} />
        <Route path="/game/arbol" element={<ArbolMenu />} />
        <Route path="/game/arbol/mapa" element={<MapaSelva />} />
        <Route path="/game/arbol/trivia" element={<TriviaArbol />} />
      </Routes>

      {/* Aparece en todas las páginas */}
      <MenuFlotante />
    </BrowserRouter>
  );
}

export default App;