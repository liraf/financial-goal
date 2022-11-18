import "./Header.scss";

import logo from "../../assets/logoOrigin.svg"

const Header = () => {
  return <header className="header">
    <img src={logo} alt="Origin" />
  </header>;
};

export default Header;
