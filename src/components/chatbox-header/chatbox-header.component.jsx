import "./chatbox-header.styles.scss";

import { ReactComponent as InfoIcon } from "../../assets/info-icon.svg";

const ChatboxHeader = ({ chatRoomName }) => {
  return (
    <div className="chatbox-header">
      <div className="chatbox-title">{chatRoomName}</div>
      <InfoIcon />
    </div>
  );
};

export default ChatboxHeader;
