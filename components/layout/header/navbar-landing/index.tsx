import styles from "./style.module.scss";
import Image from "next/image";

const NavbarLanding = () => {
  return (
    <header className={`${styles["header"]} `}>
      <div className={`${styles["navbar"]} container`}>
        <div className={styles["navbar__logo"]}>
          <Image
            src="/images/static/yuvam-logo.png"
            alt="logo"
            width={30}
            height={30}
          />
        </div>
        <div className={styles["navbar__nav"]}>
          <button className={styles["navbar__nav--loginBtn"]}>Login</button>
        </div>
      </div>
    </header>
  );
};

export default NavbarLanding;
