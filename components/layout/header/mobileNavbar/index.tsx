import React, { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Button from "@/components/ui/button";
import rightIcon from "@/public/images/icons/btnRightIcon.svg";
import locationIcon from "@/public/images/icons/selectMenuIcon.svg";
import Image from "next/image";
interface IProps {
  navElements: any;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  activeNav: string;
  handleNavClick: (name: string) => void;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

const MobileNavbar = ({
  navElements,
  setShowMobileNav,
  activeNav,
  handleNavClick,
  setActiveNav,
}: IProps) => {
  return (
    <div className={styles["mobileNavbar"]}>
      <ul className={styles["mobileNavbar__routes"]}>
        {navElements &&
          navElements.map((navElement: any, index: number) => (
            <li
              className={styles["mobileNavbar__routes__route"]}
              key={index}
              onClick={() => {
                handleNavClick(navElement.name);
                setShowMobileNav(false);
              }}
            >
              {activeNav === navElement.pathName && (
                <Image
                  className={styles["mobileNavbar__routes__route--icon"]}
                  src={locationIcon}
                  alt="location icon"
                />
              )}
              <Link href={navElement.link}>{navElement.name}</Link>
            </li>
          ))}
      </ul>
      <div className={styles["mobileNavbar__btnBox"]}>
        <Button
          iconRight={rightIcon}
          variant="primary"
          text="GET A FREE CONSULTATION"
          path="/consultation"
          onClick={() => {
            setShowMobileNav(false);
          }}
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
