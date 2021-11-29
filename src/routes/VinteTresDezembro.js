import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import data from "../data/vintetresdezembro.json";
import imagem from "../assets/imagens/Imagem_09.jpg";
import FooterEventComponent from "../components/FooterEventComponent";
import HeaderEventComponent from "../components/HeaderEventComponent";

export default function VinteTresDezembro() {
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
                    <h1 className="titulo_evento mt-2">{evento.titulo}</h1>
                    <div className="mt-2"></div>
                    <span className="hora_evento">{evento.hora}</span>
                    <span className="local_evento">{evento.local}</span>
                    <div className="mt-2"></div>
                    <span className="subtitulo_evento">{evento.subtitulo}</span>

                    {/* <img src={evento1}></img>
                  <div className="col-4 evento_imagem">
                      <img src={`${evento.imagem}`}></img>
                      
                    </div> */}

                    <span className="hora_evento">{evento.horavento}</span>
                    <div className="mt-2"></div>
                    <span className="local_evento">{evento.localEvento}</span>
                    <div className="mt-2"></div>
                    <span className="subtitulo_evento">
                      {evento.subtituloEvento}
                    </span>
                    <span className="descricao_evento">
                      {evento.descricaoEvento}
                    </span>
                    <div className="mt-2"></div>
                    <span className="descricao_evento">{evento.por}</span>
                    <span className="entrada_evento">
                      {evento.classificacaoEtariaEvento}
                    </span>
                    <span className="entrada_evento">{evento.entrada}</span>
                  </div>

                  <div class="row evento-dia m-2">
                    <span className="descricao_evento">{evento.descricao}</span>
                  </div>

                  <div className="mt-4"></div>

                  {/* <div class="row evento-dia m-2">
                    <img src={imagem}></img>
                  </div> */}
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
