import { useState } from "react";
import SideBar from "../Custom/Sidebar/Sidebar";
import "./Inventory.css";
import "../Custom/Input/CustomInput.css";
import CustomButton from "../Custom/Button/Button";
import productData from "../dummyData/productData.json";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const products = productData;

  return (
    <div>
      <SideBar />
      <div className="inventory-main-container">
        <div className="top-container">
          <div className="top-title">Inventory</div>
          <div className="custom-input">
            <input
              type="text"
              placeholder="Search"
              autoComplete="off"
              required
            />
          </div>

          <div className="add-button-container">
            <CustomButton
              border="none"
              color="white"
              padding=".6rem"
              onClick={openModal}
              radius="5px"
              label="Add Product"
              bgcolor="var(--primary-color)"
              width="180px"
              fontFamily="var(--main-font)"
              fontSize="1rem"
              marginTop="0"
              cursor="pointer"
              // icon={<AddIcon />}
            />
          </div>
        </div>

        <div className="product-list-container">
          <div className="product-list-title">Product List</div>

          <div className="product-list-header">
            <div className="product-list-header-item">Name</div>
            <div className="product-list-header-item">Category</div>
            <div className="product-list-header-item">Price</div>
            <div className="product-list-header-item">Quality</div>
            <div className="product-list-header-item">Picture</div>
          </div>

          {products.map((product, index) => (
            <div className="product-item-box" key={index}>
              <div className="product-item  ">
                <div>{product.productName}</div>
              </div>
              <div className="product-item">
                <div>{product.productCategory}</div>
              </div>
              <div className="product-item">
                <div>${product.productPrice}</div>
              </div>

              <div className="product-item">
                <div>{product.productQuantity}</div>
              </div>

              <div className="product-item">
                <img src={product.productImage} alt="product img" />
              </div>
            </div>
          ))}
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
                onClick={() => closeModal()}
              />
            </div>
            <div className="modal-top">
              <div className="page-title">Add New Product</div>
            </div>
            <div>
              <div>
                <div className="password-input-container custom-input">
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    className="modal-input"
                  />
                </div>

                <div className="password-input-container custom-input">
                  <select name="type">
                    <option value="Generic">Fashion</option>
                    <option value="Bible Club">Cereals</option>
                    <option value="Bible Club">Gadgets</option>
                    <option value="Bible Club">Laptops and Accessories</option>
                    <option value="Bible Club">Cases</option>
                  </select>
                </div>

                <div className="password-input-container custom-input">
                  <input
                    type="text"
                    name="Price"
                    placeholder="Location"
                    className="modal-input"
                  />
                </div>

                <div className="custom-button-container">
                  <CustomButton
                    border="none"
                    color="white"
                    padding="1rem"
                    radius="5px"
                    label="Add Cell"
                    bgcolor="var(--primary-color)"
                    width="320px"
                    fontFamily="var(--main-font)"
                    fontSize="1rem"
                    marginTop="1rem"
                    cursor="pointer"
                    onClick={() => console.log("Add Product")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Inventory;
