import { Link } from "react-router-dom";
import Logo from "../../assets/images/shop-logo.png";
import "./header.style.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="shopImage" className="shop-logo" />
        </div>
        <div className="header-items">
          <Link to={"/"} className="link">
            Home
          </Link>
          <Link to={"/shop"} className="link">
            Shop
          </Link>
          <Link to={"/about"} className="link">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
