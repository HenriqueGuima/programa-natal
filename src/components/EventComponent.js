import React from "react";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import datamobile from "../data/datamobile.json";

export default function EventComponent(props) {
  return (
    <div>
      {/* ###### EVENTS ###### */}
      <section id="programa" className="pt-5 events_section">
        <div className="a_novidades_title">
          <h1>
            <a
              href="./AF_PROGRAMA_Natal_digital.pdf"
              // target="_blank"
              download
            >
              Download Programa
            </a>
          </h1>
        </div>

        {/* MAP DATA */}
        <div className="container a_novidades mt-5 events_desktop">
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
                        </h1>
                        {/* <img src={evento1}></img> */}
                        {/* <div className="col-4 evento_imagem">
                      <img src={`${evento.imagem}`}></img>
                      
                    </div> */}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* ##### MOBILE ##### */}
        <div className="container a_novidades mt-5 events_mobile">
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
                        </h1>
                        {/* <img src={evento1}></img> */}
                        {/* <div className="col-4 evento_imagem">
                      <img src={`${evento.imagem}`}></img>
                      
                    </div> */}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
