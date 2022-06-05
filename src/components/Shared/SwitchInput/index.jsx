import "./styles.scss";

const SwitchInput = ({ text, checked, onClick }) => {
  return (
    <div className="switch_input_box" onClick={onClick}>
      <label className="switch">
        <input type="checkbox" checked={checked} />
        <span className="slider round"></span>
      </label>
      <p className="switch_text">{text}</p>
    </div>
  );
};

export default SwitchInput;
