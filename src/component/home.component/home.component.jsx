import { Link } from "react-router-dom";

import "./home.component.style.css";

const Home = () => {
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
      <button className="shop-btn">
        <Link to={"/shop"} className="link">
          Shop Now
        </Link>
      </button>
    </div>
  );
};

export default Home;
