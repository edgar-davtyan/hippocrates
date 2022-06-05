import Icon from "../Icon";
import Section from "../Section";
import SocialContact from "../SocialContact";
import { SOCIAL_CONTACT } from "../../../constants/social_contact";
import locationIcon from "../../../public/images/icon/location.svg";
import footerMessageIcon from "../../../public/images/icon/footerMessage.svg";
import hippocratesFooterIcon from "../../../public/images/logo/hippocratesFooter.svg";

import "./styles.scss";

const Footer = () => {
  const scrollSection = (name) => {
    const steps = document.getElementById(name);
    const sectionTop = steps?.offsetTop;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  return (
    <Section className="footer_container">
      <div className="footer_box">
        <div className="footer_info">
          <div className="footer_logo">
            <Icon iconSrc={hippocratesFooterIcon} />
          </div>
          <div className="footer_contact">
            <div>
              <div>
                <Icon iconSrc={locationIcon} />
              </div>
              GBT Technologies.2500 Broadway, Suite F-125 Santa Monica, CA 90404
              USA
            </div>
            <div>
              <div>
                <Icon iconSrc={footerMessageIcon} />
              </div>
              info@gbtti.com
            </div>
          </div>
          <div className="footer_privacy">
            <p>
              Hippocrates health system is an AI based medical advisor. Users
              may provide symptoms, ask medical questions and describe
              conditions in order to get diagnosis advise, including known
              medication and treatments.
            </p>
            <p>
              All rights reserved Copyright © 2022 GBT Technologies, Inc.
              (“GBT”)
            </p>
          </div>
        </div>
        <div className="footer_social_contact_info">
          <SocialContact lists={SOCIAL_CONTACT.social} />
          <div className="footer_navigation">
            {SOCIAL_CONTACT.contact.map((item, index) => (
              <div
                className="footer_navigation_list"
                key={index}
                onClick={() => scrollSection(item.text)}
              >
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
