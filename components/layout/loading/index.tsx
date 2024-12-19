"use client";
import React, { useEffect, useState } from "react";
import square from "@/public/images/icons/selectMenuIcon.svg";
import Image from "next/image";
import styles from "./style.module.scss";
import { urbanist } from "@/data/font";
const Loading = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 4 ? 0 : prev + 1));
    }, 600);
    return () => clearInterval(interval); //
  }, []);
  return (
    <section className={`${urbanist.className} ${styles["loading"]}`}>
      <div className={styles["loading__items"]}>
        <div className={styles["loading__items__imgBox"]}>
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={square}
              alt="loading"
              style={{
                opacity: i <= index ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            />
          ))}
        </div>
        <div className={styles["loading__items__title"]}>
          Good things are coming!
        </div>
        <div className={styles["loading__items__description"]}>
          Thanks for your patience.
        </div>
      </div>
    </section>
  );
};

export default Loading;
