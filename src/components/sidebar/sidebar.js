import React from "react";
import styles from "./sidebar.module.css";
import user from "../../images/user.png";

const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles.loggedInUser}>
      <img src={user} alt="userhodler" className={styles.placeHolder} />
      <div className={styles.userDetails}>Ankush Kumar</div>
    </div>
  </div>
);

export default Sidebar;
