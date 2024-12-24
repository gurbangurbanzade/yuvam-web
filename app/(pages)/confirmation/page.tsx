import dynamic from "next/dynamic";

const ConfirmationContainer = dynamic(
  () => import("@/container/confirmation-page"),
  {
    loading: () => <>loading...</>,
  }
);

export default async function Home() {
  return <ConfirmationContainer />;
}
