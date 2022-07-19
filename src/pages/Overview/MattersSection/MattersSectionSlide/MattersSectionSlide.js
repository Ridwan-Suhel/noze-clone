import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import "./MattersSectionSlide.css";
import matters1 from "../../../../images/matters/matters1.png";
import matters2 from "../../../../images/matters/matters2.png";
import matters3 from "../../../../images/matters/matters3.png";
import matters4 from "../../../../images/matters/matters4.png";
import matters6 from "../../../../images/matters/matters6.png";
import matters7 from "../../../../images/matters/matters7.png";
import matters8 from "../../../../images/matters/matters8.png";
import matters9 from "../../../../images/matters/matters9.png";
import matters10 from "../../../../images/matters/matters10.png";

const MattersSectionSlide = () => {
  const menu = [
    "Carbon Dioxied",
    "Ammonia",
    "Formaldehyde",
    "Nitrogen Dioxide",
    "Butanal",
    "Particulate Matter",
    "Ethanol",
    "Tobacco Odour",
    "Humidity",
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu[index] + "</span>";
    },
  };

  return (
    <div className="pt-20">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={pagination}
        autoHeight={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${matters1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="p-8 w-3/4 h-[528px] rounded-[300px] ml-auto py-28"
          >
            <div>
              <h2 className="text-[40px] text-[#f3f2f8] text-center px-12 leading-[45px] font-normal">
                Clouds our thinking, lowers productivity &amp; affects our
                sleep.
              </h2>
              <p className="text-[#f3f2f8] text-[18px] text-center px-40 mt-40">
                Exhaled breath from people &amp; pets and open flames are the
                most common sources.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${matters2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="p-8 w-3/4 h-[528px] rounded-[300px] ml-auto py-28"
          >
            <div>
              <h2 className="text-[40px] text-[#f3f2f8] text-center px-12 leading-[45px] font-normal">
                Irritates our noses and throats, amplifies allergies &amp;
                triggers asthma.
              </h2>
              <p className="text-[#f3f2f8] text-[18px] text-center px-40 mt-40">
                Cleaning products are the most common sources.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${matters3})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="p-8 w-3/4 h-[528px] rounded-[300px] ml-auto py-28"
          >
            <div>
              <h2 className="text-[40px] text-[#f3f2f8] text-center px-16 leading-[45px] font-normal">
                Irritates the eyes, nose, throat &amp; skin - and is often
                linked to cancer.
              </h2>
              <p className="text-[#f3f2f8] text-[18px] text-center px-40 mt-40">
                Pressed wood products like easy-to-assemble furniture are the
                most common sources.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${matters4})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="p-8 w-3/4 h-[528px] rounded-[300px] ml-auto py-28"
          >
            <div>
              <h2 className="text-[40px] text-[#f3f2f8] text-center px-16 leading-[45px] font-normal">
                Causes permanent damage to our respiratory system.
              </h2>
              <p className="text-[#f3f2f8] text-[18px] text-center px-40 mt-40">
                Wood fireplaces &amp; fuel powered appliances are the most
                common sources.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${matters6})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="p-8 w-3/4 h-[528px] rounded-[300px] ml-auto py-28"
          >
            <div>
              <h2 className="text-[40px] text-[#f3f2f8] text-center px-16 leading-[45px] font-normal">
                Irritates our lungs causing coughing and shortness of breath.
              </h2>
              <p className="text-[#f3f2f8] text-[18px] text-center px-40 mt-40">
                Garbage, scented candles &amp; cigarette smoke are the most
                common sources.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${matters7})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="p-8 w-3/4 h-[528px] rounded-[300px] ml-auto py-28"
          >
            <div>
              <h2 className="text-[40px] text-[#f3f2f8] text-center px-16 leading-[45px] font-normal">
                Irritates our lungs, aggravates allergies &amp; can increase
                virus spread.
              </h2>
              <p className="text-[#f3f2f8] text-[18px] text-center px-40 mt-40">
                Cooking, cleaning &amp; particles coming from the outdoors are
                the most common sources.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${matters8})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="p-8 w-3/4 h-[528px] rounded-[300px] ml-auto py-28"
          >
            <div>
              <h2 className="text-[40px] text-[#f3f2f8] text-center px-16 leading-[45px] font-normal">
                Causes headaches, nausea &amp; irritates our lungs.
              </h2>
              <p className="text-[#f3f2f8] text-[18px] text-center px-40 mt-40">
                Cleaning detergents &amp; hand sanitizers are the most common
                sources.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${matters9})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="p-8 w-3/4 h-[528px] rounded-[300px] ml-auto py-28"
          >
            <div>
              <h2 className="text-[40px] text-[#f3f2f8] text-center px-16 leading-[45px] font-normal">
                Seeps into furniture and can linger in a space for a long time.
              </h2>
              <p className="text-[#f3f2f8] text-[18px] text-center px-40 mt-40">
                If smoking is not allowed in your space, keep an eye behind
                closed doors.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${matters10})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="p-8 w-3/4 h-[528px] rounded-[300px] ml-auto py-28"
          >
            <div>
              <h2 className="text-[40px] text-[#f3f2f8] text-center px-16 leading-[45px] font-normal">
                Causes mold growth that triggers asthma &amp; irritates our
                ears, nose and throat.
              </h2>
              <p className="text-[#f3f2f8] text-[18px] text-center px-40 mt-40">
                If humidity is too low, viruses can more easily survive and be
                transmitted.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MattersSectionSlide;
