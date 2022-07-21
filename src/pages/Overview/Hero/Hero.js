import { XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import NozeHeroImage from "../../../images/NOZE-Hero-1.png";
import "./Hero.css";
const Hero = ({ joinModal, setJoinModal }) => {
  return (
    <section className="max-h-[90vh] overflow-hidden lg:pt-12">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="hero-contents-wrapper lg:flex gap-4">
          <div className="lg:w-1/2 pt-8 lg:pt-24">
            <h1 className="text-center lg:text-left text-[#210545] text-[43px] lg:text-[48px] leading-[42px] lg:leading-[48px] font-medium">
              There's something <br /> new in the air
            </h1>
            <p className="text-center lg:text-left my-4 lg:mt-12 lg:mb-10 text-[#6b5a78] text-[18px] leading-[30px] lg:pr-16">
              NOZE is an AI powered air quality monitor that works to keep you
              safe. Breathe easy.
            </p>
            <div className="hidden lg:block">
              <span
                onClick={() => {
                  setJoinModal(!joinModal);
                }}
              >
                <PrimaryButton btnTxt="Join the waitlist" />
              </span>
            </div>
          </div>
          <div className="hero-img lg:w-1/2 hero-img-wrapper">
            <img
              className="hero-img mx-auto lg:mr-auto px-10 lg:px-0"
              src={NozeHeroImage}
              alt="Noze Hero product"
            />
          </div>
        </div>
      </div>

      {/* join modal */}
      <div
        className={`${
          joinModal ? "opacity-0 invisible" : "opacity-100 visible"
        } joinModal w-full h-screen bg-[#000000CC] fixed top-0 left-0 z-[1000] transition-all`}
      >
        <div
          className={`
        ${
          joinModal
            ? "opacity-0 invisible top-[-100%]"
            : "opacity-100 visible block top-1/2"
        } transition-all duration-500 px-8 py-16 bg-white w-2/5 absolute  left-1/2 translate-y-[-50%] translate-x-[-50%]`}
        >
          {/* top-1/2 */}
          <h2 className="text-center text-[#210545] text-[38px] font-medium">
            Be the first to know
          </h2>
          <p className="text-center text-[18px] px-12 text-[#6B5A78]">
            Leave us your details and we'll keep you up to date about NOZE.
          </p>

          <div className="w-full text-center mt-6 mb-2">
            <input
              className="w-[55%] px-2 py-2 border border-[#D0CBE6] outline-none"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div className="w-full text-center mb-2">
            <input
              className="w-[55%] px-2 py-2 border border-[#D0CBE6] outline-none"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="w-full text-center mb-2">
            <select
              className="w-[55%] px-2 py-2 border border-[#D0CBE6] outline-none"
              name=""
              id=""
            >
              <option value="">Select Country</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="india">India</option>
              <option value="pakistan">Pakistan</option>
              <option value="srilanka">Srilanka</option>
              <option value="usa">USA</option>
            </select>
          </div>
          <div className="w-full text-center mb-2 mt-6">
            <button className="bg-[#654A9B] text-white w-[55%] px-2 py-2">
              Sign me up!
            </button>
          </div>
          <span
            onClick={() => {
              setJoinModal(!joinModal);
            }}
            className="closeBtn absolute top-4 right-4 cursor-pointer"
          >
            <XIcon className="w-5 h-5 text-gray-800" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
