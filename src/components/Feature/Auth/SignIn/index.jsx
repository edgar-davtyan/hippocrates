import { useState } from "react";
import { Link } from "react-router-dom";
import AuthHeader from "../../../Shared/AuthHeader";
import SwitchInput from "../../../Shared/SwitchInput";
import InnerButton from "../../../Shared/InnerButton";
import TitleSubtitle from "../../../Shared/TitleSubtitle";
import { AUTH_PATHNAME } from "../../../../constants/authPath";

import "./styles.scss";

const SignIn = () => {
  const [valid, setValid] = useState(false);
  const signUpPath = AUTH_PATHNAME.signUp;
  const resetPasswordPath = AUTH_PATHNAME.resetPassword;

  return (
    <section className="sign_in_container">
      <div className="sign_in_box">
        <div className="signIn_form_box">
          <AuthHeader />
          <div className="form_box">
            <TitleSubtitle
              textAlign="center"
              subTitle="Welcome Back"
              description="Login into your account"
            />
            <form className="form">
              <label htmlFor="email">
                <input type="email" id="email" placeholder="Email" />
                {valid && <p className="invalid_text">Invalid email</p>}
              </label>
              <label htmlFor="password">
                <input type="password" id="password" placeholder="Password" />
                {valid && <p className="invalid_text">Invalid password</p>}
              </label>
              <div className="forgot_password">
                <SwitchInput text="Remember me" />
                <Link to={resetPasswordPath}>Forgotten password?</Link>
              </div>
              <div className="sign_btn">
                <InnerButton text="Log In" />
                <Link to={signUpPath}>
                  <InnerButton text="Sign Up" />
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="sign_in_img" />
      </div>
    </section>
  );
};

export default SignIn;
