import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUserId } from "../../redux/user/user.selectors";
import { firestore } from "../../firebase/firebase.utils";
import "./message.styles.scss";
import { selectSetActiveChatRoom } from "../../redux/chatrooms/chatroom.selectors";

const Message = ({ message, currentUserId, activeChatroom }) => {
  const { content, sentByUser } = message;

  const [user, setUser] = useState({});
  const { photoURL } = user;

  useEffect(() => {
    const fetchUser = async () => {
      setUser((await firestore.doc(`users/${sentByUser}`).get()).data());
    };
    fetchUser();
  }, [sentByUser]);

  return activeChatroom.admin === sentByUser ? (
    <div className="right-box box">
      <div className="message-content">{content}</div>
      <div className="profile-image-container">
        <img className="profile-image" src={photoURL} alt="profile" />
      </div>
    </div>
  ) : (
    <div className="left-box box">
      <div className="profile-image-container">
        <img className="profile-image" src={photoURL} alt="profile" />
      </div>
      <div className="message-content">{content}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUserId: selectCurrentUserId,
  activeChatroom: selectSetActiveChatRoom,
});

export default connect(mapStateToProps)(Message);
