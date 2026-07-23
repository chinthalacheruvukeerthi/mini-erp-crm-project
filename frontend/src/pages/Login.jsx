import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "#ffffff",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          width: "380px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0d6efd",
            marginBottom: "25px",
            fontWeight: "bold",
          }}
        >
          Mini ERP CRM
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "20px",
          }}
        >
          Login to continue
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#0d6efd",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;