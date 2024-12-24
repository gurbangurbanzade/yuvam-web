import ArrowIcon from "@/components/icons/arrow-icon";
import styles from "./style.module.scss";
import Button from "@/components/ui/button";
import Link from "next/link";
import ChevronIcon from "@/components/icons/chevron-icon";

const ProtectedCase = () => {
  const data = [
    "...there is a flood or an earthquake",
    "...you damage your neighbours property",
    "...you get pipe burst or fire in your home",
    "...your house gets hit by the car",
    "...your neighbours damage your property",
  ];
  return (
    <section>
      <div className={`container ${styles["list"]}`}>
        <h3 className={styles["list__title"]}>You will be protected in case</h3>
        <ul className={styles["list__content"]}>
          {data.map((item, index) => (
            <li className={styles["list__content--item"]} key={index}>
              {item} <ArrowIcon direction="right" color="#2562FF" />{" "}
            </li>
          ))}
        </ul>
        <Link className={styles["list__more"]} href="#">
          Learn more
          <ChevronIcon />
        </Link>
      </div>
    </section>
  );
};

export default ProtectedCase;
