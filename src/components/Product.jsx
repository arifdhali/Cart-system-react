import React from "react";

const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  return (
    <>
      <a href="#" className="product-details">
        <img src={productImage} alt="" />
        <div className="product-details-item">
          <strong>{productName}</strong>
          <p>Price: {price}</p>
        </div>
        <button className="addToCart">Add to cart</button>
      </a>
    </>
  );
};

export default Product;
