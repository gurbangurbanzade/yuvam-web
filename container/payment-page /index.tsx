import FinCodeForm from "@/components/pages/fin-code/fin-code-form";
import OperationFooter from "@/components/layout/footer/operation-footer";
import NavbarOperation from "@/components/layout/header/navbar-operation";
import PaymentForm from "@/components/pages/payment/payment-form";
import PropertyNumberForm from "@/components/pages/payment/payment-form";
import PageHeadText from "@/components/shared/page-head-text";
import PageSubText from "@/components/shared/page-sub-text";
import ProgressBar from "@/components/shared/progressBar";

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
      <ProgressBar progress={7} />
      <NavbarOperation backward="/confirmation" />
      <PageHeadText>
        Final step to get your home safe!
        <PageSubText>
          Enter details of the card you want to use for monthly payments
        </PageSubText>
      </PageHeadText>
      <PaymentForm />
      <OperationFooter
        agreeText="Pay 8 ₼ & Subscribe"
        nextStep="/success"
      ></OperationFooter>
    </main>
  );
};

export default PaymentContainer;
