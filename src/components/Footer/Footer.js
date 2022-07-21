import React, { useState } from "react";
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideContact from "../SideContact/SideContact";

const Footer = () => {
  const [elementClicked, setElementClicked] = useState(true);
  return (
    <footer className="bg-[#F6F5FA] py-8 mb-20 lg:mb-0">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="footer-wrapper lg:flex items-center justify-between">
          <ul className="lg:w-2/5 flex justify-center lg:justify-start items-center gap-8">
            <li>
              <a
                href="https://www.facebook.com/"
                rel="noreferrer"
                target={"_blank"}
              >
                <FaFacebook className="text-2xl text-[#654A9B]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                rel="noreferrer"
                target={"_blank"}
              >
                <FaTwitterSquare className="text-2xl text-[#654A9B]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                rel="noreferrer"
                target={"_blank"}
              >
                <FaInstagramSquare className="text-2xl text-[#654A9B]" />
              </a>
            </li>
          </ul>
          <div className="lg:w-3/5 lg:flex items-center justify-between">
            <div className="footer-brand-name text-sm lg:pl-16 text-center lg:text-left my-4 lg:my-0">
              2021 Noze
            </div>
            <ul className="flex items-center gap-8 text-sm justify-center lg:justify-start">
              <li>
                <Link to="/privacy">Privacy policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of use</Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setElementClicked(!elementClicked);
                  }}
                  to="/"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SideContact
        elementClicked={elementClicked}
        setElementClicked={setElementClicked}
      />
    </footer>
  );
};

export default Footer;
