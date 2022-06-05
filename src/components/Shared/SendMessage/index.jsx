import "./styles.scss";

const SendMessage = ({ message, date }) => {
  return (
    <div className="send_message_container">
      <div className="send_message_box">
        <p>{message}</p>
      </div>
      <span>{date}</span>
    </div>
  );
};

export default SendMessage;
