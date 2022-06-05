import StepSection from "./StepSection";
import SocialSection from "./SocialSection";
import AdvisorSection from "./AdvisorSection";
import ContactSection from "./ContactSection";
import SubscribeSection from "./SubscribeSection";
import TechnologiesSection from "./TechnologiesSection";

const Home = () => {
  return (
    <div>
      <AdvisorSection />
      <StepSection />
      <TechnologiesSection />
      <ContactSection />
      <SocialSection />
      <SubscribeSection />
    </div>
  );
};

export default Home;
