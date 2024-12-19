import Image from "next/image";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={`container ${styles["footer"]}`}>
        <div className={styles["footer__logo"]}>
          <Image
            src="/images/static/powered-by-Pasha-Sigorta.png"
            alt="logo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
