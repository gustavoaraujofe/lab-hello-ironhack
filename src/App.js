import "./App.css";
import HeroImage from "./components/heroImage";
import Blocos from "./components/blocos";
import Title from "./components/title-text";
import Logos from "./components/logos-react";

function App() {
  return (
    <div>
      <><Logos /></>
      <div className="hero-image">
        <div><HeroImage /></div>
        <><Title /></>
      </div>
      <div><Blocos /></div>
    </div>
  );
}

export default App;
