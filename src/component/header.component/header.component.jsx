import { Link } from "react-router-dom";
import Logo from "../../assets/images/shop-logo.png";
import "./header.style.css";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../context/context.";
import { useContext } from "react";

const Header = () => {
  const { items } = useContext(CartContext);
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
          <Link to={"/checkout"}>
            <div>
              <FaShoppingCart className="cart-logo" />
              <span>{items.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
