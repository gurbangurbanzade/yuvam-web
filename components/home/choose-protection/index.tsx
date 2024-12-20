"use client";
import React from "react";
import styles from "./style.module.scss";
import SectionHeadText from "@/components/shared/section-head-text";
import Subscribe from "../subscribe";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./slider.scss";

const ChooseProtection = () => {
  const plans = [
    {
      title: "Basic",
      price: 4,
      unit: "₼/month",
      coverage: 20000,
    },
    {
      title: "Standard",
      price: 8,
      unit: "₼/month",
      coverage: 25000,
    },
    {
      title: "Premium",
      price: 19,
      unit: "₼/month",
      coverage: 50000,
    },
  ];
  return (
    <section>
      <div className={`container ${styles["chooseProtection"]}`}>
        <div className={styles["chooseProtection__header"]}>
          <h2 className={`${styles["chooseProtection__header__headText"]} `}>
            Choose the protection that suits your needs
          </h2>
          <p className={styles["chooseProtection__header__subText"]}>
            You can always change it later in your personal account
          </p>
        </div>
      </div>
      <div className={styles["chooseProtection__main"]}>
        <Swiper
          modules={[Pagination]}
          loop={true}
          slidesPerView={1.2}
          spaceBetween={12}
          centeredSlides={true}
          initialSlide={1}
          className={`homeSlider ${styles["slider"]}`}
          pagination={{
            clickable: true,
          }}
        >
          {plans.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles["slider__slide"]}>
                <div className={styles["content"]}>
                  <div className={styles["content--selectedCustomer"]}>
                    Selected by 42% of our customers
                  </div>
                  <div className={styles["content__title"]}>{item.title}</div>
                  <div className={styles["content__price"]}>
                    from{" "}
                    <span className={styles["content__price--main"]}>
                      {item.price}
                    </span>
                    <span className={styles["content__price--currency"]}>
                      ₼
                    </span>
                    /month
                  </div>
                  <div className={styles["content__coverage"]}>
                    coverage up to
                  </div>

                  <div className={styles["content__coverageMain"]}>
                    {item.coverage}
                    <span>₼</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Subscribe />
    </section>
  );
};

export default ChooseProtection;
