import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashBoard from "./pages/admin/dashboard/DashBoard";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import AddProduct from "./pages/admin/pages/AddProduct";

const App = () => {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </MyState>
  );
};

export default App;
