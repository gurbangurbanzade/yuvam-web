import styles from "./style.module.scss";

const SuccessContent = () => {
  return (
    <section>
      <div className={`container ${styles["content"]}`}>
        <div className={styles["content__icon"]}>🎉</div>
        <div className={styles["content__title"]}>
          Javidan, your nest is under our wings now
        </div>
        <div className={styles["content__description"]}>
          Your coverage will be active starting from tomorrow, 19/07/2024. Check
          your email to get your policy
        </div>
      </div>
    </section>
  );
};

export default SuccessContent;
