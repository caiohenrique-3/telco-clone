// components
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ReturnToTopArrow from "./components/ReturnToTopArrow";

// css
import "./styles/index.css";
import "./styles/fonts.css";

function App() {
  return (
    <div className="container">
      <TopBar />
      <Header />
      <Swiper />
      <Main />
      <Footer />
      <ReturnToTopArrow />
    </div>
  );
}

export default App;
