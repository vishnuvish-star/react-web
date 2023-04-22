import CartContext from "../context/context.";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import "./checkout.style.css";
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
                <span>{product.rating}</span>
              </div>
              <div>
                <button
                  onClick={() => {
                    decrease(product);
                  }}
                  className="decrease-btn"
                >
                  -
                </button>
              </div>
              <span className="cartCount">{product.count}</span>
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
