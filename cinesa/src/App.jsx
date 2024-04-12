import "./App.css";
import Tipografia from "./components/Tipografía/Tipografia";

function App() {
  return (
    <div>
      <Tipografia isTitleNavbar={true} text={"Links navbar"} />
      <Tipografia isTitleSwiper={true} text={"Título Swiper"} />
      <Tipografia isTitleMovie={true} text={"Título película"} />
      <Tipografia isTitleSection={true} text={"Título sección"} />
      <Tipografia isTitleBanner={true} text={"Título banners"} />
      <Tipografia isTitleCard={true} text={"Título Cards"} />
      <Tipografia isBodyCard={true} text={"Body Cards"} />
      <Tipografia isBodySection={true} text={"Body Section"} />
      <Tipografia isTitleBodySection={true} text={"Titulo Body Sección"} />
      <Tipografia isFooterLinks={true} text={"Footer links"} />
    </div>
  );
}

export default App;
