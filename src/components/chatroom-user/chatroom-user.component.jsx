import "./chatroom-user.styles.scss";
import { ReactComponent as DeleteIcon } from "../../assets/deleteIcon.svg";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase.utils";

const ChatroomUser = ({ userId, admin }) => {
  const [user, setUser] = useState({});

  const { photoURL, displayName, uid } = user;

  useEffect(() => {
    const fetchUser = async () => {
      setUser((await firestore.doc(`users/${userId}`).get()).data());
    };
    fetchUser();
  }, [userId]);

  return (
    <>
      <div className="chatroom-user">
        <div className="profile-image-container">
          <img className="profile-image" src={photoURL} alt="profile" />
        </div>
        <div className="display-name">{displayName}</div>
        {uid === admin ? (
          <div className="admin-tag">admin</div>
        ) : (
          <div className="delete-icon">
            <DeleteIcon />
          </div>
        )}
      </div>
      <div className="line"></div>
    </>
  );
};

export default ChatroomUser;
