import dynamic from "next/dynamic";

const HomeContainer = dynamic(() => import("@/container/home-page"), {
  loading: () => <>loadind...</>,
});

export default async function Home() {
  return <HomeContainer />;
}
