import InputField from "@/components/ui/input-field";
import styles from "./style.module.scss";
const PaymentForm = () => {
  return (
    <section>
      <div className={`container ${styles["form"]}`}>
        <InputField label="Card number" />
        <div className={styles["form__footer"]}>
          <InputField label="Exp. date" />
          <InputField label="CVC" />
        </div>
      </div>{" "}
    </section>
  );
};

export default PaymentForm;
