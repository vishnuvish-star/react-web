// import products from "../data.component/data.component";
import "./shop.style.css";
import CartContext from "../context/context.";
import { useContext } from "react";
import ratingImg from "../../assets/images/Rating-img.png";

const Shop = () => {
  const { state, addToCart } = useContext(CartContext);
  console.log(state.data);
  console.log(state.cart);
  return (
    <div>
      <div className="products">
        {state.data.map((data) => {
          return (
            <div className="product-card" key={data.id}>
              <img src={data.image} alt={data.name} className="product-image" />
              <h4>{data.name}</h4>
              <div className="product-card-details">
                <span>RS.{data.price}</span>
                {/* <span className="rating-container">
                  <img
                    src={ratingImg}
                    alt="rating-logo"
                    className="rating-logo"
                  />
                  {product.rating}
                </span> */}
                <span>
                  <img
                    src={ratingImg}
                    alt="rating-logo"
                    className="rating-logo"
                  />
                  {data.rating}
                </span>
              </div>
              <button
                className="ProductCard-button"
                onClick={() => addToCart(data)}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Shop;
