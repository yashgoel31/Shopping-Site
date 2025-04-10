import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Trying to login with:", { username, password });

    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });

      console.log("Login success");
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
      navigate("/");

    } catch (err) {
      console.error("Login failed:");
      alert("Login failed: " + (err.response?.data || "Something went wrong"));
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
