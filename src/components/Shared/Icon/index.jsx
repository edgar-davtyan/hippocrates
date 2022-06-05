import "./styles.scss";

const Icon = ({ iconSrc }) => {
  return (
    <div className="icon_box">
      <img src={iconSrc} alt="#" />
    </div>
  );
};

export default Icon;
