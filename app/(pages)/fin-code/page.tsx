import dynamic from "next/dynamic";

const FinCodeContainer = dynamic(() => import("@/container/fin-code-page"), {
  loading: () => <>loading...</>,
});

export default async function Home() {
  return <FinCodeContainer />;
}
