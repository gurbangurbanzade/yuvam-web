"use client";
import React from "react";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import { apiConfig } from "@/api.config";
import { Libre_Baskerville, Urbanist } from "next/font/google";
import "./slider.scss";

SwiperCore.use([Autoplay]);

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface IProps {
  data: any[];
}
const SliderNonController = ({ data }: IProps) => {
  return (
    <section className={styles["container"]}>
      <div className={`container ${styles["ourWork"]}`}>
        <Swiper
          modules={[Pagination]}
          autoplay={{
            delay: 1500,
          }}
          loop={true}
          className={`homeSlider ${styles["slider"]}`}
          pagination={{
            clickable: true,
          }}
        >
          {data &&
            data?.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <div className={styles["slider__slide"]}>
                  <div className={styles["content"]}>
                    <div className={styles["content__imgBox"]}>
                      <Image
                        loading="lazy"
                        src={`${apiConfig.imagePath}${item?.cover}`}
                        fill={true}
                        alt={item?.title}
                        className={styles["content__imgBox--img"]}
                      />

                      <h2
                        className={`${styles["content__imgBox--title"]} ${libre.className}`}
                      >
                        {item?.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderNonController;
