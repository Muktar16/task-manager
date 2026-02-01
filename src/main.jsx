import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductList } from "./pages/ProductList";
import { UserList } from "./pages/UserLIst";
import Navbar from "./components/Navbar";
import { ProductDetails } from "./pages/ProductDetails";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h3>This is Homepage route</h3>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />}/>
        <Route path="/users" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
