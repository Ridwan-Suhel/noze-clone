import React from "react";
import specsBg from "../../images/specs-bg.png";
const SpecsHero = () => {
  return (
    <section className="bg-black h-screen lg:h-auto">
      <div className="lg:w-3/5 mx-auto lg:px-24 lg:pb-24 pt-12 lg:pt-4">
        <img src={specsBg} className="object-cover" alt="img" />
      </div>
    </section>
  );
};

export default SpecsHero;
