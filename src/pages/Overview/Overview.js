import React from "react";
import BoxSection from "./BoxSection/BoxSection";
import BreakMoldSection from "./BreakMoldSection/BreakMoldSection";
import ConquerSection from "./Conquer/ConquerSection";
import Hero from "./Hero/Hero";
import MattersSection from "./MattersSection/MattersSection";
import OrdinarySection from "./Ordinary/OrdinarySection";

const Overview = () => {
  return (
    <main>
      <Hero />
      <BoxSection />
      <OrdinarySection />
      <ConquerSection />
      <BreakMoldSection />
      <MattersSection />
    </main>
  );
};

export default Overview;
