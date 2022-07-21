import { XIcon } from "@heroicons/react/solid";
import React from "react";

const SideContact = ({ elementClicked, setElementClicked }) => {
  return (
    <div
      className={`${
        elementClicked ? "opacity-0 invisible" : "opacity-100 visible"
      } w-full h-screen bg-[#000000CC] fixed top-0 left-0 z-[1000] transition-all`}
    >
      <div
        className={`
    ${
      elementClicked
        ? "right-[-100%] opacity-0 invisible"
        : "right-0 opacity-100 visible"
    } w-[450px] rounded-lg fixed bottom-0 border bg-white shadow-xl px-4 py-8 z-[98] transition-all
    `}
      >
        <div className="">
          <h2 className="text-center text-2xl font-bold">
            Need to get in touch with our team? We're all ears.
          </h2>
          <p className="text-center leading-[30px] text-[#6b5a78] text-[18px]">
            Fill out the form and <br />
            we'll be in touch real soon.
          </p>
        </div>

        <form action="">
          <div className="w-full text-center mt-6 mb-2">
            <input
              className="w-[95%] px-2 py-2 border border-[#D0CBE6] outline-none"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div className="w-full text-center mb-2">
            <input
              className="w-[95%] px-2 py-2 border border-[#D0CBE6] outline-none"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="w-full text-center mb-2">
            <textarea
              className="w-[95%] px-2 py-2 border border-[#D0CBE6] outline-none"
              name=""
              id=""
              rows="3"
              placeholder="Mesage"
            ></textarea>
          </div>
          <div className="w-full text-center mb-2">
            <button className="bg-[#654A9B] text-white w-[95%] px-2 py-2">
              Send
            </button>
          </div>
        </form>
        <span
          className="cursor-pointer absolute top-4 right-4"
          onClick={() => {
            setElementClicked(!elementClicked);
          }}
        >
          <XIcon className="w-5 h-5 text-gray-800" />
        </span>
      </div>
    </div>
  );
};

export default SideContact;
