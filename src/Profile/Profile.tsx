import SideBar from "../Custom/Sidebar/Sidebar";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-main-container">
      <SideBar />

      <div className="profile-body-container">
        <div className="profile-container">
          <div className="page-title">My Profile</div>
          <div className="profile-image-container">
            <img
              src="../../img/profile.jpg"
              alt="Profile"
              className="profile-image"
            />
          </div>
          <div className="profile-details-container">
            <div className="profile-details">
              <div className="profile-name">Covenant Ifeoluwa</div>
            </div>
            <div className="profile-details">
              <div className="profile-email">covenantifeoluwa@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
