import ChooseProtection from "@/components/pages/home/choose-protection";
import ConnectWith from "@/components/pages/home/connect-with";
import FaqHome from "@/components/pages/home/faq-home";
import HaveQuestions from "@/components/pages/home/have-questions";
import Hero from "@/components/pages/home/hero";
import ManagingEverything from "@/components/pages/home/managing-everything";
import SimpleSteps from "@/components/pages/home/simple-steps";
import Subscribe from "@/components/pages/home/subscribe";
import Footer from "@/components/layout/footer";
import NavbarLanding from "@/components/layout/header/navbar-landing";
import React from "react";

const HomeContainer = () => {
  return (
    <main>
      <NavbarLanding />
      <Hero />
      <Subscribe />
      <ChooseProtection />
      {/* <ManagingEverything /> */}
      <SimpleSteps />
      {/* <ConnectWith /> */}
      <FaqHome />
      <HaveQuestions />
      <Footer />
    </main>
  );
};

export default HomeContainer;
