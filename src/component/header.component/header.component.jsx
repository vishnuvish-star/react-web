import { Link } from "react-router-dom";
import Logo from "../../assets/images/shop-logo.png";
import "./header.style.css";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../context/context.";
import { useContext } from "react";
import UserContext from "../context/userContext";

const Header = () => {
  const { cartItemCount } = useContext(CartContext);
  const { user } = useContext(UserContext);
  // const { loginUser } = useContext(CartContext);
  // const [state, setState] = useState("sign-in");
  // useEffect(() => {
  //   if (user) {
  //     setState("sign-out");
  //   } else {
  //     setState("sign-in");
  //   }
  // }, [state]);
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
          {/* user not equal to guest means user is SIGN IN  */}

          {user !== "guest" ? (
            <Link to={"/shop"} className="link">
              Shop
            </Link>
          ) : (
            <div
              onClick={() => {
                alert("log in first");
              }}
              className="link"
            >
              Shop
            </div>
          )}
          {/* user || "guest" using short circuting */}
          <div className="link">{user || "guest"}</div>
          <Link to={"/checkout"} className="link">
            <div>
              <FaShoppingCart className="cart-logo" />
              <span>{cartItemCount}</span>
            </div>
          </Link>
          {/* user is not sign in GO TO Sign-in component */}
          {user !== "guest" ? (
            <Link to={"/signIn"} className="link">
              Sign-Out
            </Link>
          ) : (
            <Link to={"/signIn"} className="link">
              <div>
                <div className="register">Sign-in</div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
