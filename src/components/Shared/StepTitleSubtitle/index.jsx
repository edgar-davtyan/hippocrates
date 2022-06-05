import "./styles.scss";

const StepTitleSubtitle = ({ text, description }) => {
  return (
    <div className="step_text_box">
      <h3>{text}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StepTitleSubtitle;
