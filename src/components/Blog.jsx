// dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// css
import "../styles/blog.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Blog() {
  return (
    <section id="blog">
      <h2>
        Artigos do <strong>Blog</strong>
      </h2>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h3>Telcomanager v9 - Expanda a capacidade do monitoramento</h3>
          <p>
            A versão 9 das soluções de monitoramento do ambiente de TI e de rede
            da...
          </p>
          <a href="">Ler artigo</a>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Gestão baseada em dados: por que aplicar?</h3>
          <p>
            Você sabe o que é e como funciona a gestão baseada em dados? Aliás,
            sabe...
          </p>
          <a href="">Ler artigo</a>
        </SwiperSlide>

        <SwiperSlide>
          <h3>Conhecendo as novas atualizações da Telcomanager - Parte 1</h3>
          <p>
            Ter um abiente de redes gerenciável, é sem dúvidas, essencial para
            que uma empresa possa...
          </p>
          <a href="">Ler artigo</a>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Telcomanager V9 - A alarmística em gestão de TI</h3>
          <p>
            A versão 9 das soluções de monitoramento do ambiente de TI e de rede
            da...
          </p>
          <a href="">Ler artigo</a>
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            Telcomanager V9 - Visualize os seus KPIs atravpes de Dashboards
          </h3>
          <p>
            A versão 9 das soluções de monitoramento do ambiente de TI e de rede
            da...
          </p>
          <a href="">Ler artigo</a>
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            Telcomanager V9 - Expanda a capacidade de monitoramento
          </h3>
          <p>
            A versão 9 das soluções de monitoramento do ambiente de TI e de rede
            da...
          </p>
          <a href="">Ler artigo</a>
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            Telcomanager V9 - Mapas de topologia de rede
          </h3>
          <p>
            A versão 9 das soluções de monitoramento do ambiente de TI e de rede
            da...
          </p>
          <a href="">Ler artigo</a>
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            Telcomanager V9 - Relatórios em Ambientes de TI
          </h3>
          <p>
            A versão 9 das soluções de monitoramento do ambiente de TI e de rede
            da...
          </p>
          <a href="">Ler artigo</a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
