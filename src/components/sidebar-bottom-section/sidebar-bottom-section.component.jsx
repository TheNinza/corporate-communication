import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthorisedChatrooms } from "../../redux/chatrooms/chatroom.selectors";
import Chatroom from "../chatroom/chatroom.component";
import "./sidebar-bottom-section.styles.scss";

const SidebarBottomSection = ({ authorisedChatrooms }) => {
  return (
    <div className="sidebar-bottom-section">
      <div className="chatrooms-container">
        {authorisedChatrooms.map(({ chatRoomName, chatroomId }) => (
          <Chatroom chatRoomName={chatRoomName} key={chatroomId} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  authorisedChatrooms: selectAuthorisedChatrooms,
});

export default connect(mapStateToProps)(SidebarBottomSection);
