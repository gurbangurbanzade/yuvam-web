"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import Button from "@/components/ui/button";
import CheckedIcon from "@/components/icons/checked-icon";

const SelectCoverage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const data = [
    {
      price: "25,000 ₼",
      description:
        "Best for a typical Baku apartment, without expensive furniture or home appliances",
    },
    {
      price: "50,000 ₼",
      description:
        "Best for a typical Baku apartment, without expensive furniture or home appliances",
    },
  ];

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section>
      <div className={`container ${styles["managingEverything"]}`}>
        <div className={styles["managingEverything__service"]}>
          {data.map((item, index) => {
            const isSelected = selectedIndex === index;
            return (
              <div
                key={index}
                className={`${styles["managingEverything__service__item"]} ${
                  isSelected ? styles["selectedItem"] : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <h3
                  className={styles["managingEverything__service__item--title"]}
                >
                  {item.price}
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
                  {isSelected && <CheckedIcon />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SelectCoverage;
