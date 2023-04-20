import { Route, Router, Routes } from "react-router-dom";
import Header from "./component/header.component/header.component";
import Home from "./component/home.component/home.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
