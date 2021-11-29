import React, { useState, Suspense, lazy } from "react";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import datamobile from "../data/datamobile.json";
// import CalendarComponent from "./CalendarComponent";

const CalendarComponent = React.lazy(() => import("./CalendarComponent"));

export default function EventComponent() {
  // const [isActive, setActive] = useState(false);
  // const toggleClass = () => {
  //   setActive(!isActive);
  // };

  return (
    <div>
      {/* ###### EVENTS ###### */}
      <section id="programa" className="pt-5 events_section">
        <div className="a_novidades_title">
          <h1>
            <a
              href="./AF_PROGRAMA_Natal_digital_novo.pdf"
              // target="_blank"
              download
            >
              Download Programa
            </a>
          </h1>
        </div>

        <div className="pt-5"></div>

        {/* ##### FILTROS ##### */}

        <div class="container filtros">
          <div class="row">
            {/* TIPO DE EVENTO */}
            <div class="col-6  ">
              <div class="dropdown">
                <button
                  class="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tipo de Evento
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link class="dropdown-item" to="/musica">
                      Música
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/teatro">
                      Teatro
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/animacaoderua">
                      Animação de Rua
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/danca">
                      Dança
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/performance">
                      Performance
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/gastronomia">
                      Gastronomia
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/infantil">
                      Infantil
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/outrostipos">
                      Outros
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* LOCAL */}
            <div class="col-6">
              <div class="dropdown">
                <button
                  class="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Local
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link class="dropdown-item" to="/palcobraganatal">
                      Palco Braga é Natal
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/mercadomunicipal">
                      Praça - Mercado Municipal de Braga
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/castelo">
                      Edifício do Castelo
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/galeria">
                      Galeria do Paço
                    </a>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/biscainhos">
                      Museu dos Biscaínhos
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/vita">
                      Espaço Vita
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/centrojuventudebraga">
                      Centro de Juventude de Braga
                    </a>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/sfrutuoso">
                      Auditório S.Frutuoso
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/altice">
                      Altice Fórum Braga
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/biblioteca">
                      Biblioteca Lúcio Craveiro da Silva
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* MAP DATA */}
        {/* <div class="backDoor">
          <div class="door"></div>
        </div> */}

        <Suspense fallback={<div>A Carregar...</div>}>
          <CalendarComponent />
        </Suspense>

        {/* <CalendarComponent /> */}

        {/* <div className="container a_novidades mt-5 events_desktop">
          <div className="row">
            {" "}
            {data.map((evento) => {
              return (
                <div div className="col-lg-12">
                  <Link to={evento.href}>
                    <div className="evento-dia-calendario m-2" key={evento.id}>
                      <div>
                        <h1 className="mobile-letras-amarelo">
                          {evento.dia}{" "}
                          <span style={{ fontWeight: "900" }}>
                            {evento.mes}
                          </span>
                        </h1> */}
        {/* <img src={evento1}></img>  */}
        {/* <div className="col-4 evento_imagem"> */}
        {/* <img src={`${evento.imagem}`}></img> */}
        {/* </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* ##### MOBILE ##### */}
        {/* <div className="container a_novidades mt-5 events_mobile">
          <div className="row">
            {" "}
            {datamobile.map((evento) => {
              return (
                <div div className="col-lg-12">
                  <Link to={evento.href}>
                    <div className="evento-dia-calendario m-2" key={evento.id}>
                      <div>
                        <h1 className="mobile-letras-amarelo">
                          {evento.dia}{" "}
                          <span style={{ fontWeight: "900" }}>
                            {evento.mes}
                          </span>
                        </h1> */}
        {/* <img src={evento1}></img> */}
        {/* <div className="col-4 evento_imagem">
                      <img src={`${evento.imagem}`}></img>
                      
                    </div> */}
        {/* </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div> */}
      </section>
    </div>
  );
}
