import SelectCoverage from "@/components/coverage/select-coverage";
import OperationFooter from "@/components/layout/footer/operation-footer";
import NavbarOperation from "@/components/layout/header/navbar-operation";
import SelectBilling from "@/components/pages/billing/select-billing";
import PageHeadText from "@/components/shared/page-head-text";
import PayMonth from "@/components/shared/pay-month";
import ProgressBar from "@/components/shared/progressBar";
import React from "react";

const BillingContainer = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <ProgressBar progress={3} />
      <NavbarOperation backward="/coverage" />
      <PageHeadText>How do you want to pay for your insurance?</PageHeadText>
      <SelectBilling />
      <OperationFooter
        agreeText="Continue with 8 ₼/month"
        nextStep="/fin-code"
      ></OperationFooter>
    </main>
  );
};

export default BillingContainer;
