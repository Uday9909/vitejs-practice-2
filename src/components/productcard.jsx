// write product card here
// cart/productcard.jsx
import React from "react";
import ViewProductButton from "../components/button";

const ProductCard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150"; // Placeholder image
  const productName = "Sample Product";
  const productPrice = "$99.99";

  return (
    <div className="border p-4 rounded-lg shadow-lg w-64 bg-white">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-700 mt-1">{productPrice}</p>
      <div className="mt-3">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default ProductCard;
