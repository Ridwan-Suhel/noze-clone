import React from "react";
import specsBg from "../../images/specs-bg.png";
const SpecsHero = () => {
  return (
    <section className="bg-black">
      <div className="w-3/5 mx-auto px-24 pb-24 pt-4">
        <img src={specsBg} className="object-cover" alt="img" />
      </div>
    </section>
  );
};

export default SpecsHero;
