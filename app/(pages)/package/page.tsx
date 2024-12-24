import dynamic from "next/dynamic";

const PackageContainer = dynamic(() => import("@/container/package-page"), {
  loading: () => <>loadind...</>,
});

export default async function Home() {
  return <PackageContainer />;
}
