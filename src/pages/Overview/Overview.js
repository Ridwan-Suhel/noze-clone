import React from "react";
import BoxSection from "./BoxSection/BoxSection";
import Hero from "./Hero/Hero";
import OrdinarySection from "./Ordinary/OrdinarySection";

const Overview = () => {
  return (
    <main>
      <Hero />
      <BoxSection />
      <OrdinarySection />
    </main>
  );
};

export default Overview;
