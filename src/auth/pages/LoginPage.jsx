import React, { useState } from "react";
import "../Login.css";
import { Hero, AuthForm } from "../components";
import { useLogin } from "../hooks/useLogin";
import { useSignup } from "../hooks/useSignup";
import { BootstrapToast } from "../../ui/components/BootstrapToast";

export const LoginPage = () => {
  const { email: loginEmail, setEmail: setLoginEmail, password: loginPassword, setPassword: setLoginPassword, error: loginError, loading: loginLoading, onLogin } = useLogin();
  const [toastShow, setToastShow] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const handleSignupSuccess = () => {
    setToastMessage("Cuenta creada correctamente");
    setToastType("success");
    setToastShow(true);
    setView("signin");
  };

  const { name, setName, email: signupEmail, setEmail: setSignupEmail, password: signupPassword, setPassword: setSignupPassword, confirmPassword, setConfirmPassword, error: signupError, loading: signupLoading, onSignup } = useSignup({ onSuccess: handleSignupSuccess });



  const [view, setView] = useState("signup");

  const isSignup = view === "signup";
  const toggleView = () => setView(isSignup ? "signin" : "signup");

  return (
    <>
      <section className="page login-3-page login-3">
        <div className="card">
          <div className="card-bg" style={{ translate: isSignup ? 0 : "100%" }} />

          <Hero
            type="signup"
            active={isSignup}
            title="Bienvenido!"
            text="Inicia sesión para realizar tus compras."
            buttonText="Ingresar"
            onClick={toggleView}
          />

          <AuthForm type="signup" active={isSignup} title="Crear Cuenta">
            {signupError && <p style={{ color: "red", fontSize: "14px" }}>{signupError}</p>}
            <input type="email" placeholder="Correo electrónico" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
            <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
            <input type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={onSignup} disabled={signupLoading}>{signupLoading ? "Cargando..." : "Registrarse"}</button>
          </AuthForm>


          <Hero
            type="signin"
            active={!isSignup}
            title="Hola!"
            text="Comienza tu viaje aquí."
            buttonText="Registrarse"
            onClick={toggleView}
          />

          <AuthForm type="signin" active={!isSignup} title="Iniciar Sesión">
            {loginError && <p style={{ color: "red", fontSize: "14px" }}>{loginError}</p>}
            <input type="text" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
            <button onClick={onLogin} disabled={loginLoading}>{loginLoading ? "Cargando..." : "Iniciar Sesión"}</button>
          </AuthForm>
        </div>
      </section>
      <BootstrapToast show={toastShow} message={toastMessage} type={toastType} duration={1400} onClose={() => setToastShow(false)} />
    </>
  );
};
