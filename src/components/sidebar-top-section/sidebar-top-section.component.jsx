import "./sidebar-top-section.styles.scss";

import { ReactComponent as NewChatSvg } from "../../assets/new-chat.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

const SidebarTopSection = ({
  currentUser: { displayName, photoURL },
  signOutStart,
}) => {
  const createNewChat = () => {
    // checking if the prompt working.. full functionality will be added later.
    const name = prompt("Give this chat a name");
    console.log(name);
  };

  return (
    <div className="sidebar-top-section">
      <div className="user-section">
        <div className="profile-image-container">
          <img className="profile-image" src={photoURL} alt="profile-image" />
        </div>
        <div className="welcome-and-signout">
          <div className="welcome">Welcome</div>
          <div className="user-name">{displayName}</div>
          <div className="signout-section" onClick={signOutStart}>
            Sign Out
          </div>
        </div>
      </div>

      <div className="new-chat" onClick={createNewChat}>
        <NewChatSvg className="new-chat-svg" />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTopSection);
