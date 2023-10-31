// css
import "../styles/topbar.css";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="tel-1">
          <div className="img-container">
            <img src="./br.png" alt="Brazil" />
          </div>
          <p>+55 (21) 3211-2223</p>
        </div>

        <div className="tel-2">
          <div className="img-container">
            <img src="./us.png" alt="United States" />
          </div>
          <p>+1 (619) 860-6666</p>
        </div>

        <div className="email">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <p>info@telcomanager.com</p>
        </div>
      </div>
    </div>
  );
}
