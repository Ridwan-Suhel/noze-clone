import React from "react";

const PrimaryButton = ({ btnTxt }) => {
  return (
    <button className="px-8 pt-[13px] pb-[13px] text-white text-[15px] font-bold bg-[#654a9b] rounded-md font-raleway hover:bg-[#5b438c]">
      {btnTxt}
    </button>
  );
};

export default PrimaryButton;
