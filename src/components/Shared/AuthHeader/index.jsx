import { Link, useLocation } from "react-router-dom";
import Image from "../Image";
import { AUTH_PATHNAME } from "../../../constants/authPath";
import hippocrates from "../../../public/images/logo/hippocrates.png";

import "./styles.scss";

const AuthHeader = () => {
  const { pathname } = useLocation();

  const signUpPath = AUTH_PATHNAME.signUp;
  const signInPath = AUTH_PATHNAME.signIn;
  const resetPasswordPath = AUTH_PATHNAME.resetPassword;

  const authPathname = pathname === signInPath;

  return (
    <header className="auth_header_container">
      <div className="auth_header_box">
        <div className="auth_header_logo">
          <Link to="/">
            <Image imgSrc={hippocrates} />
          </Link>
        </div>
        <div className="auth_header_text">
          {authPathname ? (
            <p>Don’t have an account?</p>
          ) : pathname === resetPasswordPath ? (
            <p>Don’t have an account?</p>
          ) : (
            <p>Have an account?</p>
          )}
          {authPathname ? (
            <Link to={signUpPath}>Sign up!</Link>
          ) : pathname === resetPasswordPath ? (
            <Link to={signUpPath}>Sign up!</Link>
          ) : (
            <Link to={signInPath}>Sign In!</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
