import React from "react";
import BoxSection from "./BoxSection/BoxSection";
import BreakMoldSection from "./BreakMoldSection/BreakMoldSection";
import ConquerSection from "./Conquer/ConquerSection";
import Faq from "./Faq/Faq";
import Hero from "./Hero/Hero";
import MattersSection from "./MattersSection/MattersSection";
import MoreImportantSection from "./MoreImportantSection/MoreImportantSection";
import OrdinarySection from "./Ordinary/OrdinarySection";
import PowerSection from "./PowerSection/PowerSection";

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
      <PowerSection />
      <Faq />
    </main>
  );
};

export default Overview;
