import dynamic from "next/dynamic";

const CoverageContainer = dynamic(() => import("@/container/coverage-page"), {
  loading: () => <>loadind...</>,
});

export default async function Home() {
  return <CoverageContainer />;
}
