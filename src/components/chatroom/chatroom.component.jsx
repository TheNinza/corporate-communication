import "./chatroom.styles.scss";

const Chatroom = ({ chatRoomName }) => {
  return (
    <div className="chatroom">
      <div className="chatroom-name">{chatRoomName}</div>
      <div className="line" />
    </div>
  );
};

export default Chatroom;
