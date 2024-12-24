import FinCodeForm from "@/components/pages/fin-code/fin-code-form";
import OperationFooter from "@/components/layout/footer/operation-footer";
import NavbarOperation from "@/components/layout/header/navbar-operation";
import PageHeadText from "@/components/shared/page-head-text";
import ProgressBar from "@/components/shared/progressBar";

const FinCodeContainer = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <ProgressBar progress={4} />
      <NavbarOperation backward="/billing" />
      <PageHeadText>Karim, please confirm your identity</PageHeadText>
      <FinCodeForm />

      <OperationFooter
        agreeText="Next"
        nextStep="/property-number"
      ></OperationFooter>
    </main>
  );
};

export default FinCodeContainer;
