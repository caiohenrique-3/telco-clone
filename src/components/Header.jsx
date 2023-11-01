// dependencies
import { useEffect, useState } from "react";

// css
import "../styles/header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    products: false,
    support: false,
    content: false,
    language: false,
    telcomanager: false,
  });

  function handleMenuButtonClick() {
    setIsMenuOpen(true);
  }

  function handleCloseMenuClick() {
    setIsMenuOpen(false);
  }

  function handleDropdownClick(name) {
    setDropdowns((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  }

  let timer;

  function handleMouseLeave(name) {
    timer = setTimeout(() => {
      setDropdowns((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    }, 200);
  }

  function handleMouseEnter(name) {
    clearTimeout(timer);

    setDropdowns((prevState) => {
      const updatedDropdowns = {};
      for (const key in prevState) {
        updatedDropdowns[key] = key === name ? true : false;
      }
      return updatedDropdowns;
    });
  }

  function handleResize() {
    if (window.innerWidth > 960) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className="img-container">
        <img
          id="site-logo"
          src="./logo_white_sombra_site.png"
          alt="Telcomanager Logo"
        />
      </div>

      <div className="navbar">
        <ul>
          <li>
            <div
              className="button-container"
              id="product-button-container"
            >
              <button
                id="product-button"
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={() => handleMouseLeave("products")}
              >
                Produtos
              </button>
              <span className="icon-container">
                <i
                  className={`fa ${
                    dropdowns.products ? "fa-angle-up" : "fa-angle-down"
                  }`}
                  aria-hidden="true"
                >
                </i>
              </span>

              {dropdowns.products && (
                <ul
                  className="dropdown-content"
                  id="product-dropdown-content"
                  onMouseEnter={() => handleMouseEnter("products")}
                  onMouseLeave={() => handleMouseLeave("products")}
                >
                  <li>
                    <a href="">TRAFip</a>
                  </li>
                  <li>
                    <a href="">SLAview</a>
                  </li>
                  <li>
                    <a href="">CFGtool</a>
                  </li>
                  <li>
                    <a href="#">Orçamento</a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          <li>
            <div
              className="button-container"
              id="support-button-container"
              onMouseEnter={() => handleMouseEnter("support")}
              onMouseLeave={() => handleMouseLeave("support")}
            >
              <button>Suporte</button>
              <span className="icon-container">
                <i
                  className={`fa ${
                    dropdowns.support ? "fa-angle-up" : "fa-angle-down"
                  }`}
                  aria-hidden="true"
                >
                </i>
              </span>

              {dropdowns.support && (
                <ul
                  className="dropdown-content"
                  id="support-dropdown-content"
                  onMouseEnter={() => handleMouseEnter("support")}
                  onMouseLeave={() => handleMouseLeave("support")}
                >
                  <li>
                    <a href="">Abrir chamado</a>
                  </li>
                  <li>
                    <a href="">Acompanhar chamado</a>
                  </li>
                  <li>
                    <a href="">Documentação & FAQ</a>
                  </li>
                  <li>
                    <a href="">Tutoriais</a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          <li>
            <div
              className="button-container"
              id="telcomanager-button-container"
              onMouseEnter={() => handleMouseEnter("telcomanager")}
              onMouseLeave={() => handleMouseLeave("telcomanager")}
            >
              <button>Telcomanager</button>
              <span className="icon-container">
                <i
                  className={`fa ${
                    dropdowns.telcomanager ? "fa-angle-up" : "fa-angle-down"
                  }`}
                  aria-hidden="true"
                >
                </i>
              </span>

              {dropdowns.telcomanager && (
                <ul
                  className="dropdown-content"
                  id="telcomanager-dropdown-content"
                  onMouseEnter={() => handleMouseEnter("telcomanager")}
                  onMouseLeave={() => handleMouseLeave("telcomanager")}
                >
                  <li>
                    <a href="#">Sobre a Telcomanager</a>
                  </li>
                  <li>
                    <a href="#">Eventos e Congressos</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Videos Institucionais</a>
                  </li>
                  <li>
                    <a href="">Webinar</a>
                  </li>
                  <li>
                    <a href="#">Certificação Telcomanager</a>
                  </li>
                  <li>
                    <a href="#">Trabalhe na Telco</a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          <li id="contact-button">
            <a href="">Contato</a>
          </li>

          <li>
            <div
              className="button-container"
              id="language-button-container"
              onMouseEnter={() => handleMouseEnter("language")}
              onMouseLeave={() => handleMouseLeave("language")}
            >
              <button id="language-change-button">
                <img src="./br.png" alt="Brazilian Portuguese" />
                <span className="icon-container">
                  <i
                    className={`fa ${
                      dropdowns.language ? "fa-angle-up" : "fa-angle-down"
                    }`}
                    aria-hidden="true"
                  >
                  </i>
                </span>
              </button>

              {dropdowns.language && (
                <ul
                  className="dropdown-content"
                  id="language-dropdown-content"
                  onMouseEnter={() => handleMouseEnter("language")}
                  onMouseLeave={() => handleMouseLeave("language")}
                >
                  <li>
                    <a href="">
                      <img src="./us.png" alt="English US" />
                    </a>
                  </li>

                  <li>
                    <a href="">
                      <img src="./es.png" alt="Español" />
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>

      <div className="menu-container">
        <button id="menu-button" onClick={handleMenuButtonClick}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        {isMenuOpen && (
          <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
            <button
              className="close-menu-button"
              onClick={handleCloseMenuClick}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>

            <ul>
              <li>
                <div
                  className="button-container"
                  onClick={() => handleDropdownClick("products")}
                >
                  <button>
                    Produtos
                  </button>
                  <span className="icon-container">
                    <i
                      className={`fa ${
                        dropdowns.products ? "fa-angle-up" : "fa-angle-down"
                      }`}
                      aria-hidden="true"
                    >
                    </i>
                  </span>
                </div>
              </li>

              {dropdowns.products && (
                <ul className="dropdown-content">
                  <li>
                    <a href="">TRAFip</a>
                  </li>
                  <li>
                    <a href="">SLAview</a>
                  </li>
                  <li>
                    <a href="">CFGtool</a>
                  </li>
                </ul>
              )}

              <li>
                <a href="#">Orçamento</a>
              </li>
              <li>
                <div
                  className="button-container"
                  onClick={() => handleDropdownClick("support")}
                >
                  <button>Suporte</button>
                  <span className="icon-container">
                    <i
                      className={`fa ${
                        dropdowns.support ? "fa-angle-up" : "fa-angle-down"
                      }`}
                      aria-hidden="true"
                    >
                    </i>
                  </span>
                </div>
              </li>

              {dropdowns.support && (
                <ul className="dropdown-content">
                  <li>
                    <a href="">Abrir chamado</a>
                  </li>
                  <li>
                    <a href="">Acompanhar chamado</a>
                  </li>
                  <li>
                    <a href="">Documentação & FAQ</a>
                  </li>
                  <li>
                    <a href="">Tutoriais</a>
                  </li>
                </ul>
              )}

              <li>
                <div
                  className="button-container"
                  onClick={() => handleDropdownClick("content")}
                >
                  <button>Conteúdo</button>
                  <span className="icon-container">
                    <i
                      className={`fa ${
                        dropdowns.content ? "fa-angle-up" : "fa-angle-down"
                      }`}
                      aria-hidden="true"
                    >
                    </i>
                  </span>
                </div>
              </li>

              {dropdowns.content && (
                <ul className="dropdown-content">
                  <li>
                    <a href="">Blog</a>
                  </li>
                </ul>
              )}

              <li>
                <a href="#">Sobre a Telcomanager</a>
              </li>
              <li>
                <a href="#">Eventos</a>
              </li>
              <li>
                <a href="#">Trabalhe na Telco</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">(21) 3211-2223</a>
              </li>

              <li>
                <div
                  className="button-container"
                  onClick={() => handleDropdownClick("language")}
                >
                  <button id="language-change-button">
                    <img src="./br.png" alt="Brazilian Portuguese" />
                    <span className="icon-container">
                      <i
                        className={`fa ${
                          dropdowns.language ? "fa-angle-up" : "fa-angle-down"
                        }`}
                        aria-hidden="true"
                      >
                      </i>
                    </span>
                  </button>
                </div>
              </li>

              {dropdowns.language && (
                <ul className="dropdown-content">
                  <li>
                    <a href="">
                      <img src="./us.png" alt="English US" />
                    </a>
                  </li>

                  <li>
                    <a href="">
                      <img src="./es.png" alt="Español" />
                    </a>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
