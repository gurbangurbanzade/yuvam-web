import FinCodeForm from "@/components/pages/fin-code/fin-code-form";
import OperationFooter from "@/components/layout/footer/operation-footer";
import NavbarOperation from "@/components/layout/header/navbar-operation";
import PaymentForm from "@/components/pages/property-number/payment-form";
import PropertyNumberForm from "@/components/pages/property-number/payment-form";
import PageHeadText from "@/components/shared/page-head-text";

const PaymentContainer = () => {
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
      <PageHeadText>Final step to get your home safe!</PageHeadText>
      <PaymentForm />
      <OperationFooter agreeText="Next" nextStep="/"></OperationFooter>
    </main>
  );
};

export default PaymentContainer;
