import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import SellerList from "./components/SellersList";
import SellerProducts from "./components/SellerProducts";
import EditProduct from "./components/EditProduct";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sellers/:id" element={<SellerProducts />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <h2>Please log in</h2>}
        />
        <Route
          path="/add-product"
          element={
            isAuthenticated ? (
              <AddProduct />
            ) : (
              <h2>Please log in as a seller</h2>
            )
          }
        />
        <Route path="/sellers" element={<SellerList />} />
        <Route
          path="/edit-product/:id"
          element={
            isAuthenticated ? (
              <EditProduct />
            ) : (
              <h2>Please log in as a seller</h2>
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
