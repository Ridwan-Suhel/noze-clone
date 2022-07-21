import React, { useState } from "react";
import BoxSection from "./BoxSection/BoxSection";
import BreakMoldSection from "./BreakMoldSection/BreakMoldSection";
import ConnectedSection from "./ConnectedSection/ConnectedSection";
import ConquerSection from "./Conquer/ConquerSection";
import Faq from "./Faq/Faq";
import Hero from "./Hero/Hero";
import MattersSection from "./MattersSection/MattersSection";
import MoreImportantSection from "./MoreImportantSection/MoreImportantSection";
import OrdinarySection from "./Ordinary/OrdinarySection";
import PowerSection from "./PowerSection/PowerSection";

const Overview = () => {
  const [joinModal, setJoinModal] = useState(true);
  return (
    <main>
      <Hero joinModal={joinModal} setJoinModal={setJoinModal} />
      <BoxSection />
      <OrdinarySection />
      <ConquerSection />
      <BreakMoldSection />
      <MattersSection />
      <MoreImportantSection />
      <PowerSection />
      <Faq />
      <ConnectedSection joinModal={joinModal} setJoinModal={setJoinModal} />
    </main>
  );
};

export default Overview;
