import React, { useEffect } from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import checkinImg from "../../../images/6.png";
import trackItImg from "../../../images/8.png";
import shareItImg from "../../../images/9.png";
gsap.registerPlugin(ScrollTrigger);

const PowerSection = () => {
  useEffect(() => {
    const incedibleTitle = ".incedible-title";
    const box1 = ".box-1";
    const box2 = ".box-2";
    const box3 = ".box-3";

    gsap.to([incedibleTitle], {
      y: 0,
      duration: 0.7,
      opacity: 1,
      stagger: 0.2,

      scrollTrigger: {
        trigger: ".section-wrapper",
        start: "top 20%",
        end: "bottom 90%",
        toggleActions: "restart none none reverse",
        pin: ".incedible-title",
        markers: true,
        pinSpacing: true,
        // scrub: 4,
      },
    });

    gsap.fromTo(
      [box1],
      { y: 270, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".image-box-wrapper",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      [box2],
      { y: 270, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".box-2-wrapper",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      [box3],
      { y: 270, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".box-3-wrapper",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="section-wrapper flex gap-5 ">
          <div className="w-2/6 incedible-title mt-10 ">
            <h2 className="title-h2 pr-20">
              Incredible power, right under your NOZE
            </h2>
          </div>
          <div className="w-4/6 image-box-wrapper">
            {/* single-box */}
            <div className="single-box-content box-1">
              <div className="box w-[370px]">
                <div className="img-wrapper bg-[#D0CBE6] rounded-full w-full h-[370px] flex items-center justify-center">
                  <img
                    className="object-cover h-[320px]"
                    src={checkinImg}
                    alt="Check in img"
                  />
                </div>
                <div className="contect-info px-16 mt-4">
                  <h2 className="text-center font-bold text-[18px]">
                    Check in.
                  </h2>
                  <p className="text-center text-[#6b5a78]">
                    Keep an eye on things in real-time so you can have peace of
                    mind all the time.
                  </p>
                </div>
              </div>
            </div>
            {/* single-box */}
            <div className="single-box-content box-2-wrapper">
              <div className="box w-[370px] ml-auto box-2">
                <div className="img-wrapper bg-[#D0CBE6] rounded-full w-full h-[370px] flex items-center justify-center">
                  <img
                    className="object-cover h-[320px]"
                    src={trackItImg}
                    alt="Check in img"
                  />
                </div>
                <div className="contect-info px-16 mt-4">
                  <h2 className="text-center font-bold text-[18px]">
                    Track it.
                  </h2>
                  <p className="text-center text-[#6b5a78]">
                    Dive into the details to understand exactly what’s going on
                    so you can take action in the moment
                  </p>
                </div>
              </div>
            </div>
            {/* single-box */}
            <div className="single-box-content box-3-wrapper">
              <div className="box w-[370px] box-3">
                <div className="img-wrapper bg-[#D0CBE6] rounded-full w-full h-[370px] flex items-center justify-center">
                  <img
                    className="object-cover h-[320px]"
                    src={shareItImg}
                    alt="Check in img"
                  />
                </div>
                <div className="contect-info px-16 mt-4">
                  <h2 className="text-center font-bold text-[18px]">
                    Share it.
                  </h2>
                  <p className="text-center text-[#6b5a78]">
                    Let others see what's in the air before they come inside by
                    sharing access to your Noze.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerSection;
