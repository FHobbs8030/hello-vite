import "./Header.css";
import headerLogo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <h1>My Animal App</h1>
      <img src={headerLogo} alt="header logo" />
    </header>
  );
}

export default Header;