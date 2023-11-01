// dependencies
import { useEffect } from "react";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

// css
import "../styles/swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Slider() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Pagination],
      loop: true,

      autoplay: {
        delay: 1000,
      },

      pagination: {
        // el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide one">
          <div className="img-container">
            <img
              src="./slide-1.jpg"
              alt="A picture of a person holding a pencil, whilst using a Notebook"
            />
          </div>

          <div className="content-container">
            <h1>
              Cursos de <span className="highlighted-text">Certificação</span>
            </h1>
            <p id="text-1">
              Obtenha uma certificação da empresa líder da América Latina do
              setor de software para gerência de redes
            </p>
            <p id="text-2">
              Veja como é fácil unir as boas práticas do gerenciamento de redes
              e da gestão de TIC com os sistemas de monitoramento da
              Telcomanager
            </p>

            <div className="button-container">
              <a href="">
                Saiba Mais{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="swiper-slide two">
          <div className="img-container">
            <img
              src="./slide-2.jpg"
              alt="A picture of skycrapers, looking from below to up"
            />
          </div>

          <div className="content-container">
            <h1>
              Nova geração dos sistemas Telcomanager
            </h1>
            <p>
              A versão 9 dos sistemas Telcomanager conta com o que há de mais
              moderno no mercado, além de diferenciais únicos que são
              encontrados apenas em nossos sistemas para gerenciamento e
              monitoramento de TI.
            </p>

            <div className="button-container">
              <a href="">
                Saiba Mais{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>

              <a href="">
                Demonstração{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="swiper-slide three">
          <div className="img-container">
            <img
              src="./data-server.jpg"
              alt="A picture of the physical location of a data server, with a lot of computers"
            />
          </div>

          <div className="content-container">
            <h1>
              Monitore todos os aspectos da{" "}
              <span className="highlighted-text">rede da sua empresa</span>
            </h1>
            <p>
              Os sistemas de monitoramento da Telcomanager garantem total
              visibilidade da sua rede e de todo o seu ambiente de TIC
            </p>

            <div className="button-container">
              <a href="">
                Conheça Aqui{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="swiper-slide four">
          <div className="img-container">
            <img
              src="./motherboard.jpg"
              alt="A picture of futuristic/technology waves"
            />
          </div>

          <div className="content-container">
            <h1>
              <span className="highlighted-text">Conheça os produtos</span>
            </h1>

            <ul>
              <li>
                <a href="">
                  <i className="fa fa-external-link"></i> TRAFip
                </a>
                <p>Analise seu tráfego</p>
              </li>

              <li>
                <a href="">
                  <i className="fa fa-external-link"></i> SLAview
                </a>
                <p>Monitore falhas & desempenho</p>
              </li>

              <li>
                <a href="">
                  <i className="fa fa-external-link"></i> CFGtool
                </a>
                <p>Gerencie suas configurações</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}
