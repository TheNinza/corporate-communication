import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentChatroomMessages } from "../../redux/messages/messages.selectors";
import "./message-box.styles.scss";

const MessageBox = ({ messages }) => {
  return (
    <div className="message-box">
      {messages.map(({ content }, index) => (
        <div className="message" key={index}>
          {content}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  messages: selectCurrentChatroomMessages,
});

export default connect(mapStateToProps)(MessageBox);
