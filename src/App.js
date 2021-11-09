import "./App.css";
import heroImage from "./components/heroImage";
import blocos from "./components/blocos";
import title from "./components/title-text";
import logos from "./components/logos-react";

function App() {
  return (
    <div>
      <>{logos}</>
      <div className="hero-image">
        <div>{heroImage}</div>
        <>{title}</>
      </div>
      <div>{blocos}</div>
    </div>
  );
}

export default App;
