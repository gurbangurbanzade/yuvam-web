import dynamic from "next/dynamic";

const BillingContainer = dynamic(() => import("@/container/billing-page"), {
  loading: () => <>loading...</>,
});

export default async function Home() {
  return <BillingContainer />;
}
