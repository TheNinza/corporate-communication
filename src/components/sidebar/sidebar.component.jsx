import "./sidebar.styles.scss";
import SidebarTopSection from "../sidebar-top-section/sidebar-top-section.component";

const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
      <SidebarTopSection user={user} />
    </div>
  );
};

export default Sidebar;
