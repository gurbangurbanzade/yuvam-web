import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { urbanist } from "@/data/font";

interface IProps {
  text?: string;
  iconRight?: string | StaticImport;
  iconLeft?: string | StaticImport;
  type?: "button" | "submit" | "reset";
  variant: "primary" | "primary-outline";
  path?: string;
  onClick?: () => void;
}
const Button = ({
  text,
  iconLeft,
  iconRight,
  type,
  variant,
  path,
  onClick,
}: IProps) => {
  return path ? (
    <Link
      onClick={onClick}
      href={path}
      className={`${styles["btn"]} ${styles[variant]} `}
      type={type ? type : "button"}
    >
      {iconLeft && <Image src={iconLeft as string} alt="icon" />}
      {text}
      {iconRight && <Image src={iconRight as string} alt="icon" />}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${styles["btn"]} ${styles[variant]} ${urbanist.className}`}
      type={type ? type : "button"}
    >
      {iconLeft && <Image src={iconLeft as string} alt="icon" />}
      {text}
      {iconRight && <Image src={iconRight as string} alt="icon" />}
    </button>
  );
};

export default Button;
