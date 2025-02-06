import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const SellerProducts = ({ sellerId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://wishlink-backend.onrender.com/products/sellers/${sellerId}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]));
  }, [sellerId]);

  return (
    <div>
      <h2>Products by Seller</h2>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.product_id}
              product={product}
              showSeller={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerProducts;
