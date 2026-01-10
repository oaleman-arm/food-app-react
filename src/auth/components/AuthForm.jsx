export const AuthForm = ({ type, active, title, children }) => {
  return (
    <div className={`form ${type} ${active ? "active" : ""}`}>
      <h2>{title}</h2>
      <p>Utiliza tu dirección de correo electrónico</p>
      <form>{children}</form>
    </div>
  );
};