import React from "react";
import breakMold from "../../../video/NOZEbreakAreaVdo.mp4";

const BreakMoldSection = () => {
  return (
    <section className="pt-28">
      <div className="container mx-auto lg:px-5">
        <div className="conq-wrapper flex gap-4">
          <div className="txt-content w-1/2">
            <h2 className="text-[#210545] text-[48px] font-medium">
              Break the Mold
            </h2>
            <p className="text-[#6b5a78] text-[18px] mt-12">
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
