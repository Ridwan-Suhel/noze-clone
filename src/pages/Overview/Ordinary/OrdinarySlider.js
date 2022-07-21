import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./OrdinarySection.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import OrdinaryVdo from "../../../images/m_about1.mp4";
import OrdinaryGif2 from "../../../images/about2.gif";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import OridinarySectinTitle from "./OridinarySectinTitle/OridinarySectinTitle";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const OrdinarySlider = () => {
  const [isChange, setChange] = useState(true);
  //   const swiperr = useSwiper();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const nasaInsp = ".nasa-insp";
    const engThink = ".eng-think";

    gsap.fromTo(
      [nasaInsp],
      { y: 270, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        delay: 0.7,
        scrollTrigger: {
          trigger: ".ordinary-text-content-wrapper",
          start: "top 90%",
          toggleActions: "restart none none reverse",
        },
      }
    );
    gsap.fromTo(
      [engThink],
      { y: 270, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        delay: 0.7,
        scrollTrigger: {
          trigger: ".ordinary-text-content-wrapper",
          start: "top 90%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="ordinary-text-content-wrapper w-3/6">
        <OridinarySectinTitle />
        {/* ordinary section desktop left side */}
        <div
          className={`mb-14 nasa-insp pl-8 ordinary-slide-btn ${
            isChange ? "ordinary-slide-anim-btn" : ""
          }`}
        >
          <div
            ref={prevRef}
            className="text-[18px] text-[#210545] font-bold cursor-pointer"
          >
            NASA INSPIRED
          </div>
          {isChange ? (
            <p className="text-[#6b5a78] mt-4">
              NOZE is powered by a single sensor built on years of NASA
              innovation. Our technology raises the bar to new heights by using
              the digital sense of smell to keep track of the air you're
              breathing.
            </p>
          ) : (
            ""
          )}
        </div>
        <div
          className={`eng-think ordinary-slide-btn pl-8 ${
            isChange ? "" : "ordinary-slide-anim-btn"
          }`}
        >
          <div
            ref={nextRef}
            className="text-[18px] text-[#210545] font-bold cursor-pointer"
          >
            ENGINEERED TO THINK
          </div>
          {isChange ? (
            ""
          ) : (
            <p className="text-[#6b5a78] mt-4">
              NOZE uses artificial intelligence to decode the air around you in
              real-time, all the time. It actively samples the air every second
              and breaks things down into specifics so that you can act while it
              matters.
            </p>
          )}
        </div>
      </div>
      {/* ordinary section desktop right side */}
      <Swiper
        direction={"vertical"}
        autoHeight={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper w-3/6"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={() => {
          setChange(!isChange);
        }}
      >
        <SwiperSlide>
          <div className="w-[500px] h-[470px] rounded-full">
            <video
              className="rounded-full w-[500px] h-[470px] scale-150"
              autoPlay
              muted
              loop
              playsinline
            >
              <source src={OrdinaryVdo} type="video/mp4" />
            </video>
            <em className="text-center block mt-[-60px] relative z-10">
              <a
                href="https://www.stratuscent.com/"
                rel="noreferrer"
                target={"_blank"}
              >
                Engineered by <u>Stratuscent inc.</u>
              </a>
            </em>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[500px] h-[470px] rounded-full">
            <img
              className="rounded-full w-[500px] h-[470px]"
              src={OrdinaryGif2}
              alt="Gif Img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OrdinarySlider;
