import ChooseProtection from "@/components/home/choose-protection";
import ConnectWith from "@/components/home/connect-with";
import FaqHome from "@/components/home/faq-home";
import HaveQuestions from "@/components/home/have-questions";
import Hero from "@/components/home/hero";
import ManagingEverything from "@/components/home/managing-everything";
import SimpleSteps from "@/components/home/simple-steps";
import Subscribe from "@/components/home/subscribe";
import React from "react";

const HomeContainer = () => {
  return (
    <main>
      <Hero />
      <Subscribe />
      <ChooseProtection />
      <ManagingEverything />
      <SimpleSteps />
      <ConnectWith />
      <FaqHome />
      <HaveQuestions />
    </main>
  );
};

export default HomeContainer;
