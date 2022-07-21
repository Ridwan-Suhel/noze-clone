import React, { useEffect } from "react";
import MattersSectionSlide from "./MattersSectionSlide/MattersSectionSlide";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const MattersSection = () => {
  useEffect(() => {
    const matterTitle = ".matterTitle";
    const matterContent = ".matterContent";

    gsap.fromTo(
      [matterTitle, matterContent],
      { y: 220, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".matterWrapper",
          start: "top 90%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);
  return (
    <section className="pt-28">
      <div className="container mx-auto px-16">
        <div className="matterWrapper">
          <h2 className="text-[48px] text-[#210545] text-center matterTitle">
            What you can't see matters.
          </h2>
          <p className="text-[#6b5a78] text-center mt-8 matterContent">
            NOZE also monitors a range of other pollutants to help make indoor{" "}
            <br />
            spaces safer places to live, work, and visit.
          </p>
        </div>
        {/* matters slider */}
        <div className="h-screen overflow-hidden">
          <MattersSectionSlide />
        </div>
      </div>
    </section>
  );
};

export default MattersSection;
