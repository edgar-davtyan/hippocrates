import Collapse from "../../Shared/Collapse";
import DateTime from "../../Shared/DateTime";
import EmpatyRow from "../../Shared/EmptyRow";
import GetMessage from "../../Shared/GetMessage";
import SendMessage from "../../Shared/SendMessage";
import CollapseTags from "../../Shared/CollapseTags";
import ChooseOption from "../../Shared/ChooseOption";
import AccountBanner from "../../Shared/AccountBanner";
import DesktopSection from "../../Shared/DesktopSection";
import { OPTIONS } from "../../../constants/choose_option";
import { DESCRIPTION_LIST } from "../../../constants/collapse";
import { DESCRIPTION_ITEMS } from "../../../constants/collapse_tags";

import "./styles.scss";

const DesktopMain = () => {
  return (
    <div className="desktop_main_container">
      <div className="desktop_main_box">
        <div className="account_section">
          <AccountBanner />
        </div>
        <DesktopSection className="desktop_main_section">
          <DateTime />
          <EmpatyRow />
          <GetMessage message="Hello" />
          <GetMessage
            date="01:43"
            message="Do you want to ask a question or make a diagnosis?"
          />
          <SendMessage date="01:43" message="Hi, i have a cough" />
          <div className="row_section">
            <p className="time_text">01:43</p>
            <Collapse high descriptionList={DESCRIPTION_LIST} showSlider />
          </div>
          <div className="row_section">
            <p className="time_text">01:43</p>
            <CollapseTags descriptionItems={DESCRIPTION_ITEMS} />
          </div>
          <div className="row_section">
            <p className="time_text">01:43</p>
            <ChooseOption
              title="Choose an option"
              options={OPTIONS.firstOptions}
            />
          </div>
          <div className="row_section">
            <p className="time_text">01:43</p>
            <ChooseOption
              title="Choose an option"
              options={OPTIONS.seccondOptions}
            />
          </div>
        </DesktopSection>
      </div>
    </div>
  );
};

export default DesktopMain;
