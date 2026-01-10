import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../helpers/loginApi";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onLogin = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setError("");
    setLoading(true);
    try {
    //validación de campos
    if (!email || !password) {
      throw new Error("Por favor, completa todos los campos.");
    }
      const data = await loginApi({ email, password });
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/inicio", { replace: true });
    } catch (err) {
      setError(err.message || "Error de conexión con el servidor.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    onLogin,
  };
}
