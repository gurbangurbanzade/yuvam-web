import SelectCoverage from "@/components/coverage/select-coverage";
import OperationFooter from "@/components/layout/footer/operation-footer";
import NavbarOperation from "@/components/layout/header/navbar-operation";
import ConfirmationDetail from "@/components/pages/confirmation/confirmation-detail";
import ProtectedCase from "@/components/pages/package/protected-case";
import PageHeadText from "@/components/shared/page-head-text";
import PayMonth from "@/components/shared/pay-month";
import React from "react";

const ConfirmationContainer = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <NavbarOperation />
      <PageHeadText>Let’s prepare your insurance contract!</PageHeadText>
      <ConfirmationDetail />
      <OperationFooter
        agreeText="Prooceed to payment"
        nextStep="/"
      ></OperationFooter>
    </main>
  );
};

export default ConfirmationContainer;
