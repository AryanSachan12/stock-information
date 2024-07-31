import React from 'react'
import styles from './DashBoardCard.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faClipboard,
  faShoppingBag,
  faUserCheck
} from "@fortawesome/free-solid-svg-icons";

const DashBoardCard = ({icon, value, mainText, altText, color}) => {
  return (
    <div className={styles.container}>
        <FontAwesomeIcon icon={icon} className={styles.icon} style={{color: color}}/>
        <h1>{value}</h1>
        <p>{mainText}</p>
        <p style={{color: color}}>{altText}</p>
    </div>
  )
}

export default DashBoardCard