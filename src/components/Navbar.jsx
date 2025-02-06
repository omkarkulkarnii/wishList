import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const isAuthenticated = token ? true : false;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  // console.log("Current role:", role);

  return (
    <nav style={{ padding: "10px", backgroundColor: "#f8f9fa" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>WishLink</h2>
        <div>
          <Link to="/" style={{ margin: "0 10px" }}>
            Home
          </Link>
          <Link to="/products" style={{ margin: "0 10px" }}>
            Products
          </Link>
          <Link to="/sellers" style={{ margin: "0 10px" }}>
            Sellers
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" style={{ margin: "0 10px" }}>
                Dashboard
              </Link>
              {role === "seller" && (
                <Link to="/add-product" style={{ margin: "0 10px" }}>
                  Add Product
                </Link>
              )}
              <button onClick={handleLogout} style={{ margin: "0 10px" }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ margin: "0 10px" }}>
                Login
              </Link>
              <Link to="/signup" style={{ margin: "0 10px" }}>
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
