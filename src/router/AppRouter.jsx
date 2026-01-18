import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductList";
import { ProductDetails } from "../pages/PorductDetails";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<h1>This is from Homepage</h1>} />
      <Route path="/products" element={<ProductList/>} />
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/categories" element={<p>categories list page</p>} />
    </Routes>
  );
}
