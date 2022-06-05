import Contact from "../../../Shared/Contact";
import Section from "../../../Shared/Section";
import EmptyRow from "../../../Shared/EmptyRow";
import ContactMap from "../../../Shared/ContactMap";
import TitleSubtitle from "../../../Shared/TitleSubtitle";

import "./styles.scss";

const ContactSection = () => {
  return (
    <Section className="contact_section" id="Contact">
      <EmptyRow />
      <div className="contact_container">
        <div className="contact_box">
          <div className="contact">
            <div className="contact_title">
              <TitleSubtitle
                title="Feadback"
                subTitle="Contact with our team"
              />
            </div>
            <Contact />
          </div>
        </div>
        <div className="contact_map_box">
          <ContactMap />
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
