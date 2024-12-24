import OperationFooter from "@/components/layout/footer/operation-footer";
import SuccessContent from "@/components/pages/success/success-content";
import ProgressBar from "@/components/shared/progressBar";
import React from "react";

const SuccessContainer = () => {
  return (
    <main>
      <ProgressBar progress={8} />
      <SuccessContent />
      <OperationFooter agreeText="Continue" nextStep="/"></OperationFooter>
    </main>
  );
};

export default SuccessContainer;
