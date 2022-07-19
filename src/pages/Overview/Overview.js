import React from "react";
import BoxSection from "./BoxSection/BoxSection";
import BreakMoldSection from "./BreakMoldSection/BreakMoldSection";
import ConquerSection from "./Conquer/ConquerSection";
import Hero from "./Hero/Hero";
import MattersSection from "./MattersSection/MattersSection";
import MoreImportantSection from "./MoreImportantSection/MoreImportantSection";
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
      <MoreImportantSection />
      <section className="w-full h-screen"></section>
    </main>
  );
};

export default Overview;
