import React from "react";
import styles from "./style.module.scss";
import SectionHeadText from "@/components/shared/section-head-text";
import Subscribe from "../subscribe";
const ChooseProtection = () => {
  return (
    <section>
      <div className={`container ${styles["chooseProtection"]}`}>
        <div className={styles["chooseProtection__header"]}>
          <h2 className={`${styles["chooseProtection__header__headText"]} `}>
            Choose the protection that suits your needs
          </h2>
          <p className={styles["chooseProtection__header__subText"]}>
            You can always change it later in your personal account
          </p>
        </div>
        <div className={styles["chooseProtection__main"]}></div>
      </div>
      <Subscribe />
    </section>
  );
};

export default ChooseProtection;
