import React from "react";
import MattersSectionSlide from "./MattersSectionSlide/MattersSectionSlide";

const MattersSection = () => {
  return (
    <section className="pt-28">
      <div className="container mx-auto px-16">
        <div className="title">
          <h2 className="text-[48px] text-[#210545] text-center">
            What you can't see matters.
          </h2>
          <p className="text-[#6b5a78] text-center mt-8">
            NOZE also monitors a range of other pollutants to help make indoor{" "}
            <br />
            spaces safer places to live, work, and visit.
          </p>
        </div>
        {/* matters slider */}
        <div className="h-screen overflow-hidden">
          {/* https://codepen.io/ncer/pen/xpqemZ */}
          {/* https://codesandbox.io/s/5wchj3?file=/src/App.jsx */}
          <MattersSectionSlide />
        </div>
      </div>
    </section>
  );
};

export default MattersSection;
