import { Link } from "react-router-dom";

import "./home.component.style.css";
import UserContext from "../context/userContext";
import { useContext } from "react";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="home-container">
      <div className="img-container">
        <img
          src={
            "https://img.freepik.com/free-vector/template-banner-online-store-with-shopping-cart-with-purchases-boxes-delivery-from-supermarket-vector-illustration_548887-104.jpg?w=2000"
          }
          className="background-img"
          alt="shop"
        />
      </div>
      {/* user not equal to guest means user is SIGN IN  */}
      {user !== "guest" ? (
        <button className="shop-btn">
          <Link to={"/shop"} className="link">
            Shop Now
          </Link>
        </button>
      ) : (
        <button className="shop-btn">
          <span
            onClick={() => {
              alert("Log in First");
            }}
            className="link"
          >
            Shop Now
          </span>
        </button>
      )}
    </div>
  );
};

export default Home;
