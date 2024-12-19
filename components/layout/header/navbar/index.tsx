"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import MobileNavbar from "../mobileNavbar";
import logo from "@/public/images/icons/logo.svg";
import mobileLogo from "@/public/images/icons/mobileLogo.svg";
import Button from "@/components/ui/button";
import rightIcon from "@/public/images/icons/btnRightIcon.svg";
import burgerMenuIcon from "@/public/images/icons/burgerMenuIcon.svg";
import closeIcon from "@/public/images/icons/cancelIcon.svg";
import locationIcon from "@/public/images/icons/selectMenuIcon.svg";
import { usePathname } from "next/navigation";
import { useConsultationStore } from "@/hooks/store/consultationStore";

// ...

const Navbar = () => {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState<string>("");
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const { consultaionData, step, setFieldsConsultations } =
    useConsultationStore();

  const showMobileMenu = () => {
    setShowMobileNav(true);
  };
  const closeMobileMenu = () => {
    setShowMobileNav(false);
  };

  const navElements = [
    { name: "Home", link: "/", pathname: "" },
    { name: "Services", link: "/services", pathname: "services" },
    { name: "Our work", link: "/ourWork", pathname: "ourWork" },
    { name: "Inspiration", link: "/inspiration", pathname: "inspiration" },
    { name: "About", link: "/about", pathname: "about" },
    { name: "Contact", link: "/contact", pathname: "contact" },
  ];

  const handleNavClick = (name: string) => {
    setActiveNav(name);
  };

  useEffect(() => {
    setActiveNav(pathname.split("/").slice(1, 2)[0]);
  }, [pathname]);
  const goConsultation = () => {
    setFieldsConsultations({ ...consultaionData, step: 1 });
  };
  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["navbar__logoBox"]}>
          <Link href={"/"}>
            <Image
              className={styles["navbar__logoBox--logo"]}
              src={logo}
              alt="logo"
            />
            <Image
              className={styles["navbar__logoBox--mobileLogo"]}
              src={mobileLogo}
              alt="logo"
            />
          </Link>
        </div>
        <ul className={styles["navbar__nav"]}>
          {navElements.map((navElement, index) => (
            <li
              className={styles["navbar__nav__item"]}
              key={index}
              onClick={() => handleNavClick(navElement.name)}
            >
              {activeNav === navElement.pathname && (
                <Image
                  className={styles["navbar__nav__item--icon"]}
                  src={locationIcon}
                  alt="location icon"
                />
              )}
              <Link
                className={styles["navbar__nav__item--link"]}
                href={navElement.link}
              >
                {navElement.name}
              </Link>
            </li>
          ))}

          <Button
            onClick={goConsultation}
            iconRight={rightIcon}
            variant="primary"
            text="GET A FREE CONSULTATION"
            path="/consultation"
          />
        </ul>
        <div className={styles["navbar__connect"]}></div>
        {!showMobileNav && (
          <div onClick={showMobileMenu} className={styles["navbar__burgerBtn"]}>
            <Image src={burgerMenuIcon} alt="burger menu icon" />
          </div>
        )}
        {showMobileNav && (
          <div onClick={closeMobileMenu} className={styles["navbar__closeBtn"]}>
            <Image src={closeIcon} alt="close icon" />
          </div>
        )}
      </nav>
      {showMobileNav && (
        <MobileNavbar
          activeNav={activeNav}
          setShowMobileNav={setShowMobileNav}
          navElements={navElements}
          handleNavClick={handleNavClick}
          setActiveNav={setActiveNav}
        />
      )}
    </>
  );
};

export default Navbar;
