import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../Pages/Products";
import Cart from "../Pages/ProductDetails";

export default function MySwitch() {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Cart />} />
      </Routes>
    </div>
  );
}
