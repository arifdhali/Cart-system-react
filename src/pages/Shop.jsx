import React from "react";
import Product from "../components/Product";
import Products from "../Products";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shopTitle">
          <h1>Shopping Site</h1>
        </div>
        <div className="products">
          {Products.map((product) => {
            return <Product key={product.id} data={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
