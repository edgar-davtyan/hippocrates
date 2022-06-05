import { useState } from "react";
import Icon from "../Icon";
import Slider from "../Slider";
import plusIcon from "../../../public/images/icon/plus.svg";
import minusIcon from "../../../public/images/icon/minus.svg";
import readMoreIcon from "../../../public/images/icon/readMore.svg";

import "./styles.scss";

const Collapse = ({ low, mid, high, showSlider, descriptionList }) => {
  const [show, setShow] = useState(false);
  const [elementHeight, setElementHeight] = useState(null);

  const getElementHeight = () => {
    const parentCollapse = document.querySelectorAll(".collapse_description");
    const collapseChildrenHeight = 40 * parentCollapse.length + 162;
    let childrenOffsetHeight = collapseChildrenHeight;
    for (let i = 0; i < parentCollapse.length; i++) {
      const elementChildren = parentCollapse[i].offsetHeight;
      childrenOffsetHeight += elementChildren;
    }
    setShow(!show);
    setElementHeight(childrenOffsetHeight + "px");
  };

  return (
    <div className="collapse_container">
      <div
        className="collapse_box"
        style={
          elementHeight && show ? { height: elementHeight } : { height: "88px" }
        }
      >
        <div className="collapse_box_banner">
          <div className="collapse_title">
            <p
              style={
                low
                  ? { color: "#FF6161" }
                  : mid
                  ? { color: "#FFCC40" }
                  : high && { color: "#50DFB2" }
              }
            >
              <span /> low probability
            </p>
            <h3>MIGRAINE HEADACHE</h3>
          </div>
          <div className="show_icon_box" onClick={getElementHeight}>
            <p>{show ? "Show less" : "Show more"}</p>
            <div className="shwo_icon">
              <Icon iconSrc={show ? minusIcon : plusIcon} />
            </div>
          </div>
        </div>
        {descriptionList &&
          descriptionList.map((item, index) => (
            <div className="collapse_description" key={index}>
              <h4>{item.description}</h4>
              <p>{item.subDescription}</p>
            </div>
          ))}
        <div className="read_more">
          <button className="read_more_btn">
            <p>Read more</p>
            <div>
              <Icon iconSrc={readMoreIcon} />
            </div>
          </button>
        </div>
      </div>
      {showSlider && (
        <div className="collapse_slider">
          <Slider />
        </div>
      )}
    </div>
  );
};

export default Collapse;
