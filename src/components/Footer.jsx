// css
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="copyright">
        <p>Telcomanager &copy; 2022</p>
      </div>

      <div className="links-container">
        <ul>
          <li>
            <a href="">
              <i
                className="fa fa-facebook-square"
                aria-label="Go to Telcomanager Facebook's page"
              >
              </i>
            </a>
          </li>

          <li>
            <a href="">
              <i
                className="fa fa-instagram"
                aria-label="Go to Telcomanager Instagram's page"
              >
              </i>
            </a>
          </li>

          <li>
            <a href="">
              <i
                className="fa fa-youtube-play"
                aria-label="Go to Telcomanager YouTube's page"
              >
              </i>
            </a>
          </li>

          <li>
            <a href="">
              <i className="fa fa-feed" aria-label="Telcomanager RSS Feed"></i>
            </a>
          </li>

          <li>
            <a href="">
              <i class="fa fa-gavel" aria-label="Telcomanager Privacy Policy">
              </i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
