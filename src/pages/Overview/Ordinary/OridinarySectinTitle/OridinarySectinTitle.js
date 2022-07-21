import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OridinarySectinTitle = () => {
  useEffect(() => {
    const ordTitle = ".ordinaryTitle";

    gsap.fromTo(
      [ordTitle],
      { y: 270, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".ordinary-text-content-wrapper",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div className="ordinaryTitle">
      <h2 className="text-[#210545] text-3xl lg:text-[48px] leading-[48px] font-medium">
        Anything but <br className="hidden lg:block" />
        ordinary.
      </h2>
      <p className="text-[18px] text-[#6b5a78] lg:my-8 pb-8 lg:pb-0">
        Some would say it's out of this world. That's not far off.
      </p>
    </div>
  );
};

export default OridinarySectinTitle;
