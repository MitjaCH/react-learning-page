import React from "react";
import styles from "../styles/commandContianer.module.css";

const CommandContainer = ({ text, showCopyButton }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={styles.commandContainer}>
      <div className={styles.commandLine}>
        <span className={styles.commandText}>{text}</span>
        {showCopyButton && (
          <button className={styles.copyButton} onClick={copyToClipboard}>
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export default CommandContainer;
