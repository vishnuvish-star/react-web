import CartContext from "../context/context.";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import "./checkout.style.css";
import ratingImg from "../../assets/images/Rating-img.png";
const Checkout = () => {
  const { state, increase, decrease, removeItem } = useContext(CartContext);
  console.log(state.cart);

  return (
    <div>
      <div className="products">
        {state.cart.map((product) => {
          console.log(product);
          return (
            <div key={uuidv4()} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              ></img>
              <h4>{product.name}</h4>

              <div className="product-card-details">
                <span>RS.{product.price}</span>
                <span className="rating-container">
                  <img
                    src={ratingImg}
                    alt="rating-logo"
                    className="rating-logo"
                  />
                  {product.rating}
                </span>
              </div>
              <div className="price-container">
                {product.count > 1 && (
                  <>
                    <span className="product-count">Qty:{product.count}</span>
                    <span className="product-amnt">
                      Total:{(product.count * product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              <div>
                <button
                  onClick={() => {
                    decrease(product);
                    console.log("click");
                  }}
                  className="decrease-btn"
                >
                  -
                </button>
              </div>
              <div className="cartCount">{product.count}</div>
              <div>
                <button
                  onClick={() => {
                    increase(product);
                  }}
                  className="increase-btn"
                >
                  +
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    removeItem(product.id);
                  }}
                  className="delete-btn"
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Checkout;
