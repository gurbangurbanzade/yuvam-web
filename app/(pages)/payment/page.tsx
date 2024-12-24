import dynamic from "next/dynamic";

const PaymentContainer = dynamic(() => import("@/container/payment-page "), {
  loading: () => <>loading...</>,
});

export default async function Home() {
  return <PaymentContainer />;
}
