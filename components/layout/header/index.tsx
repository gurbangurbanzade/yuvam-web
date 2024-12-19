"use client";
import Navbar from "./navbar";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${styles["header"]}  ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={`${styles["navbar"]} container`}>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
