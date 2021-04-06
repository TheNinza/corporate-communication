import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectActiveChatRoom } from "../../redux/chatrooms/chatroom.selectors";
import "./chatbox.styles.scss";

const ChatBox = ({ activeChatroom }) => {
  const { chatroomId } = activeChatroom;

  return (
    <div className="chatbox">
      <h1>Helloooo {chatroomId}</h1>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  activeChatroom: selectActiveChatRoom,
});

export default connect(mapStateToProps)(ChatBox);
