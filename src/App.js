import { Outlet, Route, Router, Routes } from "react-router-dom";
import Header from "./component/header.component/header.component";
import Home from "./component/home.component/home.component";
import Shop from "./component/shop.component/shop.component";
// import products from "./component/data.component/data.component";
// import { useState } from "react";

function App() {
  // const [data, setData] = useState(products);
  return (
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
      </Route>
    </Routes>
  );
}

export default App;
