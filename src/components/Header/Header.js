import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import {
  BeakerIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(true);
  let navigate = useNavigate();
  function handleChange(value) {
    navigate(`/${value}`);
  }
  return (
    <header className="border-[#d0cbe6] border-b min-h-[65px] flex items-center px-6 md:px-0">
      <div className="container mx-auto">
        <nav className="main-nav flex items-center gap-8 justify-between">
          <Link to="/" className="w-20 md:w-auto">
            <img
              src={logo}
              alt="Noze Logo"
              className="w-20 object-cover md:w-auto"
            />
          </Link>
          <div className="hidden nav-item-wrapper lg:flex items-center justify-between w-full">
            <ul className="flex items-center gap-8 text-[15px] text-[#b9b0e4]">
              <li className="hover:text-[#4d2b90]">
                <NavLink to="/">Overview</NavLink>
              </li>
              <li className="hover:text-[#4d2b90]">
                <NavLink to="contact">Contact</NavLink>
              </li>
              <li className="hover:text-[#4d2b90]">
                <Link to="#test">FAQs</Link>
              </li>
            </ul>

            {/* lg screen right side contents */}
            <div className="hidden header-call-to-action lg:flex items-center gap-8">
              <p className="text-[17px]">Order for $240</p>
              <PrimaryButton btnTxt="Pre Order" />
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
              <option value="contact">Contact</option>
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
    </header>
  );
};

export default Header;