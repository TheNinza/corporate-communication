import "./message-input.styles.scss";
import { ReactComponent as SendButton } from "../../assets/send-button.svg";
import { useState } from "react";
import firebase, { firestore } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUserId } from "../../redux/user/user.selectors";

const MessageInput = ({ chatroomId, currentUserId }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messagesRef = firestore.doc(`messages/${chatroomId}`);
    const snapShot = await messagesRef.get();

    if (!snapShot.exists) {
      console.log("messages Ref doesn't exists");
      return;
    }

    try {
      const createdAt = firebase.firestore.Timestamp.now();

      const messageBody = {
        createdAt,
        sentByUser: currentUserId,
        sentInChatroom: chatroomId,
        content: message,
        type: "text",
      };

      await messagesRef.update({
        messages: firebase.firestore.FieldValue.arrayUnion(messageBody),
      });

      setMessage("");
    } catch (error) {
      console.log("Error sending messages", error);
    }
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

const mapStateToProps = createStructuredSelector({
  currentUserId: selectCurrentUserId,
});

export default connect(mapStateToProps)(MessageInput);
