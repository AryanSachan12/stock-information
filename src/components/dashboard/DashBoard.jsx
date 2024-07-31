import DashboardCard from "./DashBoardCard";
import DashBoardEarnings from "./DashBoardEarnings";
import DashboardList from "./DashBoardList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronDown,
  faMagnifyingGlass,
  faChartBar,
  faClipboard,
  faShoppingBag,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./DashBoard.module.css";
import AreaChartComponent from "../charts/AreaChartComponent";
import BarChartComponent from "../charts/BarChartComponent";
import LineChartComponent from "../charts/LineChartComponent";

const DashBoard = () => {
  return (
    <div className={styles.dashboardMain}>
      <header className={styles.header}>
        <div className={styles.inputContainer}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faBell} className={styles.icon} />
          <img src="" alt="" />
          <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
        </div>
      </header>

      <div className={styles.firstContainer}>
        <div className={styles.dashboardCardsContainer}>
          <div className={styles.cardTitle}>
            <h1>Today's Sales</h1>
            <p>Sales Summary</p>
          </div>
          <div className={styles.dashboardCardsContainerMain}>
            <DashboardCard
              icon={faChartBar}
              value={5320}
              mainText="Total Sales"
              altText="+10% from yesterday"
              color="#FEB95A"
            />
            <DashboardCard
              icon={faClipboard}
              value={132}
              mainText="Total Order"
              altText="+8% from yesterday"
              color="#a9dfd8"
            />
            <DashboardCard
              icon={faShoppingBag}
              value={9}
              mainText="Product Sold"
              altText="+2% from yesterday"
              color="#f2c8ed"
            />
            <DashboardCard
              icon={faUserCheck}
              value={12}
              mainText="New Customer"
              altText="+3% from yesterday"
              color="#20aef3"
            />
          </div>
        </div>

        <div className={styles.barChartContainer}>
          <BarChartComponent />
        </div>
      </div>

      <div className={styles.secondContainer}>
        <div className={styles.dashBoardListContainer}>
          <h1>Top Products</h1>
          <div className={styles.dashBoardList}>
            <DashboardList />
          </div>
        </div>

        <div className={styles.lineChartContainer}>
          <LineChartComponent />
        </div>
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.dashBoardEarnings}>
          <DashBoardEarnings expense={5038.23} />
        </div>
        <div className={styles.areaChartContainer}>
          <AreaChartComponent />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
