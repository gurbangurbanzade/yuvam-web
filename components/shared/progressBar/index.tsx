import React from "react";
import styles from "./style.module.scss";

const ProgressBar = ({ progress = 0 }) => {
  const maxProgress = 8;
  const normalizedProgress = Math.min(Math.max(progress, 0), maxProgress);
  const percentage = (normalizedProgress / maxProgress) * 100;

  return (
    <section className={`container ${styles["progress"]}`}>
      <div className={`${styles["progressBar"]}`}>
        <div
          className={styles["progressBar__filled"]}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </section>
  );
};

export default ProgressBar;
