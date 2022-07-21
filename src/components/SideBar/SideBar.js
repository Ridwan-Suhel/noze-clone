import { XIcon } from "@heroicons/react/solid";
import React from "react";
import cartImg from "../../images/cart-img.webp";

const SideBar = ({ orderClicked, setOrderClicked }) => {
  return (
    <div
      className={`
    ${
      orderClicked
        ? "right-[-100%] opacity-0 invisible"
        : "right-0 opacity-100 visible"
    } w-[340px] h-screen fixed top-0  bg-white shadow-lg p-4 z-[500] transition-all
    `}
    >
      <div className="flex items-center justify-between py-6">
        <p>Cart</p>
        <span
          className="cursor-pointer"
          onClick={() => {
            setOrderClicked(!orderClicked);
          }}
        >
          <XIcon className="w-5 h-5 text-gray-800" />
        </span>
      </div>
      <div className="flex justify-between">
        <img className="w-20" src={cartImg} alt="img" />
        <div className="">
          <p className="text-sm">Noze | Smart Air Quality Monitor</p>

          <div className="flex justify-between items-center mt-4">
            <div className="">
              <button className=" outline-none rounded-l-md w-[30px] border-l border-t border-b py-1 px2">
                -
              </button>
              <input
                className="text-center outline-none w-[50px] py-1 px2 border"
                value={5}
                type="text"
              />
              <button className="outline-none rounded-r-md w-[30px] border-r border-t border-b py-1 px2">
                +
              </button>
            </div>
            <p className="text-sm">$2,490.00</p>
          </div>
        </div>
      </div>

      <div className="cart-bottom absolute bottom-0 right-0 w-full p-4">
        <div className="flex items-center justify-between ">
          <p>SUBTOTAL</p>
          <p className="text-sm">$2,490.00</p>
        </div>
        <p className="text-center text-[10px] py-2">
          Shipping and discount codes are added at checkout.
        </p>
        <button className="text-white w-full py-3 bg-[#654a9b] rounded-md hover:bg-[#5b438c]">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
