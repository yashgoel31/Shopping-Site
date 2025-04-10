import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import "./App.css";


export default function App() {
  const token = localStorage.getItem("token");

  return (
    <>
    <div className="app-container">
      {token && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        {token ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
      </div>
    </>
  );
}
