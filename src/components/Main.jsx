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

      <section id="benefits">
        <h2>
          Por que comprar soluções <strong>Telcomanager</strong>?
        </h2>
        <p>
          As soluções Telcomanager monitoram e ajudam a controlar as redes de
          operadoras de telecomunicações, de cadeias de varejo, bancos e
          organizações financeiras, empresas de logísticas, indústrias de base,
          provedores de conteúdo, entre outros.
        </p>

        <p>
          Destacando-se por sua excelência tecnológica, facilidade de uso,
          eficácia e alta eficiência, os produtos Telcomanager tem obtido grande
          sucesso atendendo importantes representantes dos mais diversos
          segmentos do mercado.
        </p>

        <div className="img-container">
          <img
            src="./telco-browsers.png"
            alt="UI of a software made by Telcomanager"
            width="980"
            height="370"
          />
        </div>

        <ul>
          <div className="row">
            <li>
              <img src="./argumentos_1.png" aria-hidden="true" />
              <p>
                Análise global da rede
              </p>
            </li>
            <li>
              <img src="./argumentos_2.png" aria-hidden="true" />
              <p>
                Controle da utilização da rede
              </p>
            </li>
            <li>
              <img src="./argumentos_3.png" aria-hidden="true" />
              <p>
                Identificação de tráfego suspeito
              </p>
            </li>
          </div>

          <div className="row">
            <li>
              <img src="./argumentos_7.png" aria-hidden="true" />
              <p>
                Alerta de falhas
              </p>
            </li>
            <li>
              <img src="./argumentos_4.png" aria-hidden="true" />
              <p>
                Planejamento de capacidade
              </p>
            </li>
            <li>
              <img src="./argumentos_6.png" aria-hidden="true" />
              <p>
                Análise de performance e de infraestrutura
              </p>
            </li>
          </div>

          <div className="row">
            <li>
              <img src="./argumentos_5.png" aria-hidden="true" />
              <p>
                Planejamento de QoS
              </p>
            </li>
            <li>
              <img src="./argumentos_8.png" aria-hidden="true" />
              <p>
                Monitoramento de fatores SLA
              </p>
            </li>
            <li>
              <img src="./argumentos_9.png" aria-hidden="true" />
              <p>
                Identificação de abusos de usuários
              </p>
            </li>
          </div>
        </ul>
      </section>

      <section id="demo">
        <h2>
          Assuma o controle da sua rede, use <strong>Telcomanager</strong>
        </h2>
        <p>
          Quando uma empresa utiliza as soluções Telcomanager em sua rede, a
          equipe obtém maior controle e visibilidade sobre os recursos que
          gerencia. Assim, pode otimizar a infraestrutura da rede para melhorar
          desempenho das aplicações, realizar planejamentos e investimentos mais
          precisos e entregar mais valor agregado ao seu negócio.
        </p>
        <div className="img-container">
          <img
            src="./TM1000-5.png"
            alt="A picture of the TM1000-5, a modem made by Telcomanager"
            width="521"
            height="87"
          />

          <a href="">
            Peça uma demonstração <i className="fa fa-television"></i>
          </a>
        </div>
      </section>
    </main>
  );
}
