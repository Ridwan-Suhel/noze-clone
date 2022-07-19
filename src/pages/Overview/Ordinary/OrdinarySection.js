import React from "react";
import OrdinarySlider from "./OrdinarySlider";

const OrdinarySection = () => {
  return (
    <section className="pt-40">
      <div className="container mx-auto px-4 lg:px-24">
        {/* slider area */}
        <div className="overflow-hidden flex gap-4">
          <OrdinarySlider />
        </div>
      </div>
    </section>
  );
};

export default OrdinarySection;
