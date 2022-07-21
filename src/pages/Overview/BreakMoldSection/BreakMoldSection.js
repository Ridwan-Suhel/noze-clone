import React, { useEffect } from "react";
import breakMold from "../../../video/NOZEbreakAreaVdo.mp4";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BreakMoldSection = () => {
  useEffect(() => {
    const brkTitle = ".brkTitle";
    const brkContent = ".brkContent";

    gsap.fromTo(
      [brkTitle, brkContent],
      { y: 220, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".txt-content-brk",
          start: "top 90%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);
  return (
    <section className="pt-28">
      <div className="container mx-auto lg:px-5">
        <div className="conq-wrapper flex gap-4">
          <div className="txt-content-brk w-1/2">
            <h2 className="text-[#210545] text-[48px] font-medium brkTitle">
              Break the Mold
            </h2>
            <p className="text-[#6b5a78] text-[18px] mt-12 brkContent">
              NOZE monitors the air for spores and other markers associated with
              the most common types of indoor mold. Our mold index will tell you
              if it's likely that there's mold around and whether your space is
              in danger of being a breeding ground.
            </p>
          </div>
          <div className="vdo-area w-1/2">
            <video className="" autoPlay muted loop playsinline>
              <source src={breakMold} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakMoldSection;
