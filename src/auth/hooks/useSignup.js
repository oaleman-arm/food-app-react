import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../helpers/signupApi";

export function useSignup(options = {}) {
  const { redirect = true, redirectDelay = 1200, onSuccess } = options;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    if (!email || !password || !name) {
      setError("Completa todos los campos.");
      return false;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return false;
    }
    return true;
  };

  const onSignup = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setError("");
    if (!validate()) return;

    setLoading(true);
    try {
      const data = await signupApi({ name, email, password });

      if (data) {
        // limpiar campos
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        if (typeof onSuccess === "function") {
          try {
            onSuccess(data);
          } catch (cbErr) {
            console.error("useSignup onSuccess callback error:", cbErr);
          }
        }

        if (redirect) {
          setTimeout(() => navigate("/login", { replace: true }), redirectDelay);
        }
      }
    } catch (err) {
      setError(err.message || "Error al crear la cuenta.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    loading,
    onSignup,
  };
}
