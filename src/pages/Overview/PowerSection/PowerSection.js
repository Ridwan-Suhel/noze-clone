import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import checkinImg from "../../../images/6.png";
import trackItImg from "../../../images/8.png";
import shareItImg from "../../../images/9.png";
import getNoze from "../../../images/get-noze.png";
gsap.registerPlugin(ScrollTrigger);

const PowerSection = () => {
  useEffect(() => {
    const incedibleTitle = ".incedible-title";
    const box1 = ".box-1";
    const box2 = ".box-2";
    const box3 = ".box-3";
    const getNozeContent = ".get-noze-content-wrapper";

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
    gsap.fromTo(
      [getNozeContent],
      { y: 120, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".get-noze-content-wrapper",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="pt-12 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="section-wrapper lg:flex gap-5 h-[250vh]">
          <div className="hidden lg:block lg:w-2/6 incedible-title mt-10 h-[100vh]">
            <h2 className="title-h2 pr-20">
              Incredible power, right under your NOZE
            </h2>
          </div>

          {/* mobile screen title  */}
          <div className="block lg:hidden mb-12">
            <h2 className="text-3xl lg:title-h2 text-center">
              Incredible power, right under your NOZE
            </h2>
          </div>

          <div className="lg:w-4/6 image-box-wrapper">
            {/* single-box */}
            <div className="single-box-content box-1 mb-12 lg:mb-0">
              <div className="box lg:w-[370px]">
                <div className="mx-auto lg:ml-auto img-wrapper bg-[#D0CBE6] rounded-full w-[300px] h-[300px] lg:w-[370px] lg:h-[370px] flex items-center justify-center">
                  <img
                    className="object-cover h-[200px] lg:h-[320px]"
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
            <div className="single-box-content box-2-wrapper mb-12 lg:mb-0">
              <div className="box w-full lg:w-[370px] lg:ml-auto box-2">
                <div className="mx-auto lg:ml-auto img-wrapper bg-[#D0CBE6] rounded-full w-[300px] h-[300px] lg:w-[370px] lg:h-[370px] flex items-center justify-center">
                  <img
                    className="object-cover h-[200px] lg:h-[320px]"
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
              <div className="box w-full lg:w-[370px] box-3">
                <div className="mx-auto lg:ml-auto img-wrapper bg-[#D0CBE6] rounded-full w-[300px] h-[300px] lg:w-[370px] lg:h-[370px] flex items-center justify-center">
                  <img
                    className="object-cover h-[200px] lg:h-[320px]"
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
        {/* get noze area */}
        <div className="get-noze-content-wrapper pt-20">
          <div className="lg:flex justify-between ">
            <div className="lg:w-1/2 mt-48 lg:mt-0">
              <img
                className="mx-auto rounded-full w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover"
                src={getNoze}
                alt=""
              />
            </div>
            <div className="lg:w-1/2 lg:pr-18">
              <h2 className="text-3xl lg:text-[48px] lg:leading-[49px] text-[#210545] lg:text-left mt-8 lg:mt-0 ">
                Wondering if you should get a NOZE?
              </h2>
              <p className="text-[18px] text-[#373f41] my-5">
                Any way you slice it, it's a no brainer.
              </p>
              <p className="text-[18px] text-[#373f41]">
                1. Reduce Virus spread <br />
                2. Watch out for Mold
                <br />
                3. Keep Asthma in check
                <br />
                4. Avoid Allergy flare ups
                <br />
                5. Improve your Sleep
                <br />
                6. Boost Productivity &amp; Focus
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerSection;
