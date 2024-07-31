import React from 'react'
import styles from './DashBoardEarnings.module.css'
import SemiCircleChart from '../charts/RadialChartComponent'

const DashBoardEarnings = ({expense}) => {
  return (
    <div className={styles.dashBoardEarnings}>
        <h2>Earnings</h2>
        <p>Total Expense</p>
        <h1>${expense}</h1>
        <p>Profit is 48% more than last month</p>

        <div className={styles.radialChart}>
          <SemiCircleChart />
        </div>
    </div>
  )
}

export default DashBoardEarnings