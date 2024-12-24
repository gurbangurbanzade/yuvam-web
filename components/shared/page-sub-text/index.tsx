import React, { ReactNode } from "react";
import styles from "./style.module.scss";
interface PageHeaderProps {
  children?: ReactNode;
}

const PageSubText = ({ children }: PageHeaderProps) => {
  return (
    <section>
      <div className={`${styles["content"]}`}>{children}</div>
    </section>
  );
};

export default PageSubText;
