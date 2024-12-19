"use client";
import React from "react";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.scss";
import { urbanist } from "@/data/font";
import Link from "next/link";
SwiperCore.use([Autoplay]);
interface IProps {
  data: any[];
  url: string;
}
const SliderPartner = ({ data, url }: IProps) => {
  return (
    <Swiper
      modules={[Pagination]}
      autoplay={{
        delay: 1500,
      }}
      loop={true}
      className={`partnerSlider ${styles["slider"]}`}
      pagination={{
        clickable: true,
      }}
    >
      {data &&
        data?.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Link href={url} target="_blank">
              <div className={styles["slider__slide"]}>
                <div className={styles["content"]}>
                  <div className={styles["content__imgBox"]}>
                    <Image
                      loading="lazy"
                      src={item?.cover}
                      fill={true}
                      sizes="100%"
                      alt={item?.title}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      className={styles["content__imgBox--img"]}
                    />

                    {/* <h3
                      className={`${styles["content__imgBox--title"]} ${urbanist.className}`}
                    >
                      {item?.title}
                    </h3> */}
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SliderPartner;
