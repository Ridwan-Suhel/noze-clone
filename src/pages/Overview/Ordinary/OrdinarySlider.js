import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import OrdinaryGif2 from "../../../images/about2.gif";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import OridinarySectinTitle from "./OridinarySectinTitle/OridinarySectinTitle";

const OrdinarySlider = () => {
  const [isChange, setChange] = useState(true);
  //   const swiperr = useSwiper();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="ordinary-text-content-wrapper w-3/6">
        <OridinarySectinTitle />
        {/* ordinary section desktop left side */}
        <div className="mb-14">
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
              the digital sense of smell to keep track of the air you’re
              breathing.
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
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
          console.log("slide change", isChange);
          setChange(!isChange);
        }}
      >
        <SwiperSlide>
          <div className="w-[500px] h-[470px] rounded-full">
            <img
              className="rounded-full w-[500px] h-[470px]"
              src={OrdinaryGif2}
              alt="Gif Img"
            />
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
