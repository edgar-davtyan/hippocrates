import BackButton from "../../../Shared/BackButton";
import AuthHeader from "../../../Shared/AuthHeader";
import InnerButton from "../../../Shared/InnerButton";
import TitleSubtitle from "../../../Shared/TitleSubtitle";

import "./styles.scss";

const ResetPassword = () => {
  return (
    <section className="reset_password_container">
      <div className="reset_password_box">
        <div className="reset_form_box">
          <div className="back_button_row">
            <BackButton path="/signIn" buttonText="Back" />
          </div>
          <AuthHeader />
          <div className="form_box">
            <TitleSubtitle textAlign="center" subTitle="Reset password" />
            <form className="form">
              <label htmlFor="email">
                <input type="email" id="email" placeholder="Email" />
              </label>
              <div className="reset_btn">
                <InnerButton text="Reset password" />
              </div>
            </form>
          </div>
        </div>
        <div className="reset_img" />
      </div>
    </section>
  );
};

export default ResetPassword;
