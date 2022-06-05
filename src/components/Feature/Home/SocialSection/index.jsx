import Image from "../../../Shared/Image";
import Section from "../../../Shared/Section";
import EmaptyRow from "../../../Shared/EmptyRow";
import TitleSubtitle from "../../../Shared/TitleSubtitle";
import phoneImg from "../../../../public/images/img/phone.png";
import ApplicationMedia from "../../../Shared/ApplicationMedia";
import { APPLICATION_MEDIA } from "../../../../constants/application_media";

import "./styles.scss";

const SocialSection = () => {
  return (
    <Section className="social_container">
      <EmaptyRow />
      <div className="social_box">
        <div className="social_info">
          <TitleSubtitle
            title="Mobile applications"
            subTitle="Work anywhere, with any device"
            description="These companies release their own versions of the operating systems with minor changes, and yet always with the same bottom line. "
          />
          <div className="application_container">
            {APPLICATION_MEDIA.map((media, index) => (
              <ApplicationMedia
                key={index}
                iconSrc={media.iconSrc}
                applTitle={media.applTitle}
                transparent={media.transparent}
                applSubTitle={media.applSubTitle}
              />
            ))}
          </div>
        </div>
        <Image imgSrc={phoneImg} />
      </div>
    </Section>
  );
};

export default SocialSection;
