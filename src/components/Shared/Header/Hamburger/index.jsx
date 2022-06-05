import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../Modal";
import Button from "../../Button";
import Image from "../../../Shared/Image";
import AvatarSettings from "../../AvatarSettings";
import { AUTH_PATHNAME } from "../../../../constants/authPath";
import { NAVIGATION_ITEMS } from "../../../../constants/navigation_items";
import hamburgerLogoLight from "../../../../public/images/logo/hamburgerLogoLight.png";

import "./styles.scss";

const Hamburger = ({ setShowIcon }) => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);

  const signInPath = AUTH_PATHNAME.signIn;
  const signUpPath = AUTH_PATHNAME.signUp;

  const handleHamburger = () => {
    setActive(!active);
    setShowIcon(active);
  };

  const scrollSection = (name) => {
    handleHamburger();
    setTimeout(() => {
      const steps = document.getElementById(name);
      const sectionTop = steps?.offsetTop;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div className="hambuger_container" style={active ? { width: "100%" } : {}}>
      {active && (
        <div className="hamburger_logo_light">
          <Link to="/" onClick={() => handleHamburger()}>
            <Image imgSrc={hamburgerLogoLight} />
          </Link>
        </div>
      )}
      <div className="hambuger_box" onClick={() => handleHamburger()}>
        <p>{active ? "Close" : "Menu"}</p>
        <div className="hamburger_icon">
          <div className={`first_icon ${active && "active_first"} `} />
          <div className={`middle_icon ${active && "hide_middle"}`} />
          <div className={`last_icon ${active && "active_last"}`} />
        </div>
      </div>
      <div
        className="hamburger_menu"
        style={{
          top: `${active ? 0 : ""}`,
          zIndex: `${showModal ? "0" : "-1"}`,
        }}
      >
        <div className="hamburger_menu_box">
          <nav className="hamburger_navigation">
            {NAVIGATION_ITEMS.map((item, index) => (
              <div key={index} onClick={() => scrollSection(item.name)}>
                {item.name}
              </div>
            ))}
            <div className="settings_box">
              <Button
                text="Settings"
                onClick={() => setShowModal(true)}
                transparent={true}
              />
            </div>
          </nav>
          <div className="hamburger_btn">
            <Link to={signInPath} onClick={() => handleHamburger()}>
              <Button text="Sign In" transparent={true} />
            </Link>
            <Link to={signUpPath} onClick={() => handleHamburger()}>
              <Button text="Sign Up" transparent={true} />
            </Link>
          </div>
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <AvatarSettings showModal={showModal} setShowModal={setShowModal} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
