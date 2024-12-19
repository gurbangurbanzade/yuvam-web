"use client";
import React from "react";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiperStyle.scss";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { IFile } from "@/types/common.type";
import { apiConfig } from "@/api.config";

SwiperCore.use([Autoplay]);
const NextButton = () => (
  <button className="my-next">
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18.9412L15 12.9412L9 6.94116"
        stroke="#697683"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);
const PrevButton = () => (
  <button className="my-prev">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#697683"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);
interface IProps {
  data: IFile[];
  url?: boolean;
}
const SliderWithConroller = ({ data, url }: IProps) => {
  return (
    <section className={styles[""]}>
      <div className={` ${styles["container"]}`}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".my-next",
            prevEl: ".my-prev",
          }}
          pagination={{ clickable: true }}
          // autoplay={{
          //   delay: 1500,
          // }}
          loop={true}
          className={styles["container__slider"]}
        >
          <div className="navigationBtns">
            <PrevButton />
            <NextButton />
          </div>
          {data &&
            data?.map((work: any, index: number) => (
              <SwiperSlide key={index}>
                <div className={styles["container__slider__slide"]}>
                  <div className={styles["content"]}>
                    <div className={styles["content--imgBox"]}>
                      <Image
                        loading="lazy"
                        src={`${
                          url
                            ? `${apiConfig.imagePath}${work.filePath}`
                            : work?.cover
                        }`}
                        fill
                        alt="images"
                        className="object-cover"
                      />
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

export default SliderWithConroller;
