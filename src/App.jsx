// components
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Swiper from "./components/Swiper";

// css
import "./styles/index.css";
import "./styles/fonts.css";

function App() {
  return (
    <div className="container">
      <TopBar />
      <Header />
      <Swiper />
      <h2>
        Lorem ipsum
      </h2>
      <h3>
        Lorem ipsum dolor sit amet
      </h3>
      <h4>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </h4>
    </div>
  );
}

export default App;
