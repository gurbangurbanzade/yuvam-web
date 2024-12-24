import Image from "next/image";
import styles from "./style.module.scss";
import FaqList from "@/components/shared/faq-list";

const FaqHome = () => {
  return (
    <section>
      <div className={`container ${styles["faqHome"]}`}>
        <div className={styles["faqHome__header"]}>
          <div className={styles["faqHome__header__icon"]}>
            <Image
              src="/images/icons/list-icon.png"
              alt="faq-icon"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <h2 className={styles["faqHome__header__headText"]}>
            Things you might want to know
          </h2>
        </div>
        <FaqList />
      </div>
    </section>
  );
};

export default FaqHome;
