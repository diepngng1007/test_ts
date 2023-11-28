import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/addProduct";

export default function Routers() {
  return (
    <Routes>
        <Route path="/" Component={ProductList} />
        <Route path="/add-product" Component={AddProduct} />
    </Routes>
  );
}
