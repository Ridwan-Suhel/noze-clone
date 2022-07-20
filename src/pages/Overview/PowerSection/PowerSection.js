import React from "react";
import checkinImg from "../../../images/6.png";

const PowerSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="section-wrapper flex gap-5 ">
          <div className="w-2/6 incedible-title mt-10">
            <h2 className="title-h2 pr-20">
              Incredible power, right under your NOZE
            </h2>
          </div>
          <div className="w-4/6 image-box-wrapper">
            {/* single-box */}
            <div className="single-box-content">
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
            <div className="single-box-content">
              <div className="box w-[370px] ml-auto">
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
            <div className="single-box-content">
              <div className="box w-[370px] ">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerSection;
