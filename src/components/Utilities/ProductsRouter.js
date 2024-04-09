import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductsSwitch from "./ProductsSwitch.js";

export default function ProductsRouter() {
  return (
    <div>
      <Router>
        <ProductsSwitch />
      </Router>
    </div>
  );
}
