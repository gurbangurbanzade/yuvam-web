"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import errorIcon from "@/public/images/icons/errorIcon.svg";
import Button from "../button";
import { useStore } from "@/hooks/store/store";
import { urbanist } from "@/data/font";
interface IProps {
  isOpen?: boolean;
  messageType?: string;
}
const ErrorModal = ({ messageType }: IProps) => {
  const { errorModal, modalMessage, setFields } = useStore();

  const tryAgain = () => {
    setFields({ errorModal: false });
  };
  return (
    <div>
      {errorModal && (
        <div className={styles["modal"]}>
          <div className={styles["message__content"]}>
            <Image src={errorIcon} alt="success icon" />
            <h6 className={styles["message__content--title"]}>Error!</h6>

            <p
              className={`${styles["message__content--description"]} ${urbanist.className}`}
            >
              {modalMessage || "Something went wrong!"}
            </p>

            <Button onClick={tryAgain} variant="primary" text="TRY AGAIN" />
          </div>
          <div className={styles["backdrop"]} />
        </div>
      )}
    </div>
  );
};

export default ErrorModal;
