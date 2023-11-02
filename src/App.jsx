// components
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import Main from "./components/Main";

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
    </div>
  );
}

export default App;
