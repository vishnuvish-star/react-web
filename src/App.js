import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./component/header.component/header.component";
import Home from "./component/home.component/home.component";
import Shop from "./component/shop.component/shop.component";
import Checkout from "./component/checkout/checkout.component";
import { ContextProvider } from "./component/context/context.";

// import CartContext from "./component/context/context.";
// import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./component/sign-in/signIn.component";
function App() {
  // const { item } = useContext(CartContext);
  // console.log(item);
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signIn" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
