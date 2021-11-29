import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VinteSeteNovembro from "./routes/VinteSeteNovembro";
import UmDezembro from "./routes/UmDezembro";
import DoisDezembro from "./routes/DoisDezembro";
import TresDezembro from "./routes/TresDezembro";
import QuatroDezembro from "./routes/QuatroDezembro";
import CincoDezembro from "./routes/CincoDezembro";
import SeisDezembro from "./routes/SeisDezembro";
import SeteDezembro from "./routes/SeteDezembro";
import OitoDezembro from "./routes/OitoDezembro";
import ScrollToTop from "./components/ScrollToTop";
import Musica from "./routes/TipoDeEvento/Musica";
import Teatro from "./routes/TipoDeEvento/Teatro";
import AnimacaoDeRua from "./routes/TipoDeEvento/AnimacaoDeRua";
import Danca from "./routes/TipoDeEvento/Danca";
import Performance from "./routes/TipoDeEvento/Performance";
import Gastronomia from "./routes/TipoDeEvento/Gastronomia";
import Infantil from "./routes/TipoDeEvento/Infantil";
import PalcoBragaNatal from "./routes/Local/PalcoBragaNatal";
import MercadoMunicipal from "./routes/Local/MercadoMunicipal";
import Castelo from "./routes/Local/Castelo";
import Galeria from "./routes/Local/Galeria";
import Biscainhos from "./routes/Local/Biscainhos";
import Vita from "./routes/Local/Vita";
import CentroJuventudeBraga from "./routes/Local/CentroJuventudeBraga";
import SFrutuoso from "./routes/Local/SFrutuoso";
import Altice from "./routes/Local/Altice";
import Biblioteca from "./routes/Local/Biblioteca";
import OutrosTipos from "./routes/Local/OutrosTipos";
import NoveDezembro from "./routes/NoveDezembro";
import DezDezembro from "./routes/DezDezembro";
import OnzeDezembro from "./routes/OnzeDezembro";
import DozeDezembro from "./routes/DozeDezembro";
import TrezeDezembro from "./routes/TrezeDezembro";
import CatorzeDezembro from "./routes/CatorzeDezembro";
import QuinzeDezembro from "./routes/QuinzeDezembro";
import DezasseisDezembro from "./routes/DezasseisDezembro";
import DezasseteDezembro from "./routes/DezasseteDezembro";
import DezoitoDezembro from "./routes/DezoitoDezembro";
import DezanoveDezembro from "./routes/DezanoveDezembro";
import VinteDezembro from "./routes/VinteDezembro";
import VinteUmDezembro from "./routes/VinteUmDezembro";
import VinteDoisDezembro from "./routes/VinteDoisDezembro";
import VinteTresDezembro from "./routes/VinteTresDezembro";
import VinteQuatroDezembro from "./routes/VinteQuatroDezembro";
import DoisJaneiro from "./routes/DoisJaneiro";
import SeisJaneiro from "./routes/SeisJaneiro";
import OitoJaneiro from "./routes/OitoJaneiro";
import NovaJaneiro from "./routes/NoveJaneiro";
import VinteDoisJaneiro from "./routes/VinteDoisJaneiro";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="vintesetenovembro" element={<VinteSeteNovembro />} />
      <Route path="umdezembro" element={<UmDezembro />} />
      <Route path="doisdezembro" element={<DoisDezembro />} />
      <Route path="tresdezembro" element={<TresDezembro />} />
      <Route path="quatrodezembro" element={<QuatroDezembro />} />
      <Route path="cincodezembro" element={<CincoDezembro />} />
      <Route path="seisdezembro" element={<SeisDezembro />} />
      <Route path="setedezembro" element={<SeteDezembro />} />
      <Route path="oitodezembro" element={<OitoDezembro />} />
      <Route path="novedezembro" element={<NoveDezembro />} />
      <Route path="dezdezembro" element={<DezDezembro />} />
      <Route path="onzedezembro" element={<OnzeDezembro />} />
      <Route path="dozedezembro" element={<DozeDezembro />} />
      <Route path="trezedezembro" element={<TrezeDezembro />} />
      <Route path="catorzedezembro" element={<CatorzeDezembro />} />
      <Route path="quinzedezembro" element={<QuinzeDezembro />} />
      <Route path="dezasseisdezembro" element={<DezasseisDezembro />} />
      <Route path="dezassetedezembro" element={<DezasseteDezembro />} />
      <Route path="dezoitodezembro" element={<DezoitoDezembro />} />
      <Route path="dezanovedezembro" element={<DezanoveDezembro />} />
      <Route path="vintedezembro" element={<VinteDezembro />} />
      <Route path="vinteumdezembro" element={<VinteUmDezembro />} />
      <Route path="vintedoisdezembro" element={<VinteDoisDezembro />} />
      <Route path="vintetresdezembro" element={<VinteTresDezembro />} />
      <Route path="vintequatrodezembro" element={<VinteQuatroDezembro />} />
      <Route path="doisjaneiro" element={<DoisJaneiro />} />
      <Route path="seisjaneiro" element={<SeisJaneiro />} />
      <Route path="oitojaneiro" element={<OitoJaneiro />} />
      <Route path="novejaneiro" element={<NovaJaneiro />} />
      <Route path="vintedoisjaneiro" element={<VinteDoisJaneiro />} />

      <Route path="musica" element={<Musica />} />
      <Route path="teatro" element={<Teatro />} />
      <Route path="animacaoderua" element={<AnimacaoDeRua />} />
      <Route path="danca" element={<Danca />} />
      <Route path="performance" element={<Performance />} />
      <Route path="gastronomia" element={<Gastronomia />} />
      <Route path="infantil" element={<Infantil />} />
      <Route path="palcobraganatal" element={<PalcoBragaNatal />} />
      <Route path="mercadomunicipal" element={<MercadoMunicipal />} />
      <Route path="castelo" element={<Castelo />} />
      <Route path="galeria" element={<Galeria />} />
      <Route path="biscainhos" element={<Biscainhos />} />
      <Route path="vita" element={<Vita />} />
      <Route path="centrojuventudebraga" element={<CentroJuventudeBraga />} />
      <Route path="sfrutuoso" element={<SFrutuoso />} />
      <Route path="altice" element={<Altice />} />
      <Route path="biblioteca" element={<Biblioteca />} />
      <Route path="outrostipos" element={<OutrosTipos />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
