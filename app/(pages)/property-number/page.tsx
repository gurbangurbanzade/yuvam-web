import dynamic from "next/dynamic";

const PropertyNumberContainer = dynamic(
  () => import("@/container/property-number-page "),
  {
    loading: () => <>loading...</>,
  }
);

export default async function Home() {
  return <PropertyNumberContainer />;
}
