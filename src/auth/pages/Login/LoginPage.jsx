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
  const navigate = useNavigate();
  const onLogin = () => {
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
          <input type="password" placeholder="Password" />
          <button onClick={onLogin}>SIGN UP</button>
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
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a>Forgot password?</a>
          <button onClick={onLogin}>SIGN IN</button>
        </AuthForm>
      </div>
    </section>
  );
};
