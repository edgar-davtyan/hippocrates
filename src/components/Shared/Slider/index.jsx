import { useState } from "react";
import Icon from "../Icon";
import sliderArrowIcon from "../../../public/images/icon/sliderArrow.svg";

import "./styles.scss";

const Slider = () => {
  const [rowsCount] = useState([0, 1, 2]);
  const [activeRow, setActiveRow] = useState(0);

  const nextSlide = () => {
    const count = rowsCount;
    let defaultValue = 0;
    for (let i = 0; i < count.length; i++) {
      if (activeRow === count.length - 1) {
        defaultValue = 0;
      } else if (activeRow + 1 === count[i]) {
        defaultValue = count[i];
        break;
      }
    }
    setActiveRow(defaultValue);
  };

  const prevSlide = () => {
    const count = rowsCount;
    let defaultValue = 0;
    for (let i = 0; i < count.length; i++) {
      if (activeRow === count[0]) {
        defaultValue = count.length - 1;
      } else if (activeRow - 1 === count[i]) {
        defaultValue = count[i];
        break;
      }
    }
    setActiveRow(defaultValue);
  };

  const prevNextSlide = (index) => {
    if (index > activeRow) {
      setActiveRow(index);
    } else {
      setActiveRow(index);
    }
  };

  return (
    <div className="slider_box">
      <div className="slider_box_rows">
        {rowsCount.map((index) => (
          <div
            className={`slider_row ${activeRow === index ? "active_row" : ""}`}
            style={{
              background: `${activeRow === index ? "#5D5FEF" : ""} `,
              width: `${activeRow === index ? "60px" : "30px"} `,
              opacity: `${activeRow === index ? "1" : "0.2"} `,
            }}
            key={index}
            onClick={() => prevNextSlide(index)}
          />
        ))}
      </div>
      <div className="slider_btn">
        <button
          onClick={prevSlide}
          className="left_btn"
          disabled={activeRow === 0}
          style={{ opacity: `${activeRow === 0 ? "0.2" : "1"}` }}
        >
          <div>
            <Icon iconSrc={sliderArrowIcon} />
          </div>
        </button>
        <button
          onClick={nextSlide}
          className="right_btn"
          disabled={activeRow === rowsCount.length - 1}
          style={{
            opacity: `${activeRow === rowsCount.length - 1 ? "0.2" : "1"}`,
          }}
        >
          <div>
            <Icon iconSrc={sliderArrowIcon} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Slider;
