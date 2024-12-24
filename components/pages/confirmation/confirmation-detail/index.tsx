import React from "react";
import styles from "./style.module.scss";

const ConfirmationDetail = () => {
  const data = [
    { label: "Client", value: "Javidan Mahmudov" },
    { label: "FIN number", value: "37A1FH9" },
    { label: "Address", value: "apt 7,153, Neftchilar Avenue, Baku" },
    { label: "Package", value: "Standard" },
    { label: "Coverage", value: "up to 25,000 ₼" },
    { label: "Price", value: "7₼/month" },
    { label: "Billed", value: "Monthly on day 19" },
    { label: "Purchase ID", value: "01381792" },
  ];

  return (
    <section>
      <div className={`container ${styles["list"]}`}>
        <ul className={styles["list__content"]}>
          {data.map((item, index) => (
            <li key={index} className={styles["list__item"]}>
              <div className={styles["list__item__content"]}>
                <div className={styles["list__item__label"]}>{item.label}:</div>
                <div className={styles["list__item__value"]}>{item.value}</div>
              </div>
              {index !== data.length - 1 && (
                <div className={styles["separator"]}></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ConfirmationDetail;
