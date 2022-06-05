import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../../Shared/Image";
import Banner from "../../../Shared/Banner";
import Section from "../../../Shared/Section";
import Modal from "../../../Shared/Modal";
import InnnerButton from "../../../Shared/InnerButton";
import phoneImg from "../../../../public/images/img/phone.png";
import { DESKTOP_PATH } from "../../../../constants/desktopPath";
import { ADVISOR_BANNER } from "../../../../constants/banner_info";

import "./styles.scss";

const AdvisorSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Section className="advisor_container" id="Home">
      <div className="advisor_box">
        <div className="advisor_info">
          <button className="info_btn">
            <p>Hippocrates</p>
          </button>
          <div className="info_title">
            <p>
              <span>AI-based</span>
              medical advisor
            </p>
          </div>
          <div className="info_subtitle">
            <p>
              Hippocrates health system is an AI based medical advisor. Users
              may provide symptoms, ask medical questions and describe
              conditions in order to get diagnosis advise, including known
              medication and treatments.
            </p>
          </div>
          <Link to={DESKTOP_PATH.desktopMain}>
            <InnnerButton text="Get started now" />
          </Link>
        </div>
        <div className="advisor_img">
          <Image imgSrc={phoneImg} />
        </div>
      </div>
      <div className="banner_container">
        <Banner
          buttonOnclick={() => setShowModal(true)}
          iconSrc={ADVISOR_BANNER.iconSrc}
          text={ADVISOR_BANNER.text}
          buttonText={ADVISOR_BANNER.buttonText}
        />
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="additional_box">
          <h3>Additional Information</h3>
          <p>
            The contents of the Hippocrates website, such as text, graphics,
            images, and other material contained on the Hippocrates (hmd.care)
            website ("Content") are for informational purposes only. The Content
            is not intended to be a substitute for professional medical advice,
            diagnosis, or treatment. Always seek the advice of your physician or
            other qualified health provider with any questions you may have
            regarding a medical condition. Never disregard professional medical
            advice or delay in seeking it because of something you have read on
            the Hippocrates (hmd.care) website! If you think you may have a
            medical emergency, call your doctor or 911 immediately. Hippocrates
            (hmd.care) does not recommend or endorse any specific tests,
            physicians, products, procedures, opinions, or other information
            that may be mentioned on the Hippocrates (hmd.care) website.
            Reliance on any information provided by Hippocrates (hmd.care),
            Hippocrates (hmd.care) employees, others appearing on the website at
            the invitation of Hippocrates (hmd.care), or other visitors to the
            Site is solely at your own risk.
          </p>
        </div>
      </Modal>
    </Section>
  );
};

export default AdvisorSection;
