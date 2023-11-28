import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";
import Categories from "./Categories";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="product/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
