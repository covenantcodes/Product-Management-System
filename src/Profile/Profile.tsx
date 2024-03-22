import { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import SideBar from "../Custom/Sidebar/Sidebar";
import "./Profile.css";
import CustomButton from "../Custom/Button/Button";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState(""); // State variable for error message

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleAddCategory = async () => {
    try {
      const response = await axios.post(
        "https://pmsgr10.000webhostapp.com/api/categories/new-category",
        { name: categoryName }
      );
      if (response.status === 200) {
        // Category added successfully, you can add any additional logic here
        console.log("Category added successfully");
      } else {
        setError("Failed to add category"); // Set error message
      }
    } catch (error) {
      setError("Failed to add category"); // Set error message
    }
  };

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

        <div className="actions-container">
          <div className="actions-title">Actions</div>

          <div className="actions-box">
            <CustomButton
              border="none"
              color="white"
              padding="1rem"
              radius="5px"
              label="Add Category"
              bgcolor="var(--primary-color)"
              width="320px"
              fontFamily="var(--main-font)"
              fontSize="1rem"
              marginTop="0"
              cursor="pointer"
              onClick={openModal}
            />
          </div>
        </div>

        <Modal open={isModalOpen} onClose={closeModal}>
          <div className="modal-container">
            <div className="modal-form">
              <div className="close-modal-button">
                {" "}
                <CloseIcon
                  fontSize="large"
                  className="close-button"
                  onClick={closeModal}
                />
              </div>
              <div className="modal-top">
                <div className="page-title">Add New Category</div>
              </div>
              <div>
                <div>
                  <div className="password-input-container custom-input">
                    <input
                      type="text"
                      name="name"
                      placeholder="Category Name"
                      className="modal-input"
                      value={categoryName}
                      onChange={handleCategoryNameChange}
                    />
                  </div>

                  <div className="custom-button-container">
                    <CustomButton
                      border="none"
                      color="white"
                      padding="1rem"
                      radius="5px"
                      label="Add Category"
                      bgcolor="var(--primary-color)"
                      width="320px"
                      fontFamily="var(--main-font)"
                      fontSize="1rem"
                      marginTop="0"
                      cursor="pointer"
                      onClick={handleAddCategory}
                    />
                  </div>
                  {error && <div className="error-message">{error}</div>}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
