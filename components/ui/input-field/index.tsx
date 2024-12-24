import PhoneIcon from "@/components/icons/user-icon";
import styles from "./style.module.scss";
import Image from "next/image";
import InformationIcon from "@/components/icons/information-icon";
import CheckIcon from "@/components/icons/checked-icon";

interface IProps {
  placeholder?: string;
  label?: string;
  icon?: string;
  include?: any;
  error?: string;
  name?: string;
  type?: string;
  onChange?: (e: any) => void;
}

const InputField = ({
  onChange,
  placeholder,
  label,
  icon,
  name,
  type,
  include,
  error,
  ...rest
}: IProps) => {
  const renderIcon = () => {
    switch (icon) {
      case "phone":
        return <PhoneIcon />;
      default:
        return null;
    }
  };

  return (
    <div className={styles["box"]}>
      {label && (
        <label className={styles["box__label"]} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles["box__input"]}>
        {/* {icon && (
          <Image className={styles["box__input--icon"]} src={icon} alt="icon" />
        )} */}
        {icon && renderIcon()}
        <input
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
      <div className={styles["box__icon"]}>
        <InformationIcon />
        {/* <CheckIcon /> */}
      </div>
      {error ? <span className={styles["error"]}>{error}</span> : null}
    </div>
  );
};

export default InputField;
