import { useState, useEffect } from "react";
import Icon from "../Icon";
import InnerButton from "../InnerButton";
import optionIcon from "../../../public/images/icon/option.svg";
import SendMessageIcon from "../../../public/images/icon/SendMessage.svg";

import "./styles.scss";

const SendMessageBanner = () => {
  const [footerFix, setFooterFix] = useState(null);
  const [showOption, setShowOption] = useState(false);
  const [footerHeight, setFooterHeight] = useState(null);
  console.log(footerFix);

  const getFooterHeight = () => {
    const footerOffsetHeight =
      document.querySelector(".footer_container").offsetHeight - 16;
    setFooterHeight(footerOffsetHeight);
  };

  useEffect(() => {
    getFooterHeight();
  }, []);

  const handleScroll = () => {
    const footerOffsetTop =
      document.querySelector(".footer_container").offsetTop;
    const windowScrollY = window.pageYOffset;
    const windowInnerHeight = window.innerHeight;

    if (footerOffsetTop - windowInnerHeight >= windowScrollY - 10) {
      setFooterFix(true);
    } else {
      setFooterFix(false);
    }
  };

  useEffect(() => {
    setFooterFix(true);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`send_message_banner_container ${showOption ? "hide_send_message_banner" : ""
        }`}
      style={{
        position: `${footerFix ? "fixed" : "absolute"}`,
        bottom: `${footerFix ? "0" : footerHeight + "px"}`,
      }}
    >
      <div className="choose_option_message">
        <div
          className="option_message_box"
          onClick={() => setShowOption(!showOption)}
        >
          <div className="option_icon">
            <Icon iconSrc={optionIcon} />
          </div>
          <p>Choose an option</p>
        </div>
        <div
          className="choose_btn"
          style={{
            height: `${showOption ? "200px" : "0"}`,
          }}
        >
          <InnerButton text="Ask a question" />
          <InnerButton text="Make a diagnosis" />
          <InnerButton text="Start over" />
        </div>
      </div>
      <div className="send_banner">
        <div className="send_box">
          <label htmlFor="sendMessage">
            <input
              type="text"
              id="sendMessage"
              placeholder="Start type here..."
            />
            <div className="send_message_icon">
              <Icon iconSrc={SendMessageIcon} />
            </div>
          </label>
        </div>
      </div>
    </section>
  );
};

export default SendMessageBanner;
