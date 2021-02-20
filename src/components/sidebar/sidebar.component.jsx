import "./sidebar.styles.scss";
import { ReactComponent as NewChatSvg } from "../../assets/new-chat.svg";
import { auth } from "../../firebase/firebase.utils";

const Sidebar = ({ user }) => {
  const createNewChat = () => {
    // checking if the prompt working.. full functionality will be added later.
    const name = prompt("Give this chat a name");
    console.log(name);
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="sidebar">
      <div className="top-section">
        <div className="user-section">
          <div className="profile-image-container">
            <img
              className="profile-image"
              src={user?.photoURL}
              alt="profile-image"
            />
          </div>
          <div className="welcome-and-signout">
            <div className="welcome">Welcome</div>
            <div className="user-name">{user?.displayName}</div>
            <div className="signout-section" onClick={handleSignOut}>
              Sign Out
            </div>
          </div>
        </div>

        <div className="new-chat" onClick={createNewChat}>
          <NewChatSvg className="new-chat-svg" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
