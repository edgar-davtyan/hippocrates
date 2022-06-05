import Icon from "../../Shared/Icon";

import "./styles.scss";

const ApplicationMedia = ({
  iconSrc,
  applTitle,
  applSubTitle,
  transparent,
}) => {
  return (
    <a href="/" target="_blank" rel="noreferrer">
      <div
        className={`application_box ${
          transparent && "transparent_application_box"
        }`}
      >
        <div className="application_icon">
          <Icon iconSrc={iconSrc} />
        </div>
        <div className="application_text">
          <span>{applTitle}</span>
          <p>{applSubTitle}</p>
        </div>
      </div>
    </a>
  );
};

export default ApplicationMedia;
