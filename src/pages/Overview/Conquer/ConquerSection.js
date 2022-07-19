import React from "react";
import conqVdo1 from "../../../video/NOZEconq1.mp4";

const ConquerSection = () => {
  return (
    <section className="pt-36">
      <div className="conq-wrapper flex gap-4">
        <div className="vdo-area w-1/2">
          <video className="" autoPlay muted loop playsinline>
            <source src={conqVdo1} type="video/mp4" />
          </video>
        </div>
        <div className="txt-content w-1/2">
          <h2 className="text-[#210545] text-[48px] font-medium">
            Conquer the Virus
          </h2>
          <p className="text-[#6b5a78] text-[18px] mt-12">
            Noze tracks the airborne markers (VOCs) associated with the
            Coronavirus family. Our AI uses that information to deliver a
            real-time risk index that will not only tell you if your space is
            prone to spreading the virus, but whether there's a chance the virus
            is actually in the air.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConquerSection;
