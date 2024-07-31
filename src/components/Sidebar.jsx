import styles from "./Sidebar.module.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimneyUser,
  faUser,
  faChartSimple,
  faCartShopping,
  faBagShopping,
  faChartLine,
  faComment,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
  }

  return (
    <div className={styles.main}>
      <div className={styles.sidebarContainer}>
        <div>
          <img src="" alt="" />
          <h1>INFOPULSE</h1>
        </div>
        <div className={styles.buttonsContainer}>
          <Link className={styles.buttonContainer} to="dashboard">
            <FontAwesomeIcon
              icon={faHouseChimneyUser}
              className={styles.icon}
            />
            <p>Dashboard</p>
          </Link>
          <Link className={styles.buttonContainer} to="leaderboard">
            <FontAwesomeIcon icon={faChartSimple} className={styles.icon} />
            <p>Leaderboard</p>
          </Link>
          <Link className={styles.buttonContainer} to="order">
            <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
            <p>Order</p>
          </Link>
          <Link className={styles.buttonContainer} to="products">
            <FontAwesomeIcon icon={faBagShopping} className={styles.icon} />
            <p>Products</p>
          </Link>
          <Link className={styles.buttonContainer} to="sales-report">
            <FontAwesomeIcon icon={faChartLine} className={styles.icon} />
            <p>Sales Report</p>
          </Link>
          <Link className={styles.buttonContainer} to="messages">
            <FontAwesomeIcon icon={faComment} className={styles.icon} />
            <p>Messages</p>
          </Link>
          <Link className={styles.buttonContainer} to="settings">
            <FontAwesomeIcon icon={faGear} className={styles.icon} />
            <p>Settings</p>
          </Link>
          <button onClick={handleSignOut}>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className={styles.icon}
            />
            <p>Sign Out</p>
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
