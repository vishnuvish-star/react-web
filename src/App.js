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
import SignUp from "./component/sign-up/sign-up.component";
import { UserProvider } from "./component/context/userContext";
function App() {
  // const { item } = useContext(CartContext);
  // console.log(item);
  return (
    <UserProvider>
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
              <Route path="/signUp" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </UserProvider>
  );
}

export default App;
