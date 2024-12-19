import Image from "next/image";
import styles from "./style.module.scss";
import FaqList from "@/components/shared/faq-list";
import PhoneIcon from "@/components/icons/phone-icon";
import Link from "next/link";

const HaveQuestions = () => {
  return (
    <section>
      <div className={`container ${styles["haveQuestions"]}`}>
        <div className={styles["haveQuestions__header"]}>
          <div className={styles["haveQuestions__header__icon"]}>
            <Image
              src="/images/icons/conversation-icon.png"
              alt="faq-icon"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <h2 className={styles["haveQuestions__header__headText"]}>
            Still have questions?
          </h2>
          <div className={styles["haveQuestions__header__questions"]}>
            Reach out and we will help you out!
          </div>
          <div className={styles["haveQuestions__header__questions"]}>
            Email us at{" "}
            <Link className={styles["email"]} href="support@yuva.az">
              support@yuva.az
            </Link>{" "}
            or contact by other ways:{" "}
          </div>
          <div className={styles["haveQuestions__header__phone"]}>
            +994 51 234 34 34
            <PhoneIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveQuestions;
