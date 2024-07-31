import React from "react";
import { myList } from "../randomList";
import styles from "./DashBoardList.module.css";

const color = ["#FEB95A","#adefd8","#f2c8ed","#20aef3"]

const DashboardList = ({ name }) => {
  return (
    <div className={styles.listContainer}>
      <div className={`${styles.listHeader} flex justify-between`}>
        <span>#</span>
        <span>Name</span>
        <span>Popularity</span>
        <span>Sales</span>
      </div>
      {myList.map((item, index) => (
        <div key={index} className={`${styles.listItem} flex justify-between`}>
          <span>{index + 1}</span>
          <span>{item.name}</span>
          <span className={styles.popularity}>
            <div
              className={styles.popularityActual}
              style={{ backgroundColor: `${color[index]}`, width: `${item.popularity}%` }}
            ></div>
          </span>
          <span>{item.sales}</span>
        </div>
      ))}
    </div>
  );
};

export default DashboardList;
