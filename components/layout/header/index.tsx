import Button from "@/components/ui/button";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <header className={`${styles["header"]} `}>
      <div className={`${styles["navbar"]} container`}>
        <div className={styles["navbar__logo"]}></div>
        <div className={styles["navbar__nav"]}>
          <button className={styles["navbar__nav--loginBtn"]}>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
