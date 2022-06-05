import "./styles.scss";

const SocialContact = ({ lists }) => {
  return (
    <div className="social_contact_box">
      {lists.map((list, index) => (
        <p key={index}>
          <a target="_blank" rel="noreferrer" href={list.href}>
            {list.text}
          </a>
        </p>
      ))}
    </div>
  );
};

export default SocialContact;
