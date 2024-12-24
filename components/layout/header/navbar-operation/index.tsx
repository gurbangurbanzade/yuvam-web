import Button from "@/components/ui/button";
import styles from "./style.module.scss";

import DownloadIcon from "@/components/icons/download-icon";
import ArrowIcon from "@/components/icons/arrow-icon";
import Link from "next/link";

interface IProps {
  backward?: string;
}
const NavbarOperation = ({ backward }: IProps) => {
  return (
    <header className={`${styles["header"]} `}>
      <div className={`${styles["navbar"]} container`}>
        <div className={styles["navbar__leftSide"]}>
          <Link href={backward || "/"}>
            <ArrowIcon direction="left" />
          </Link>
        </div>
        <div className={styles["navbar__rightSide"]}>
          <button className={styles["navbar__nav--loginBtn"]}>
            <DownloadIcon />
          </button>
          <button className={styles["navbar__rightSide--help"]}>🛟 Help</button>
        </div>
      </div>
    </header>
  );
};

export default NavbarOperation;
