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
import props from "prop-types";
import ScrollToTop from "./components/ScrollToTop";

function Page() {
  return <div style={{ overflowY: "scroll" }}>{props.children}</div>;
}

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
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
