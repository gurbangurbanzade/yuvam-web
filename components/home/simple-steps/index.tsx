import { LocationIcon } from "@/components/icons/location-icon";
import styles from "./style.module.scss";
import UserIcon from "@/components/icons/user-icon";
import PenIcon from "@/components/icons/pen-icon";

const SimpleSteps = () => {
  const stepsData = [
    {
      title: "Identify your appartement",
      description: "Enter your address or find your apartment on the map",
    },
    {
      title: "Confirm your identity",
      description: "Enter your personal information and FIN number",
    },
    {
      title: "Sing insurance policy online",
      description: "Select payment option and  details and sign the policy",
    },
  ];
  return (
    <section>
      <div className={`container ${styles["simpleSteps"]}`}>
        <div className={styles["simpleSteps__header"]}>
          <div className={styles["simpleSteps__header--leftSide"]}>3</div>
          <div className={styles["simpleSteps__header__rightSide"]}>
            <h3 className={styles["simpleSteps__header__rightSide--headText"]}>
              simple steps
            </h3>
            <p className={styles["simpleSteps__header__rightSide--subText"]}>
              to get your home safe
            </p>
          </div>
        </div>

        <div className={styles["simpleSteps__main"]}>
          <div className={styles["simpleSteps__main__leftSide"]}>
            <div className={styles["simpleSteps__main__leftSide--icon"]}>
              <LocationIcon />
            </div>
            <div className={styles["simpleSteps__main__leftSide--line"]}></div>
            <div className={styles["simpleSteps__main__leftSide--icon"]}>
              <UserIcon />
            </div>
            <div className={styles["simpleSteps__main__leftSide--line"]}></div>
            <div className={styles["simpleSteps__main__leftSide--icon"]}>
              <PenIcon />
            </div>
          </div>
          <div className={styles["simpleSteps__main__rightSide"]}>
            {stepsData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles["simpleSteps__main__rightSide--item"]}
                >
                  <h3
                    className={
                      styles["simpleSteps__main__rightSide--item--title"]
                    }
                  >
                    {item.title}
                  </h3>
                  <p
                    className={
                      styles["simpleSteps__main__rightSide--item--description"]
                    }
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSteps;
