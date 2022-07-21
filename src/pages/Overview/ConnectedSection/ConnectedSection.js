import React, { useEffect } from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ConnectedSection = ({ joinModal, setJoinModal }) => {
  useEffect(() => {
    const connTitle = ".connTitle";
    const connContent = ".connContent";
    const connBtn = ".connBtn";

    gsap.fromTo(
      [connTitle, connContent, connBtn],
      { y: 220, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".connectedWrapper",
          start: "top 90%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);
  return (
    <section className="pt-24 pb-48">
      <div className="container mx-auto lg:mx-4">
        <div className="connectedWrapper">
          <h2 className="text-2xl lg:text-[48px] lg:leading-[49px] text-[#210545] text-center connTitle">
            Stay connected with NOZE
          </h2>
          <p className="connContent my-4 lg:my-8 lg:w-[442px] font-medium mx-auto text-center text-[#6b5a78] text-[18px] text-leading-[30px]">
            NOZE is an AI powered air quality monitor that works to keep you
            safe. Breathe easy.
          </p>
          <div className="text-center connBtn">
            <span
              onClick={() => {
                setJoinModal(!joinModal);
              }}
            >
              <PrimaryButton btnTxt={"Join the waitlist"} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedSection;
