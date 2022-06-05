import { Link } from "react-router-dom";
import Image from "../../../Shared/Image";
import Section from "../../../Shared/Section";
import EmptyRow from "../../../Shared/EmptyRow";
import InnerButton from "../../../Shared/InnerButton";
import TitleSubtitle from "../../../Shared/TitleSubtitle";
import doctorImg from "../../../../public/images/img/doctor.png";
import { DESKTOP_PATH } from "../../../../constants/desktopPath";

import "./styles.scss";

const TechnologiesSection = () => {
  return (
    <Section className="txn_container" id="About">
      <EmptyRow />
      <div className="txn_box">
        <div className="txn_info">
          <TitleSubtitle
            textAlign="left"
            title="About"
            subTitle="GBT Technologies, Inc. (“GBT”)"
            description="GBT Technologies, Inc. (“GBT”) is a technology company focusing on artificial intelligence innovations and chip design. The company is developing a portfolio of Intellectual Property that is targeted to break new horizons in the field of intelligent systems by introducing new architecture integrated circuit technology, enabling powerful artificial intelligence applications."
          />
          <div className="txn_button">
            <Link to={DESKTOP_PATH.desktopMain}>
              <InnerButton text="Get started now" />
            </Link>
          </div>
        </div>
        <div className="txn_img">
          <Image imgSrc={doctorImg} />
        </div>
      </div>
    </Section>
  );
};

export default TechnologiesSection;
