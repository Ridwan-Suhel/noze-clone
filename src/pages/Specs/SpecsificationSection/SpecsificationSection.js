import React from "react";
import SpecsAccordion from "../SpecsAccordion/SpecsAccordion";

const SpecsificationSection = () => {
  return (
    <section>
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="flex justify-between">
          <h2 className="title-h2 w-2/5">Specifications</h2>
          <div className="w-3/5">
            <SpecsAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsificationSection;
