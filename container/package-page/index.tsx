import SelectCoverage from "@/components/coverage/select-coverage";
import OperationFooter from "@/components/layout/footer/operation-footer";
import NavbarOperation from "@/components/layout/header/navbar-operation";
import ProtectedCase from "@/components/pages/package/protected-case";
import PageHeadText from "@/components/shared/page-head-text";
import PayMonth from "@/components/shared/pay-month";
import ProgressBar from "@/components/shared/progressBar";
import React from "react";

const CoverageContainer = () => {
  return (
    <main>
      <ProgressBar progress={1} />
      <NavbarOperation backward="/" />
      <PageHeadText>
        Will <span style={{ color: "#2562FF" }}>Standard</span> package make you
        feel safe and protected?
      </PageHeadText>
      <ProtectedCase />
      <OperationFooter
        agreeText="Yes, continue with Standand"
        nextStep="/coverage"
      >
        <PayMonth />
      </OperationFooter>
    </main>
  );
};

export default CoverageContainer;
