import { useState } from "react";

import "./styles.scss";

const ChooseOption = ({ title, options }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="choose_option_box">
      <h3>{title}</h3>
      <div className="option_box">
        {options &&
          options.map((option, index) => (
            <div
              style={{
                background: `${selected === index ? "#3A7F92" : ""}`,
                transform: `${selected === index ? "scale(1.1)" : ""}`,
              }}
              className="option"
              key={index}
              onClick={() => setSelected(index)}
            >
              <p style={{ color: `${selected === index ? "#ECFBFF" : ""}` }}>
                {option.text}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChooseOption;
