import { useEffect } from "react";
import { connect } from "react-redux";
import { firestore } from "../../firebase/firebase.utils";
import { selectActiveChatRoom } from "../../redux/chatrooms/chatroom.selectors";
import { updateMessages } from "../../redux/messages/messages.actions";
import ChatboxHeader from "../chatbox-header/chatbox-header.component";
import MessageBox from "../message-box/message-box.component";
import MessageInput from "../message-input/message-input.component";
import "./chatbox.styles.scss";

const ChatBox = ({ activeChatroom, updateMessages }) => {
  const { chatRoomName, chatroomId } = activeChatroom;

  // console.log(activeChatroom);

  let unsubscribe = null;

  useEffect(() => {
    unsubscribe = firestore
      .collection("messages")
      .doc(chatroomId)
      .onSnapshot((snapShot) => {
        updateMessages(snapShot.data().messages);
      });

    return () => {
      console.log("unsubscibed");
      unsubscribe();
    };
  }, [chatroomId]);

  return (
    <div className="chatbox">
      <ChatboxHeader chatRoomName={chatRoomName} />
      <MessageBox />
      <MessageInput chatroomId={chatroomId} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  activeChatroom: selectActiveChatRoom(ownProps.match.params.chatroomId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateMessages: (messageArray) => dispatch(updateMessages(messageArray)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
