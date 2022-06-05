import AuthHeader from "../../../Shared/AuthHeader";
import InnerButton from "../../../Shared/InnerButton";
import SwitchInput from "../../../Shared/SwitchInput";
import TitleSubtitle from "../../../Shared/TitleSubtitle";

import "./styles.scss";

const SignUp = () => {
  return (
    <section className="sign_up_container">
      <div className="sign_up_box">
        <div className="sign_up_img" />
        <div className="signIn_form_box">
          <AuthHeader />
          <div className="form_box">
            <TitleSubtitle
              textAlign="center"
              subTitle="Hello there!"
              description="we’re almost done. Before using our services you need to create an account."
            />
            <form className="form">
              <label htmlFor="email">
                <input type="email" id="email" placeholder="Email" />
              </label>
              <label htmlFor="password">
                <input type="password" id="password" placeholder="Password" />
              </label>
              <label htmlFor="birthday">
                <input
                  type="password"
                  id="birthday"
                  placeholder="Birthday date"
                />
              </label>
              <div className="switch_row">
                <SwitchInput text="Male" />
                <SwitchInput text="Female" />
              </div>
              <InnerButton text="Sign up" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
