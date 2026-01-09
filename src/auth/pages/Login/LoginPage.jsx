import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

const Hero = ({ type, active, title, text, buttonText, onClick }) => (
  <div className={`hero ${type} ${active ? "active" : ""}`}>
    <h2>{title}</h2>
    <p>{text}</p>
    <button type="button" onClick={onClick}>
      {buttonText}
    </button>
  </div>
);

const AuthForm = ({ type, active, title, children }) => (
  <div className={`form ${type} ${active ? "active" : ""}`}>
    <h2>{title}</h2>
    <p>Use your email address</p>
    <form>{children}</form>
  </div>
);

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const url = `${microservice_operator_API_URL}/usuarios/login?username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        
        // Si el microservicio devuelve el usuario, lo guardamos
        console.log("Login exitoso:", data);
        
        // Guardar en localStorage para mantener la sesión
        localStorage.setItem("user", JSON.stringify(data));

        navigate("/inicio", { replace: true });
      } else {
        setError("Credenciales incorrectas. Intenta de nuevo.");
      }
    } catch (err) {
      setError("Error de conexión con el servidor.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onLoginprueba = () => {
    navigate("/inicio", {
      replace: true,
    });
  };

  const [view, setView] = useState("signup");

  const isSignup = view === "signup";
  const toggleView = () => setView(isSignup ? "signin" : "signup");

  return (
    <section className="page login-3-page login-3">
      <div className="card">
        <div className="card-bg" style={{ translate: isSignup ? 0 : "100%" }} />


        {/* Sign Up */}
        <Hero
          type="signup"
          active={isSignup}
          title="Welcome Back!"
          text="Sign in to track your most recent investment gains."
          buttonText="SIGN IN"
          onClick={toggleView}
        />

        <AuthForm type="signup" active={isSignup} title="Create Account">
          <input type="email" placeholder="Email" />
          <input type="name" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button onClick={onLoginprueba}>SIGN UP</button>
        </AuthForm>


        {/* Sign In */}
        <Hero
          type="signin"
          active={!isSignup}
          title="Hey There!"
          text="Start your journey here and begin earning right away."
          buttonText="SIGN UP"
          onClick={toggleView}
        />

        <AuthForm type="signin" active={!isSignup} title="Sign In">
          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
          <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          <button onClick={onLogin} disabled={loading}>{loading ? "Cargando..." : "SIGN IN"}</button>
        </AuthForm>
      </div>
    </section>
  );
};
