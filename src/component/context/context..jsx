// import the createContext from react;
import { createContext, useState } from "react";

// create variable and stored createContext();
const CartContext = createContext();

// set Provider function and params children  components
export function ContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const addToCart = (name, price) => {
    setItems((prevItems) => [...prevItems, { name, price }]);
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// export CartContext
export default CartContext;
