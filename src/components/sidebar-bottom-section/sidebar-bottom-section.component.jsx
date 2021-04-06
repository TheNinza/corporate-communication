import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { changeActiveChatroom } from "../../redux/chatrooms/chatroom.actions";
import { selectAuthorisedChatrooms } from "../../redux/chatrooms/chatroom.selectors";
import Chatroom from "../chatroom/chatroom.component";
import "./sidebar-bottom-section.styles.scss";

const SidebarBottomSection = ({
  authorisedChatrooms,
  changeActiveChatroom,
}) => {
  const onChatroomClick = (chatroom) => {
    changeActiveChatroom(chatroom);
  };

  return (
    <div className="sidebar-bottom-section">
      <div className="chatrooms-container">
        {authorisedChatrooms.map((chatroom) => (
          <Chatroom
            onClick={() => onChatroomClick(chatroom)}
            chatRoomName={chatroom.chatRoomName}
            key={chatroom.chatroomId}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  authorisedChatrooms: selectAuthorisedChatrooms,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveChatroom: (chatroom) => dispatch(changeActiveChatroom(chatroom)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarBottomSection);
