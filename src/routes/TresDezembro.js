import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import data from "../data/tresdezembro.json";
import imagem from "../assets/imagens/Imagem_08.jpeg";
import FooterEventComponent from "../components/FooterEventComponent";
import dataEvents from "../data/tresdezembroeventos.json";
import HeaderEventComponent from "../components/HeaderEventComponent";

export default function TresDezembro() {
  return (
    <React.Fragment>
      <HeaderEventComponent></HeaderEventComponent>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            {data.map((evento) => {
              return (
                <React.Fragment>
                  <div className="row evento-dia m-2" key={evento.id}>
                    <h1 className="data_evento">
                      {evento.dia}{" "}
                      <span style={{ fontWeight: "900" }}>{evento.mes}</span>
                    </h1>
                    <h1 className="titulo_evento">{evento.titulo}</h1>
                    <div className="mt-2"></div>
                    <span className="hora_evento">{evento.hora}</span>
                    <span className="local_evento">{evento.local}</span>
                    <div className="mt-2"></div>
                    <span className="subtitulo_evento">{evento.subtitulo}</span>

                    {/* <img src={evento1}></img>
                  <div className="col-4 evento_imagem">
                      <img src={`${evento.imagem}`}></img>
                      
                    </div> */}
                  </div>

                  <div class="row evento-dia m-2">
                    <span className="descricao_evento">{evento.descricao}</span>
                  </div>

                  <div class="row evento-dia m-2">
                    <span className="classificacao_etaria_evento">
                      {evento.classificacaoEtaria}
                    </span>
                  </div>

                  <div class="row evento-dia m-2">
                    <span className="entrada_evento">{evento.entrada}</span>
                  </div>

                  <div className="mt-4"></div>

                  <div class="row evento-dia m-2">
                    <img src={imagem}></img>
                  </div>
                </React.Fragment>
              );
            })}

            {dataEvents.map((evento) => {
              return (
                <React.Fragment>
                  <div className="mt-4"></div>

                  <div className="row evento-dia m-2" key={evento}>
                    <h1 className="titulo_evento">{evento.tituloPrincipal}</h1>
                    <span className="descricao_evento">{evento.por}</span>
                    <span className="classificacao_etaria_evento">
                      {evento.entradaDiaMaisCurto}
                    </span>
                    <span className="hora_evento">{evento.horavento}</span>
                    <span className="local_evento">{evento.localEvento}</span>
                    <h1 className="titulo_evento">{evento.tituloevento}</h1>
                    <div className="mt-2"></div>
                    <span className="subtitulo_evento">
                      {evento.subtituloEvento}
                    </span>
                    <span className="descricao_evento">
                      {evento.descricaoEvento}
                    </span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <FooterEventComponent></FooterEventComponent>
    </React.Fragment>
  );
}
