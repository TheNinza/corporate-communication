import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectActiveChatRoom } from "../../redux/chatrooms/chatroom.selectors";
import ChatboxHeader from "../chatbox-header/chatbox-header.component";
import MessageBox from "../message-box/message-box.component";
import MessageInput from "../message-input/message-input.component";
import "./chatbox.styles.scss";

const ChatBox = ({ activeChatroom }) => {
  const { chatRoomName } = activeChatroom;

  return (
    <div className="chatbox">
      <ChatboxHeader chatRoomName={chatRoomName} />
      <MessageBox />
      <MessageInput />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  activeChatroom: selectActiveChatRoom,
});

export default connect(mapStateToProps)(ChatBox);
