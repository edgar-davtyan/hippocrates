import { Link } from "react-router-dom";
import Icon from "../Icon";
import arrowIcon from "../../../public/images/icon/arrow.svg";

import "./styles.scss";

const BackButton = ({ path, buttonText }) => {
  return (
    <Link to={path}>
      <button className="back_button_box">
        <div className="back_button_icon">
          <Icon iconSrc={arrowIcon} />
        </div>
        <p>{buttonText}</p>
      </button>
    </Link>
  );
};

export default BackButton;
