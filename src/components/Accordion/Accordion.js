import React, { useEffect, useState } from "react";

const Accordion = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("faqData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="accordin">
      {data.map((item) => (
        <div className="accr-box border mb-5 b-[#d0cbe6] bg-white rounded-[30px] py-5 px-8 cursor-pointer hover:shadow-xl transition-all duration-500">
          <div className="flex items-center justify-between">
            <h2 className="text-[#210545] font-[700] text-[20px] ">
              {item.question}
            </h2>
            <span className="text-gray-200 text-4xl font-light">+</span>
          </div>
          <div className="ans-content h-[0px] overflow-hidden">
            <p className="text-[#6b5a78] text-[18px] leading-[30px]">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
