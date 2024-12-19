import React from "react";
import styles from "./style.module.scss";
import Button from "@/components/ui/button";

const Subscribe = () => {
  return (
    <section>
      <div className={`container ${styles["subscribe"]}`}>
        <Button text="Subscribe now" variant="primary" />
      </div>
    </section>
  );
};

export default Subscribe;
