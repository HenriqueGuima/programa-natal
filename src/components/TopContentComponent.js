import React from "react";
import natalfinal from "../assets/imagens/capa2.jpg";

export default function TopContentComponent() {
  return (
    <div>
      {/* ##### INTRODUCTION ##### */}
      <section className="top_container">
        <div class="container top_div">
          {/* <img src={natalfinal} alt="" /> */}
        </div>

        <div class="container-fluid" style={{ textAlign: "-webkit-center" }}>
          <a href="#programa">
            <div class="box">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </section>

      {/* ###### MENSAGEM RICARDO RIO ###### */}
      {/* <section className="top_container">
        <div class="container pt-5 pb-5 ">
          <span className="text-white mensagem-texto">
            Este ano de 2021 marca o regresso do Natal às ruas de Braga. Com ele
            celebramos a vida, a família e os valores da solidariedade. Voltamos
            a viver momentos de especial harmonia, onde o espírito natalício,
            alimentado por um conjunto de comemorações e de diversas iniciativas
            culturais e sociais, voltam a encher de ânimo os corações dos
            Bracarenses e de todos aqueles que nos visitam. O ambiente que se
            vive pelas ruas da Cidade é mais uma oportunidade de conviver com
            aqueles que nos são mais próximos e de usufruir o que Braga tem para
            oferecer durante este período. No entanto, este continua a ser um
            momento de responsabilidade. Responssabilidade pela segurança, pela
            saúde de cada um e de todos aqueles que nos rodeiam. Por isso, não
            posso deixar de apelar a todos os Bracarenses para que continuem a
            ser um exemplo para o País e para o mundo ao cumprir
            escrupulosamente todas as indicações das autoridades de saúde, sem
            deixar de lado o espírito solidário e natalício. Com a aproximação
            do fim de mais um ano, esta é também uma altura propícia para
            balanços do caminho percorrido e uma oportunidade para projetar as
            nossas esperanças e ambições para o futuro. Da nossa parte, deixamos
            o compromisso de continuarmos a trabalhar por uma Cidade melhor, uma
            Cidade mais justa e solidária. Uma cidade para todos. Que 2022
            marque definitivamente o regresso à tão desejada normalidade e que
            este Natal seja de esperança num futuro melhor, mais risonho e
            repleto de afetos.
          </span>
          <div className="mt-4"></div>
          <span className="text-white ricardo-rio">Ricardo Rio</span>
          <div className="mt-2"></div>
          <span className="text-white cargo">
            Presidente da Câmara Municipal de Braga
          </span>
        </div>
      </section> */}
    </div>
  );
}
