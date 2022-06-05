import "./styles.scss";

const GetMessage = ({ message, date }) => {
  return (
    <div className="get_message_container">
      <span>{date}</span>
      <div className="get_message_box">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default GetMessage;
