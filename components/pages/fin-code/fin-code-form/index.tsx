import InputField from "@/components/ui/input-field";
import React from "react";

const FinCodeForm = () => {
  return (
    <section>
      <div className={`container`}>
        <InputField label="FIN number" />
        <br />
        <InputField label="Serial number" />
      </div>{" "}
    </section>
  );
};

export default FinCodeForm;
