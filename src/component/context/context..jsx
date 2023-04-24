// import the createContext from react;
import { createContext, useState } from "react";
import products from "../data.component/data.component";

// create variable and stored createContext();
const CartContext = createContext();

// set Provider function and params children  components
export function ContextProvider({ children }) {
  // use state
  const [state, setState] = useState({
    data: products,
    cart: [],
  });
  // items added to cart
  const addToCart = (product) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...product, count: 1 }],
    });
  };

  // cart items decrease from cart
  const decrease = (product) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === product.id
          ? {
              ...cartItem,
              count: cartItem.count > 1 ? cartItem.count - 1 : 1,
            }
          : cartItem
      ),
    });
  };

  // cart items increase from cart
  const increase = (product) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  // Remove the items from cart
  const removeItem = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
  };

  const cartItemCount = state.cart.reduce(
    (acc, data) => (acc += data.count),
    0
  );
  return (
    <CartContext.Provider
      value={{
        state: state,
        addToCart,
        increase,
        decrease,
        removeItem,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// export CartContext
export default CartContext;
