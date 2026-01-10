export const Hero = ({ type, active, title, text, buttonText, onClick }) => {
  return (
    <div className={`hero ${type} ${active ? "active" : ""}`}>
      <h2>{title}</h2>
      <p>{text}</p>
      <button type="button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}