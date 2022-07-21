import React from "react";
import Accordion from "../../../components/Accordion/Accordion";

const Faq = () => {
  return (
    <section className="pt-24">
      <div className="container mx-auto px-4 lg:px-10">
        <h2 className="title-h2 text-center">FAQs</h2>
        <Accordion />
      </div>
    </section>
  );
};

export default Faq;
