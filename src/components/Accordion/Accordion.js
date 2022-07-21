import React, { useEffect, useState } from "react";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("faqData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="accordin">
      {data.map((item, i) => (
        <div
          onClick={() => toggle(i)}
          className={`group focus:transition accr-box mb-5 py-5 px-8  bg-white rounded-[30px] cursor-pointer hover:shadow-xl transition-all duration-500 ${
            selected === i
              ? "border border-[#654a9b]"
              : "border border-[#d0cbe6]"
          }`}
        >
          <div className="flex items-center justify-between transition-all ">
            <h2 className="text-[#210545] font-[700] text-[20px] ">
              {item.question}
            </h2>
            <span
              className={`text-4xl font-light ${
                selected === i ? "text-[#654a9b]" : "text-gray-200"
              }`}
            >
              +
            </span>
          </div>
          <div
            className={`group-focus:transition-all ${
              selected === i ? "max-h-[1000px]" : "h-[0] overflow-hidden"
            }`}
          >
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
