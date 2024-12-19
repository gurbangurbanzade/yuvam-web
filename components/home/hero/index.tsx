import styles from "./style.module.scss";
const Hero = () => {
  const serviceData = ["Fully online", "From 4 ₼/month", "24/7 support"];
  return (
    <section>
      <div className="container">
        <div className={styles["hero"]}>
          <div className={styles["hero__header"]}>
            <h1 className={styles["hero__header__headText"]}>
              Let’s get
              <br />
              your home safe
              <br />
              together
            </h1>
            <p className={styles["hero__header__subText"]}>
              with simple and transparent home insurance that you can trust
            </p>
          </div>

          <div className={styles["hero__service"]}>
            {serviceData.map((item, index) => {
              return (
                <div key={index} className={styles["hero__service--item"]}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
