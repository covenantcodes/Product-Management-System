import SideBar from "../Custom/Sidebar/Sidebar";
import "./Inventory.css";
import "../Custom/Input/CustomInput.css";
import CustomButton from "../Custom/Button/Button";

const Inventory = () => {
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
              padding="1rem"
              onClick={() => console.log("Clicked")}
              radius="5px"
              label="Add Product"
              bgcolor="var(--primary-color)"
              width="150px"
              fontFamily="var(--main-font)"
              fontSize="1rem"
              marginTop="1rem"
              cursor="pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
