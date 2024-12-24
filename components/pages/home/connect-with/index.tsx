import Image from "next/image";
import styles from "./style.module.scss";

const ConnectWith = () => {
  return (
    <section>
      <div className={`container ${styles["service"]} `}>
        <div className={`${styles["service__item"]} ${styles["blueBg"]}`}>
          <h3 className={styles["service__item--title"]}>
            Connect with reliable vendors to fix the damage
          </h3>
          <p className={styles["service__item--description"]}>
            Access to home-management vendor networks: renovation
          </p>
          <div className={styles["service__item--icon"]}>
            <Image
              src="/images/icons/settings-icon.png"
              alt="icon"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
        <div className={styles["service__item"]}>
          <h3 className={styles["service__item--title"]}>
            With us all your data is safe and 100% protected
          </h3>
          <p className={styles["service__item--description"]}>
            trusted by 700,000 customers
          </p>
          <div className={styles["service__item--icon"]}>
            <Image
              src="/images/icons/protect-icon.png"
              alt="icon"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWith;
