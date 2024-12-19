import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./style.module.scss";
import Image from "next/image";

interface IProps {
  placeholder: string;
  label?: string;
  icon?: string;
  include?: any;
  error?: string;
  type?: string;
  value?: string;
  name?: string;
}

const Textarea = ({
  placeholder,
  label,
  icon,
  name,
  type,
  include,
  error,
  ...rest
}: IProps) => {
  return (
    <div className={styles["box"]}>
      {label && (
        <label className={styles["box__label"]} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles["box__input"]}>
        {icon && (
          <Image className={styles["box__input--icon"]} src={icon} alt="icon" />
        )}
        <textarea
          className={`${styles["box__input--item"]}  ${
            icon ? styles["box__input--itemWithIcon"] : ""
          }`}
          id={name}
          name={name}
          type={type ? type : "text"}
          placeholder={placeholder}
          {...include}
          {...rest}
        />
      </div>
      {error ? <span className={styles["error"]}>{error}</span> : null}
    </div>
  );
};

export default Textarea;
