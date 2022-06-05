import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../Icon";
import Button from "../Button";
import Section from "../Section";
import Hamburger from "./Hamburger";
import ProfileAvatar from "../ProfileAvatar";
import { AUTH_PATHNAME } from "../../../constants/authPath";
import { DESKTOP_PATH } from "../../../constants/desktopPath";
import hippocrates from "../../../public/images/logo/hippocrates.png";
import { NAVIGATION_ITEMS } from "../../../constants/navigation_items";
import hamburgerLogoIcon from "../../../public/images/logo/hamburgerLogo.png";

import "./styles.scss";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [showIcon, setShowIcon] = useState(true);
  const [windowSize, setWindowSize] = useState({
    windowWidth: window.innerWidth,
  });

  const header = useRef(null);

  const { pathname } = useLocation();

  const signInPath = AUTH_PATHNAME.signIn;
  const signUpPath = AUTH_PATHNAME.signUp;

  const headerRef = useRef(null);

  const getWindowSize = () => {
    setWindowSize({
      windowWidth: window.innerWidth,
    });
  };

  const scrollSection = (name) => {
    setActive(name);
    const steps = document.getElementById(name);
    const sectionTop = steps?.offsetTop;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  const getSectionPosition = (top) => {
    const navigationList = NAVIGATION_ITEMS;

    for (let item of navigationList) {
      const section = document.getElementById(item.name);
      const isSectionOffsetTopExist =
        typeof section === "object" &&
        section &&
        typeof section.offsetTop === "number";
      if (!isSectionOffsetTopExist) continue;
      const isScrolledToCurrentSection = top >= section?.offsetTop - 100;
      if (isScrolledToCurrentSection) {
        setActive(section?.id);
      }
    }
  };

  const addClassAndRemove = () => {
    const offsetY = window.scrollY;
    if (offsetY >= 30) {
      headerRef.current.classList.add("active_header");
    } else {
      headerRef.current.classList.remove("active_header");
    }
    getSectionPosition(offsetY);
  };

  useEffect(() => {
    window.addEventListener("resize", getWindowSize);
    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, [windowSize]);

  useEffect(() => {
    window.addEventListener("scroll", addClassAndRemove);
    return () => {
      window.removeEventListener("scroll", addClassAndRemove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pathDesktopMain = pathname !== DESKTOP_PATH.desktopMain;

  return (
    <div className="container" ref={header}>
      <Section
        className={`${
          pathDesktopMain ? "header_section" : "desktop_main_header"
        } `}
        id="header"
        headerRef={headerRef}
      >
        <div>
          <header className="header_container">
            {showIcon && (
              <div className="hamburger_logo">
                <Link to="/">
                  <Icon iconSrc={hamburgerLogoIcon} />
                </Link>
              </div>
            )}
            <div className="logo_box">
              <Link to="/">
                <Icon iconSrc={hippocrates} />
              </Link>
            </div>
            {pathDesktopMain && (
              <>
                <nav className="navigation">
                  {NAVIGATION_ITEMS.map((item, index) => (
                    <div
                      className={`navigation_item ${
                        active === item.name && "active_item"
                      }`}
                      onClick={() => scrollSection(item.name)}
                      key={index}
                    >
                      {item.name}
                    </div>
                  ))}
                </nav>
                <div className="buttons_box">
                  <Link to={signInPath}>
                    <Button transparent={true} text="Sign In" />
                  </Link>
                  <Link to={signUpPath}>
                    <Button text="Sign Up" />
                  </Link>
                </div>
              </>
            )}
            {pathDesktopMain && windowSize.windowWidth <= 768 && (
              <Hamburger setShowIcon={setShowIcon} />
            )}
            {!pathDesktopMain && <ProfileAvatar />}
          </header>
        </div>
      </Section>
    </div>
  );
};

export default Header;
