import FinCodeForm from "@/components/pages/fin-code/fin-code-form";
import OperationFooter from "@/components/layout/footer/operation-footer";
import NavbarOperation from "@/components/layout/header/navbar-operation";

import PageHeadText from "@/components/shared/page-head-text";
import ProgressBar from "@/components/shared/progressBar";
import PropertyNumberForm from "@/components/pages/property-number/property-number-form";

const PropertyNumberContainer = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <ProgressBar progress={5} />
      <NavbarOperation backward="/fin-code" />
      <PageHeadText>
        Please provide your property registration number
      </PageHeadText>
      <PropertyNumberForm />
      <OperationFooter
        agreeText="Continue"
        nextStep="/confirmation"
      ></OperationFooter>
    </main>
  );
};

export default PropertyNumberContainer;
