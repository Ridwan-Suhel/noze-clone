import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import NozeHeroImage from "../../../images/NOZE-Hero-1.png";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="max-h-[90vh] overflow-hidden lg:pt-12">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="hero-contents-wrapper lg:flex gap-4">
          <div className="lg:w-1/2 pt-8 lg:pt-24">
            <h1 className="text-center lg:text-left text-[#210545] text-[43px] lg:text-[48px] leading-[42px] lg:leading-[48px] font-medium">
              There’s something <br /> new in the air
            </h1>
            <p className="text-center lg:text-left my-4 lg:mt-12 lg:mb-10 text-[#6b5a78] text-[18px] leading-[30px] lg:pr-16">
              NOZE is an AI powered air quality monitor that works to keep you
              safe. Breathe easy.
            </p>
            <div className="hidden lg:block">
              <PrimaryButton btnTxt="Join the waitlist" />
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
    </section>
  );
};

export default Hero;
