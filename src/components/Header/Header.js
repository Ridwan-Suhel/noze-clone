import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { Scrollchor } from "react-scrollchor/lib/scrollchor";
import SideBar from "../SideBar/SideBar";

let scrollObject = {};
window.onscroll = getScrollPosition;

function getScrollPosition() {
  scrollObject = {
    y: window.pageYOffset,
  };
  if (scrollObject.y > 0) {
    document.getElementById("header").classList.add("stickyClass");
  } else {
    document.getElementById("header").classList.remove("stickyClass");
  }
}

const Header = () => {
  const [orderClicked, setOrderClicked] = useState(true);

  const [open, setOpen] = useState(true);
  let navigate = useNavigate();
  function handleChange(value) {
    navigate(`/${value}`);
  }
  return (
    <header
      id="header"
      className="bg-white z-[100] top-0 border-[#d0cbe6] border-b min-h-[65px] flex items-center px-6 md:px-0"
    >
      <div className="container mx-auto">
        <nav className="main-nav flex items-center gap-8 justify-between">
          <Link to="/" className="">
            <img
              src={logo}
              alt="Noze Logo"
              className="w-[106px] object-cover md:w-auto"
            />
          </Link>
          <div className="hidden nav-item-wrapper lg:flex items-center justify-between w-full">
            <ul className="flex items-center gap-8 text-[15px] text-[#b9b0e4]">
              <li className="hover:text-[#4d2b90]">
                <NavLink to="/overview">Overview</NavLink>
              </li>
              <li className="hover:text-[#4d2b90]">
                <NavLink to="specs">Specs</NavLink>
              </li>
              <li className="hover:text-[#4d2b90]">
                <Scrollchor to="#faqs">FAQs</Scrollchor>
              </li>
            </ul>

            {/* lg screen right side contents */}
            <div className="hidden header-call-to-action lg:flex items-center gap-8">
              <p className="text-[17px]">Order for $240</p>
              <span
                className="preOrderBtn"
                onClick={() => {
                  setOrderClicked(!orderClicked);
                  console.log("clicked", orderClicked);
                }}
              >
                <PrimaryButton btnTxt="Pre Order" />
              </span>
            </div>
          </div>

          {/* mobile screen menu lists */}
          <ul className="lg:hidden text-[15px] text-[#b9b0e4] dropdown relative">
            <select
              name=""
              id=""
              onClick={() => {
                console.log("Clicked", open);
                setOpen(!open);
              }}
              onChange={(event) => handleChange(event.target.value)}
              className="relative z-10 w-[140px] appearance-none py-1 px-3 focus:outline-none bg-transparent text-[#654a9b] border border-[#654a9b] rounded-full"
            >
              <option value="overview">Overview</option>
              <option value="specs">Specs</option>
              <option value="#FAQs">FAQs</option>
            </select>
            <span className="absolute top-[8px] right-2 z-[-10px]">
              {open ? (
                <ChevronDownIcon className="w-4 h-4 text-[#d0cbe6]" />
              ) : (
                <ChevronUpIcon className="w-4 h-4 text-[#d0cbe6]" />
              )}
            </span>
          </ul>
        </nav>
      </div>

      <SideBar orderClicked={orderClicked} setOrderClicked={setOrderClicked} />

      <div className="cart-btn fixed top-[50%] translate-y-[-50%] right-0 z-[99]">
        <button
          onClick={() => {
            setOrderClicked(!orderClicked);
          }}
          className="text-white bg-[#654a9b] hover:bg-[#5b438c] py-3 px-3"
        >
          5 <br /> <ShoppingCartIcon className="w-5 h-5 text-white" />{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
