import "./message-input.styles.scss";
import { ReactComponent as SendButton } from "../../assets/send-button.svg";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="message-input">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">
          <SendButton />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
