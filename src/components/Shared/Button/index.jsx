import "./styles.scss";

const Button = ({ text, transparent, ...rest }) => {
  return (
    <button className={`btn ${transparent && "transparent_btn"}`} {...rest}>
      <p className="btn_text">{text}</p>
    </button>
  );
};

export default Button;
