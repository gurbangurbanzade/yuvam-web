import SelectCoverage from "@/components/coverage/select-coverage";
import OperationFooter from "@/components/layout/footer/operation-footer";
import NavbarOperation from "@/components/layout/header/navbar-operation";
import PageHeadText from "@/components/shared/page-head-text";
import PayMonth from "@/components/shared/pay-month";
import ProgressBar from "@/components/shared/progressBar";
import React from "react";

const CoverageContainer = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <ProgressBar progress={2} />
      <NavbarOperation backward="/package" />
      <PageHeadText>How much coverage do you want to have?</PageHeadText>
      <SelectCoverage />
      <OperationFooter
        agreeText="Continue with 25,000 ₼ coverage "
        nextStep="/billing"
      >
        <PayMonth />
      </OperationFooter>
    </main>
  );
};

export default CoverageContainer;
