import { Link } from "react-router-dom";
import img from "../../assets/images/Top-Ecommerce-Websites.jpg";
import "./home.component.style.css";

const Home = () => {
  return (
    <div>
      <div className="img-container">
        <img src={img} alt="Home page image" className="background-img" />
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
