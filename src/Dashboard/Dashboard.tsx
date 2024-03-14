import SideBar from "../Custom/Sidebar/Sidebar";
import "./Dashboard.css";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Dashboard = () => {
  return (
    <div>
      <SideBar />

      <div className="dashboard-main-container">
        <div className="page-title">Report Summary</div>
        <div className="dashboard-summary-box">
          <div className="summary-box-container">
            <div>
              <div className="summary-box-title">SALES</div>
              <div className="summary-box-value"> $25k </div>

              <div className="summary-box-growth">
                <ArrowUpwardIcon /> 12% Since last month
              </div>
            </div>

            <div className="summary-box-icon orange">
              <MonetizationOnIcon />
            </div>
          </div>

          <div className="summary-box-container">
            <div>
              <div className="summary-box-title">CATEGORIES</div>
              <div className="summary-box-value"> 12 </div>

              <div className="summary-box-growth red">
                <ArrowDownwardIcon /> 12% Since last month
              </div>
            </div>

            <div className="summary-box-icon green">
              <MonetizationOnIcon />
            </div>
          </div>

          <div className="summary-box-container">
            <div>
              <div className="summary-box-title">NO OF PRODUCTS</div>
              <div className="summary-box-value"> 1200 </div>

              <div className="summary-box-growth">
                <ArrowUpwardIcon /> 12% Since last month
              </div>
            </div>

            <div className="summary-box-icon">
              <MonetizationOnIcon />
            </div>
          </div>

          <div className="summary-box-container">
            <div>
              <div className="summary-box-title">PROFIT</div>
              <div className="summary-box-value"> $2.5k </div>

              <div className="summary-box-growth red">
                <ArrowDownwardIcon /> 5% Since last month
              </div>
            </div>

            <div className="summary-box-icon blue">
              <MonetizationOnIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
