import Sidebar from "../../components/sidebar/sidebar.component";
import "./chats-page.styles.scss";
import { ReactComponent as ChatsPageImage } from "../../assets/chatspage-image.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectActiveChatRoom } from "../../redux/chatrooms/chatroom.selectors";
import ChatBox from "../../components/chatbox/chatbox.component";

const ChatsPage = ({ activeChatroom }) => {
  return (
    <div className="chats-page">
      <Sidebar />
      <div className="main">
        {activeChatroom?.chatroomId ? (
          <ChatBox />
        ) : (
          <ChatsPageImage className="chatspage-image" />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  activeChatroom: selectActiveChatRoom,
});

export default connect(mapStateToProps)(ChatsPage);
