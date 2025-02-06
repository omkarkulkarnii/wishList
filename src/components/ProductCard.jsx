import React from "react";

const sourceColors = {
  flipkart: "#ffeb3b", // Yellow
  amazon: "#f5f5dc", // Cream
  myntra: "#ffcc80", // Light Orange
};

const ProductCard = ({ product, showSeller = true }) => {
  const role = localStorage.getItem("role");
  const userId = localStorage.getItem("userId");
  const {
    name,
    price,
    image_url,
    source,
    seller_name,
    product_url,
    product_id,
    user_id,
  } = product;

  // Add these console logs to debug
  // console.log("Product Data:", {
  //   role,
  //   userId,
  //   user_id,
  //   product,
  // });

  const bgColor = sourceColors[source.toLowerCase()] || "#f0f0f0";
  // Compare userId with user_id from product
  const isOwner =
    role === "seller" && userId && user_id && userId === user_id.toString();

  // Trim product name to 50 characters
  const trimmedName = name.length > 50 ? name.substring(0, 50) + "..." : name;

  const handleVisit = () => {
    window.open(product_url, "_blank");
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(
          `https://wishlink-backend.onrender.com/products/${product_id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.ok) {
          // Refresh the page or update the product list
          window.location.reload();
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleEdit = () => {
    // Navigate to edit page
    window.location.href = `/edit-product/${product_id}`;
  };

  return (
    <div className="product-card" style={{ backgroundColor: bgColor }}>
      <img src={image_url} alt={name} />
      <div className="product-info">
        <h3 title={name}>{trimmedName}</h3>
        <p className="price">₹{price || "Fetching..."}</p>
        {seller_name && showSeller && (
          <p className="seller-info">
            Seller: <span className="seller-name">{seller_name}</span>
          </p>
        )}
        <button className="visit-btn" onClick={handleVisit}>
          Visit Product
        </button>

        {/* Show controls only if user is the owner */}
        {isOwner && (
          <div className="seller-controls">
            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
