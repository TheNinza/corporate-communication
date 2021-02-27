import Sidebar from "../../components/sidebar/sidebar.component";
import "./chats-page.styles.scss";
import { ReactComponent as ChatsPageImage } from "../../assets/chatspage-image.svg";

const ChatsPage = () => {
  return (
    <div className="chats-page">
      <Sidebar />
      <div className="main">
        <ChatsPageImage className="chatspage-image" />
      </div>
    </div>
  );
};

export default ChatsPage;
