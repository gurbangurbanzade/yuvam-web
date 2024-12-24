import FinCodeForm from "@/components/pages/fin-code/fin-code-form";
import OperationFooter from "@/components/layout/footer/operation-footer";
import NavbarOperation from "@/components/layout/header/navbar-operation";
import PropertyNumberForm from "@/components/pages/property-number/payment-form";
import PageHeadText from "@/components/shared/page-head-text";

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
      <NavbarOperation />
      <PageHeadText>
        Please provide your property registration number
      </PageHeadText>
      <PropertyNumberForm />
      <OperationFooter agreeText="Next" nextStep="/"></OperationFooter>
    </main>
  );
};

export default PropertyNumberContainer;
