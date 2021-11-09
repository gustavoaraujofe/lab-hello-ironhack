import logoReact from "../assets/images/react-logo.svg";

function logos() {
  return (
    <div>
      <div className="logos-center">
        <img className="logo-react1" src={logoReact} alt="Logo React"></img>
        <img className="logo-react2" src={logoReact} alt="Logo React"></img>
        <img className="logo-react3" src={logoReact} alt="Logo React"></img>
      </div>
      <div className="logos-canto">
        <img src={logoReact} alt="Logo React"></img>

        <img src={logoReact} alt="Logo React"></img>

        <img src={logoReact} alt="Logo React"></img>
      </div>
    </div>
  );
}

export default logos();
