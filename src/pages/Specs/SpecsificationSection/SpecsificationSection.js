import React from "react";
import SpecsAccordion from "../SpecsAccordion/SpecsAccordion";

const SpecsificationSection = () => {
  return (
    <section>
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="lg:flex justify-between">
          <h2 className="text-[#210545] text-3xl lg:text-[48px] lg:w-2/5 lg:mb-0 mb-8">
            Specifications
          </h2>
          <div className="lg:w-3/5">
            <SpecsAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsificationSection;
