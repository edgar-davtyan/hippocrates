import "./styles.scss";

const InnerButton = ({ text, ...rest }) => {
  return (
    <button className="inner_button" {...rest}>
      <p>{text}</p>
    </button>
  );
};

export default InnerButton;
