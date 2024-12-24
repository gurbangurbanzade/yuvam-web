"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import Button from "@/components/ui/button";
import CheckedIcon from "@/components/icons/checked-icon";

const SelectBilling = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const data = [
    {
      period: "Every month",
      price: "8",
      description: "/month",
    },
    {
      period: "Once per year",
      price: "70",
      description: "/year or 5.8 ₼ /month",
      discount: "20% cheaper",
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
                  {item.period}
                </h3>
                <p
                  className={
                    styles["managingEverything__service__item__description"]
                  }
                >
                  <span className={styles["price"]}>{item.price}</span>
                  <span className={styles["currency"]}>₼ </span>
                  {item.description}
                </p>
                <div
                  className={styles["managingEverything__service__item--icon"]}
                >
                  {isSelected && <CheckedIcon />}
                </div>
                {item.discount && (
                  <div
                    className={
                      styles["managingEverything__service__item--discount"]
                    }
                  >
                    {item.discount}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SelectBilling;
