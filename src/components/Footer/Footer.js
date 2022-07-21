import React, { useState } from "react";
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideContact from "../SideContact/SideContact";

const Footer = () => {
  const [elementClicked, setElementClicked] = useState(true);
  return (
    <footer className="bg-[#F6F5FA] py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="footer-wrapper flex items-center justify-between">
          <ul className="w-2/5 flex items-center gap-8">
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
          <div className="w-3/5 flex items-center justify-between">
            <div className="footer-brand-name text-sm pl-16">2021 Noze</div>
            <ul className="flex items-center gap-8 text-sm">
              <li>
                <Link to="/">Privacy policy</Link>
              </li>
              <li>
                <Link to="/">Terms of use</Link>
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
