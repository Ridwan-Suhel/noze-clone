import React, { useEffect, useState } from "react";

const SpecsAccordion = () => {
  // const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  const data = [
    {
      id: 1,
      question: "What's in the box?",
      answer: (
        <>
          NOZE Device <br />
          Power Adaptor
          <br />
          Cable
          <br />
          Quick Start Guide
          <br />
        </>
      ),
    },
    {
      id: 2,
      question: "Dimensions & Weight",
      answer: (
        <>
          Width: 86mm
          <br />
          Depth: 86mm
          <br />
          Height: 167 mm
          <br />
          Weight: 650g
          <br />
        </>
      ),
    },
    {
      id: 3,
      question: "Power",
      answer: (
        <>
          Input: 100-240 V AC 0.2 A<br />
          DC Output: 5 V DC 3.0 A<br />
        </>
      ),
    },
    {
      id: 4,
      question: "Connectivity",
      answer: (
        <>
          802.11 a/b/g/n (2.4 GHz) Wi-Fi
          <br />
          Bluetooth Low Energy
          <br />
        </>
      ),
    },
    {
      id: 5,
      question: "Requirements",
      answer: (
        <>
          Nearby electrical socket
          <br />
          WiFi Network
          <br />
          Compatible mobile device with iOS 8 or later, or Android 4 or later
          <br />
          The free NOZE app
        </>
      ),
    },
    {
      id: 6,
      question: "Detection Ranges",
      answer: (
        <>
          Mould Index: 1 to 10
          <br />
          Virus Index: 1 to 10
          <br />
          Carbon Dioxide: 0.1 to 2000 ppm
          <br />
          Ammonia: 0.1 to 50 ppm
          <br />
          Formaldehyde: 0.1 to 2 ppm
          <br />
          Butanal: 0.1 to 50 ppm
          <br />
          Nitrogen Dioxide: 0.1 to 5 ppm
          <br />
          Ethanol: &lr;1000 ppm to &gr;3000 ppm
          <br />
          Tobacco Odour: Present/Absent
          <br />
          PM 2.5: 0 to 1000 μg/m3
          <br />
          PM 10: 0 to 1000 μg/m3
          <br />
          Humidity: 10% to 80%
          <br />
        </>
      ),
    },
    {
      id: 7,
      question: "Warranty",
      answer: <>One-year limited warranty</>,
    },
  ];

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <div
          key={item.id}
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

export default SpecsAccordion;
