import React from "react";
import styles from "./style.module.scss";

const PayMonth = () => {
  return (
    <div className={styles["content"]}>
      You will pay{" "}
      <div className={styles["content__main"]}>
        8 – 11 <span className={styles["specialChar"]}>₼/</span>
        <span className={styles["specialCharSecond"]}>month</span>
      </div>{" "}
      depending on coverage selected
    </div>
  );
};

export default PayMonth;
