import React, { ReactNode } from "react";
import styles from "./style.module.scss";
interface PageHeaderProps {
  children?: ReactNode;
}

const PageHeadText = ({ children }: PageHeaderProps) => {
  return (
    <section>
      <div className={`container ${styles["pageHeadText"]}`}>{children}</div>
    </section>
  );
};

export default PageHeadText;
