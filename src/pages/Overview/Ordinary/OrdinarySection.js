import React from "react";
import OrdinarySlider from "./OrdinarySlider";

const OrdinarySection = () => {
  return (
    <section className="pt-12 lg:pt-36 h-[850px] lg:h-screen overflow-hidden">
      <div className="container mx-auto px-4 lg:px-24">
        {/* slider area */}
        <div className="overflow-hidden ">
          <OrdinarySlider />
        </div>
      </div>
    </section>
  );
};

export default OrdinarySection;
