import React from 'react'
import './admin.css'
import styles from "./admin.module.css"
import Link from 'next/link'

const page = () => {
  return (
    <div className="ad_main">
      <div className={styles.adminfather}>
      <div className={styles.RunningHead}>Running Trains</div>
      <div className={styles.addTrains}>
      <img src='images/plus2.png' width="15px"></img>
      <div className={styles.add}><Link className="main-up" href="/addTrains" style={{textDecoration:"none"}}>Add Trains</Link></div>
      </div>
      </div>

    </div>
  )
}

export default page