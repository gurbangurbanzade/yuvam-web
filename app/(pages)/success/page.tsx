import dynamic from "next/dynamic";

const SuccessContainer = dynamic(() => import("@/container/success-page"), {
  loading: () => <>loading...</>,
});

export default async function Home() {
  return <SuccessContainer />;
}
