import "./Header.css";
import headerLogo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={headerLogo} alt="header logo" />
      <h1>Hello Vite!</h1>
    </header>
  );
}

export default Header;