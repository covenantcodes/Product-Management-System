import {
  Sidebar,
  Menu,
  MenuItem,
  // SubMenu,
  // sidebarClasses,
} from "react-pro-sidebar";
import "./Sidebar.css";
import { CSSObject } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
// import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import {
  Link,
  //  useNavigate
} from "react-router-dom";

interface MenuItemStyles {
  root?: ElementStyles;
  button?: ElementStyles;
  label?: ElementStyles;
  prefix?: ElementStyles;
  suffix?: ElementStyles;
  icon?: ElementStyles;
  subMenuContent?: ElementStyles;
  SubMenuExpandIcon?: ElementStyles;
}

type ElementStyles =
  | CSSObject
  | ((params: MenuItemStyles) => CSSObject | undefined);

const SideBar = () => {
  //   const navigate = useNavigate();

  //   const handleLogout = async () => {
  //     try {
  //       await AuthService.logout();
  //       localStorage.removeItem("user");
  //       localStorage.removeItem("accessToken");
  //       navigate("/login");
  //     } catch (error) {
  //       console.error("Logout error:", error);
  //     }
  //   };

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        width: "17%",
        overflowX: "hidden",
        zIndex: 1000,
        backgroundColor: "#fff",
      }}
    >
      <Sidebar className="app">
        <Menu>
          <div className="sidelogo-container">
            <img
              src="../../../img/logo.png"
              alt="Church Logo"
              className="logo"
            />
          </div>
          <MenuItem
            className="sidebar-menuitem"
            component={<Link to="/Dashboard" className="sidebar-menuitem" />}
            icon={<GridViewOutlinedIcon />}
          >
            {" "}
            Dashboard{" "}
          </MenuItem>
          <MenuItem
            className="sidebar-menuitem"
            component={<Link to="/Inventory" className="sidebar-menuitem" />}
            icon={<Inventory2OutlinedIcon />}
          >
            {" "}
            Inventory{" "}
          </MenuItem>
          <MenuItem
            className="sidebar-menuitem"
            component={<Link to="/Order" className="sidebar-menuitem" />}
            icon={<ShoppingCartOutlinedIcon />}
          >
            Order
          </MenuItem>

          {/* <MenuItem
            className="sidebar-menuitem"
            component={<Link to="/Reports" className="sidebar-menuitem" />}
            icon={<QueryStatsOutlinedIcon />}
          >
            Reports
          </MenuItem> */}

          <MenuItem
            className="sidebar-menuitem"
            component={<Link to="/Profile" className="sidebar-menuitem" />}
            icon={<Person3OutlinedIcon />}
          >
            Profile
          </MenuItem>
          <MenuItem
            className="sidebar-menuitem"
            icon={<LogoutRoundedIcon />}
            onClick={() => {
              console.log("Logout");
            }}
          >
            {" "}
            Logout{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
