import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Feature/Home";
import SignIn from "./components/Feature/Auth/SignIn";
import SignUp from "./components/Feature/Auth/SignUp";
import DesktopMain from "./components/Feature/DesktopMain";
import ResetPassword from "./components/Feature/Auth/ResetPassword";
import { AUTH_PATHNAME } from "./constants/authPath";
import { DESKTOP_PATH } from "./constants/desktopPath";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={AUTH_PATHNAME.signIn} element={<SignIn />} />
          <Route path={AUTH_PATHNAME.signUp} element={<SignUp />} />
          <Route
            path={AUTH_PATHNAME.resetPassword}
            element={<ResetPassword />}
          />
          <Route path={DESKTOP_PATH.desktopMain} element={<DesktopMain />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
