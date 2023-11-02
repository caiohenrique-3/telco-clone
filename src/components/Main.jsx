// css
import "../styles/main.css";

export default function Main() {
  return (
    <main>
      <section id="software">
        <article id="trafip">
          <div className="img-container">
            <img
              src="./trafip.png"
              alt="Logo of TRAFip"
              width="276"
              height="276"
            />
          </div>
          <div className="content">
            <h3>
              Visibilidade de <span className="logo-color">REDE</span>
            </h3>
            <p>
              Obtenha total visibilidade da sua rede com um sistema de alta
              performance. Ele possibilita saber tudo oque acontece na sua rede.
            </p>

            <a href="">Conheça mais</a>
          </div>
        </article>

        <article id="slaview">
          <div className="img-container">
            <img
              src="./slaview.png"
              alt="Logo of SLAview"
              width="276"
              height="276"
            />
          </div>
          <div className="content">
            <h3>
              Análise da <span className="logo-color">performance</span>
            </h3>
            <p>
              Monitore a performance e as falhas de sua infraestrutura de rede e
              TI com este poderoso sistema de simples configuração.
            </p>

            <a href="">Conheça mais</a>
          </div>
        </article>

        <article id="cfgtool">
          <div className="img-container">
            <img
              src="./cfgtool.png"
              alt="Logo of CFGtool"
              width="283"
              height="283"
            />
          </div>
          <div className="content">
            <h3>
              Gerência de <span className="logo-color">Configuração</span>
            </h3>
            <p>
              Assuma o controle da sua rede com esta solução que permite
              gerenciar as configurações de seus dispositivos.
            </p>

            <a href="">Conheça mais</a>
          </div>
        </article>
      </section>
    </main>
  );
}
