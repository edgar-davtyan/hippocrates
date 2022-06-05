import { Link } from "react-router-dom";
import Icon from "../Icon";
import Button from "../Button";
import Section from "../Section";

import "./styles.scss";

const Banner = ({ iconSrc, text, buttonText, buttonOnclick }) => {
  return (
    <Section className="banner_section">
      <div className="banner_box">
        <div className="banner_text">
          <div className="banner_icon">
            <Icon iconSrc={iconSrc} />
          </div>
          <p>{text}</p>
        </div>
        <Link to={"/"}>
          <Button text={buttonText} onClick={buttonOnclick} />
        </Link>
      </div>
    </Section>
  );
};

export default Banner;
