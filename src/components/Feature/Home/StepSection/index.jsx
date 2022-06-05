import Image from "../../../Shared/Image";
import Section from "../../../Shared/Section";
import EmptyRow from "../../../Shared/EmptyRow";
import TitleSubtitle from "../../../Shared/TitleSubtitle";
import { STEP_INFO } from "../../../../constants/step_info";
import phoneImg from "../../../../public/images/img/phone.png";
import StepTitleSubtitle from "../../../Shared/StepTitleSubtitle";
import mobileChatImg from "../../../../public/images/img/mobileChat.png";

import "./styles.scss";

const StepSection = () => {
  return (
    <Section id="Steps">
      <EmptyRow />
      <div className="step_title_box">
        <TitleSubtitle
          textAlign="center"
          title="How is work"
          subTitle="It's easy to speak with the doctor now"
        />
      </div>
      <div className="step_box">
        <div className="phone_img_desktop">
          <Image imgSrc={phoneImg} />
        </div>
        <div className="steps">
          {STEP_INFO.map((info, index) => (
            <StepTitleSubtitle
              key={index}
              text={info.text}
              description={info.description}
            />
          ))}
        </div>
        <div className="mobile_img_chat">
          <Image imgSrc={mobileChatImg} />
          <p className="mobile_chat_description">
            Add additional list of symptoms from the triggered diagnosis
          </p>
        </div>
      </div>
    </Section>
  );
};

export default StepSection;
