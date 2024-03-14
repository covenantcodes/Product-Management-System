import SideBar from "../Custom/Sidebar/Sidebar";
import "./Dashboard.css";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CategoryIcon from "@mui/icons-material/Category";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CountUp from "react-countup";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

import sourceData from "../chartData/sourceData.json";
import profitData from "../chartData/profitData.json";

Chart.defaults.maintainAspectRatio = false;
Chart.defaults.responsive = true;

Chart.defaults.plugins.title.display = true;
Chart.defaults.plugins.title.align = "start";
Chart.defaults.plugins.title.font = {
  size: 20,
};
Chart.defaults.plugins.title.color = "black";

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
              <div className="summary-box-value">
                {" "}
                $<CountUp start={0} end={25} duration={3} />k
              </div>

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
              <div className="summary-box-value">
                {" "}
                <CountUp start={0} end={12} duration={4} />{" "}
              </div>

              <div className="summary-box-growth red">
                <ArrowDownwardIcon /> 12% Since last month
              </div>
            </div>

            <div className="summary-box-icon green">
              <CategoryIcon />
            </div>
          </div>

          <div className="summary-box-container">
            <div>
              <div className="summary-box-title">NO OF PRODUCTS</div>
              <div className="summary-box-value">
                {" "}
                <CountUp start={0} end={1200} duration={5} />{" "}
              </div>

              <div className="summary-box-growth">
                <ArrowUpwardIcon /> 12% Since last month
              </div>
            </div>

            <div className="summary-box-icon">
              <Inventory2Icon />
            </div>
          </div>

          <div className="summary-box-container">
            <div>
              <div className="summary-box-title">PROFIT</div>
              <div className="summary-box-value">
                {" "}
                $<CountUp start={0} end={2.5} duration={6} />k{" "}
              </div>

              <div className="summary-box-growth red">
                <ArrowDownwardIcon /> 5% Since last month
              </div>
            </div>

            <div className="summary-box-icon blue">
              <MonetizationOnIcon />
            </div>
          </div>
        </div>

        <div className="chart-container">
          <div className="dataChart">
            <Line
              data={{
                labels: profitData.map((data) => data.label),
                datasets: [
                  {
                    label: "Profit",
                    data: profitData.map((data) => data.profit),
                    backgroundColor: "rgb(16, 192, 16)",
                    borderColor: "rgb(16, 192, 16)",
                  },
                  {
                    label: "Cost",
                    data: profitData.map((data) => data.cost),
                    backgroundColor: "orange",
                    borderColor: "orange",
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Monthly Profit and Cost",
                    font: {
                      size: 16,
                      family: "Poppins",
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="chart-container">
          <div className="dataChart second-chart">
            <Bar
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Sales for 2021 (M)",
                    data: sourceData.map((data) => data.value),
                    backgroundColor: [
                      "rgb(16, 192, 16)",
                      "rgba(225,99,71)",
                      "rgba(255,165,0)",
                      "rgba(46,46,235)",
                      "rgba(00,00,29,0.8)",
                    ],
                    borderRadius: 5,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Monthly Profit Sales",
                    font: {
                      size: 16,
                      family: "Poppins",
                    },
                  },
                },
              }}
            />
          </div>
          <div className="dataChart second-chart">
            <Doughnut
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Sales for 2021 (M)",
                    data: sourceData.map((data) => data.value),
                    backgroundColor: [
                      "rgb(16, 192, 16)",
                      "rgba(225,99,71)",
                      "rgba(255,165,0)",
                      "rgba(46,46,235)",
                      "rgba(00,00,29,0.8)",
                    ],
                    borderRadius: 5,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Monthly Profit Sales",
                    font: {
                      size: 16,
                      family: "Poppins",
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
