import { useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { AUTH_PATHNAME } from "../../constants/authPath";
import { DESKTOP_PATH } from "../../constants/desktopPath";
import SendMessageBanner from "../Shared/SendMessageBanner";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const signInPath = pathname === AUTH_PATHNAME.signIn;
  const signUpPath = pathname === AUTH_PATHNAME.signUp;
  const desktopMainPath = pathname === DESKTOP_PATH.desktopMain;
  const resetPasswordPath = pathname === AUTH_PATHNAME.resetPassword;

  return (
    <>
      {signInPath || signUpPath || resetPasswordPath ? null : <Header />}
      {children}
      {desktopMainPath && <SendMessageBanner />}
      {signInPath || signUpPath || resetPasswordPath ? null : <Footer />}
    </>
  );
};

export default Layout;
