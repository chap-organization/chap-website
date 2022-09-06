import React from 'react'
import styles from "../../styles/Components/Home/SidebarCircles.module.css";

export default function sidebarCircles() {
  return [
    <div className={styles.container}>
      <div className = {styles.white_circle}></div>
      <div className = {styles.red_circle}></div>
      <div className = {styles.red_circle}></div>
      <div className = {styles.red_circle}></div>
      <div className = {styles.red_circle}></div>
      <div className = {styles.red_circle}></div>
      <div className = {styles.red_circle}></div>
    </div>
  ]
  
}
