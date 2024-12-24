import InputField from "@/components/ui/input-field";
import React from "react";

const PaymentForm = () => {
  return (
    <section>
      <div className={`container`}>
        <InputField label="Property registration number" />
      </div>{" "}
    </section>
  );
};

export default PaymentForm;
