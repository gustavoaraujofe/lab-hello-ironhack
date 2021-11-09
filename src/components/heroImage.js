import ironhackLogo from "../assets/images/ironhack-logo.svg";
import menu from "../assets/images/menu-top.svg";

function navBar() {
  return (
    <div>
      <nav className="nav-bar">
        <img className="logo-iron" src={ironhackLogo} alt="Logo Ironhack" />
        <img className="img-menu" src={menu} alt="menu" />
      </nav>
    </div>
  );
}

export default navBar();
