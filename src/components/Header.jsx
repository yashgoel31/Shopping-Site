import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h1 className="logo-name">Shopping Site</h1>
        </div>
        <div classname="nav-links">
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/cart">Cart ({cart.length})</Link>

          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </header>
  );
}
