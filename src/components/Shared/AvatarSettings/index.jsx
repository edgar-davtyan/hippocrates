import { useState, useEffect } from "react";
import Icon from "../Icon";
import Image from "../Image";
import InnerButton from "../InnerButton";
import SwitchInput from "../SwitchInput";
import TitleSubtitle from "../TitleSubtitle";
import profileImg from "../../../public/images/img/profileSettings.png";
import editDuotoneIcon from "../../../public/images/icon/editDuotone.svg";

import "./styles.scss";

const AvatarSettings = ({ setShowModal }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabHeight, setTabHeight] = useState(0);

  const tabs = [{ name: "Profile" }, { name: "Password" }];

  const handleIndexAndElement = (index) => {
    setTabIndex(index);
    if (index === 0) {
      const profileTabHeight =
        document.querySelector(".profile_tab").offsetHeight;
      setTabHeight(profileTabHeight);
    } else {
      const passwordTabHeight =
        document.querySelector(".password_tab").offsetHeight;
      setTabHeight(passwordTabHeight);
    }
  };

  useEffect(() => {
    handleIndexAndElement(0);
  }, []);

  return (
    <div className="avatar_settings_container">
      <div className="avatar_settings_box">
        <TitleSubtitle title="Settings" subTitle="Account" />
        <div className="tabs_box">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={tabIndex === index ? "active_tab" : ""}
              onClick={() => handleIndexAndElement(index)}
            >
              <p>{tab.name}</p>
            </div>
          ))}
        </div>
        <div className="tabs_banner" style={{ height: tabHeight + "px" }}>
          <div
            className="profile_tab"
            style={{ left: `${tabIndex === 0 ? "0" : "-1000px"}` }}
          >
            <div className="profile_avatar">
              <Image imgSrc={profileImg} />
              <div className="edit_icon">
                <Icon iconSrc={editDuotoneIcon} />
              </div>
            </div>
            <div className="profile_input_structur">
              <form className="profile_form">
                <label htmlFor="text">
                  <input type="text" id="text" placeholder="Name" />
                </label>
                <label htmlFor="email">
                  <input type="email" id="email" placeholder="Email" />
                </label>
                <label htmlFor="date">
                  <input type="date" id="date" placeholder="date" />
                </label>
              </form>
              <div className="form_switch_row">
                <SwitchInput text="Male" />
                <SwitchInput text="Female" />
              </div>
              <div className="profile_btn">
                <InnerButton text="Save" />
                <InnerButton
                  text="Cancel"
                  onClick={() => setShowModal(false)}
                />
              </div>
            </div>
          </div>
          <div
            className="password_tab"
            style={{ left: `${tabIndex === 1 ? "0" : "1000px"}` }}
          >
            <div className="profile_input_structur">
              <form className="profile_form">
                <label htmlFor="currentPassword">
                  <input
                    type="password"
                    id="currentPassword"
                    placeholder="Current password"
                  />
                </label>
                <label htmlFor="newPassword">
                  <input
                    type="emailpassword"
                    id="newPassword"
                    placeholder="New password"
                  />
                </label>
              </form>
              <div className="profile_btn">
                <InnerButton text="Save" />
                <InnerButton
                  text="Cancel"
                  onClick={() => setShowModal(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarSettings;
