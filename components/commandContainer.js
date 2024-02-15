// CommandContainer.js
import React from "react";
import styles from "../styles/commandContianer.module.css"

const CommandContainer = ({ text }) => {
  return (
    <div className={styles.commandContainer}>
      <div className={styles.commandLine}>
        <span className={styles.commandText}>{text}</span>
      </div>
    </div>
  );
};

export default CommandContainer;
