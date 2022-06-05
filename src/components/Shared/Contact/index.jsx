import InnerButton from "../InnerButton";

import "./styles.scss";

const Contact = () => {
  return (
    <div className="contact_box">
      <form className="contact_form">
        <label htmlFor="name">
          <input type="text" id="name" placeholder="First Name" />
        </label>
        <label htmlFor="phone">
          <input type="phone" id="phone" placeholder="Your phone" />
        </label>
        <label htmlFor="email">
          <input type="email" id="email" placeholder="Enter Email" />
        </label>
        <label htmlFor="message">
          <input type="text" id="message" placeholder="Message" />
        </label>
      </form>
      <div className="contact_btn">
        <InnerButton text="Subbmit" type="submit" />
      </div>
    </div>
  );
};

export default Contact;
