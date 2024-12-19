import Image from "next/image";
import styles from "./style.module.scss";
import Button from "@/components/ui/button";

const ManagingEverything = () => {
  const serviceData = [
    {
      title: "We provide insurance by property contract",
      description: "Don’t worry if you have no kupcha",
      icon: "/images/icons/doc-icon.png",
    },
    {
      title: "Subscribe online in 5 easy steps with your FIN number",
      description:
        "Safeguard against earthquakes, floods, hurricanes, and more",
      icon: "/images/icons/finger-icon.png",
    },
    {
      title: "Claim instantly and get reimbursed in less than 3 days",
      description:
        "Simple claim process and quick reimbursement in case of damage",
      icon: "/images/icons/clock-icon.png",
    },
  ];

  return (
    <section>
      <div className={`container ${styles["managingEverything"]}`}>
        <h2 className={styles["managingEverything__headText"]}>
          Manage everything from your phone, wherever you are
        </h2>
        <div className={styles["managingEverything__service"]}>
          {serviceData.map((item, index) => {
            return (
              <div
                key={index}
                className={styles["managingEverything__service__item"]}
              >
                <h3
                  className={styles["managingEverything__service__item--title"]}
                >
                  {item.title}
                </h3>
                <p
                  className={
                    styles["managingEverything__service__item--description"]
                  }
                >
                  {item.description}
                </p>
                <div
                  className={styles["managingEverything__service__item--icon"]}
                >
                  <Image
                    src={item.icon}
                    alt="icon"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles["managingEverything__btn"]}>
          <Button text="Learn more" variant="primary-outline" />
        </div>
      </div>
    </section>
  );
};

export default ManagingEverything;
