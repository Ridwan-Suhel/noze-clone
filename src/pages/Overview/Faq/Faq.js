import React from "react";
import Accordion from "../../../components/Accordion/Accordion";

const Faq = () => {
  return (
    <section className="pt-24" id="faqs">
      <div className="container mx-auto px-4 lg:px-10">
        <h2 className="text-3xl lg:text-[48px] lg:leading-[49px] text-[#210545] text-center mb-16">
          FAQs
        </h2>
        <Accordion />
      </div>
    </section>
  );
};

export default Faq;
