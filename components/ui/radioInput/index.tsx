import styles from "./style.module.scss";
import Image from "next/image";

interface IProps {
  label?: string;
  include?: any;
  error?: string;
  name?: string;
  id?: string;
  checked?: boolean;
  value?: string;
  onChange?: (e: any) => void;
}

const RadioInput = ({
  onChange,
  label,
  id,
  name,
  include,
  checked,
  value,
  error,
  ...rest
}: IProps) => {
  return (
    <div className={styles["box"]}>
      <label htmlFor={id} className={styles["radio-container"]}>
        <input
          type="radio"
          checked={checked}
          id={id}
          value={value}
          name={name}
          {...include}
          {...rest}
          onChange={onChange}
        />
        <span className={styles["box__label"]}>{label}</span>
      </label>
      {error ? <span className={styles["error"]}>{error}</span> : null}
    </div>
  );
};

export default RadioInput;
