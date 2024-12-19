"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import PlusIcon from "@/components/icons/plus-icon";

const faqData = [
  {
    id: 1,
    question: "How does digital insurance work?",
    answer:
      "Digital insurance works by providing insurance services through digital platforms, making it easier and more convenient for customers to purchase and manage their policies online.",
  },
  {
    id: 2,
    question: "Is it safe to buy an insurance online?",
    answer:
      "Yes, it is safe to buy insurance online as long as you use a reputable and secure website. Make sure to check for security certificates and read reviews before making a purchase.",
  },
  {
    id: 3,
    question: "How do I view my policy details?",
    answer:
      "You can view your policy details by logging into your account on the insurance provider's website or mobile app.",
  },
  {
    id: 4,
    question: "Can I update my policy online?",
    answer:
      "Yes, you can update your policy online by logging into your account and making the necessary changes.",
  },
  {
    id: 5,
    question: "How do I file a claim?",
    answer:
      "To file a claim, log into your account and follow the instructions provided by your insurance provider. You may need to provide certain documents and information to complete the process.",
  },
];

const FaqList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={` ${styles["faqList"]}`}>
      {faqData.map((data, index) => (
        <div
          key={data.id}
          className={`${
            activeIndex === index
              ? styles["faqList__accordion--background"]
              : ""
          }  ${styles["faqList__accordion"]}`}
        >
          <div
            className={styles["faqList__accordion__head"]}
            onClick={() => toggleAccordion(index)}
          >
            <h3
              className={`${styles["faqList__accordion__head--title"]} ${
                activeIndex === index
                  ? styles["open__accordion--title"]
                  : styles["close__accordion--title"]
              }`}
            >
              <span>{data.question}</span>
              {/* <Image
                loading="lazy"
                src={activeIndex === index ? "+" : "-"}
                alt={
                  activeIndex === index ? "top arrow icon" : "bottom arrow icon"
                }
              /> */}
              {activeIndex === index ? "-" : <PlusIcon />}
            </h3>
          </div>
          <div
            className={
              activeIndex === index
                ? styles["open__accordion"]
                : styles["close__accordion"]
            }
          >
            <div className={`${styles["faqList__accordion--content"]}`}>
              <div dangerouslySetInnerHTML={{ __html: data.answer }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqList;
