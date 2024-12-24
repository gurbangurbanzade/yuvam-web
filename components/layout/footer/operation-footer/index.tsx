import React from "react";
import styles from "./style.module.scss";
import Button from "@/components/ui/button";

interface IProps {
  agreeText: string;
  nextStep: string;
  children?: React.ReactNode;
}

const OperationFooter = ({ agreeText, nextStep, children }: IProps) => {
  return (
    <footer className={styles["footerMain"]}>
      <div className={`container ${styles["footer"]}`}>
        <div className={styles["footer__content"]}>{children}</div>
        <div className={styles["footer__btn"]}>
          <Button path={nextStep} variant="primary">
            {agreeText}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default OperationFooter;
