import React, { useEffect, useState } from "react";
import square from "@/public/images/icons/selectMenuIcon.svg";
import Image from "next/image";
import styles from "./style.module.scss";
import { libre, urbanist } from "@/data/font";
import Button from "@/components/ui/button";
const NotFound = () => {
  return (
    <section className={`${urbanist.className} ${styles["notFound"]}`}>
      <div className={styles["notFound__items"]}>
        <div className={`${libre.className} ${styles["notFound__items__img"]}`}>
          404
        </div>
        <div className={styles["notFound__items__title"]}>Page Not Found</div>
        <div className={styles["notFound__items__description"]}>
          The page you are looking for does not exit.
        </div>
        <Button text="BACK TO HOME" path="/" variant="primary" />
      </div>
    </section>
  );
};

export default NotFound;
