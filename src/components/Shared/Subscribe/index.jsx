import Icon from "../Icon";
import InnerButton from "../InnerButton";
import TitleSubtitle from "../TitleSubtitle";
import formMessageIcon from "../../../public/images/icon/formMessage.svg";

import "./styles.scss";

const Subscribe = ({ title }) => {
  return (
    <div className="subsccribe_box">
      <TitleSubtitle subTitle={title} textAlign="center" />
      <div className="subsccribe_formBtn_box">
        <form className="subsccribe_form">
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              placeholder="Enter your e-mail address"
            />
            <div>
              <Icon iconSrc={formMessageIcon} />
            </div>
          </label>
          <InnerButton text="Subscribe" />
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
