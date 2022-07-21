import React, { useEffect } from "react";
import conqVdo1 from "../../../video/NOZEconq1.mp4";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ConquerSection = () => {
  useEffect(() => {
    const conqTitle = ".conqTitle";
    const conqContent = ".conqContent";

    gsap.fromTo(
      [conqTitle, conqContent],
      { y: 220, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".txt-content",
          start: "top 90%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="pt-12 lg:pt-36">
      <div className="px-4 lg:px-0 conq-wrapper flex lg:flex-row flex-col flex-col-reverse gap-4">
        <div className="vdo-area lg:w-1/2">
          <video className="" autoPlay muted loop playsInline>
            <source src={conqVdo1} type="video/mp4" />
          </video>
        </div>
        <div className="txt-content lg:w-1/2">
          <h2 className="text-[#210545] text-3xl lg:text-[48px] font-medium conqTitle">
            Conquer the Virus
          </h2>
          <p className="text-[#6b5a78] text-[18px] mt-4 lg:mt-12 conqContent">
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
