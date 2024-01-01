import {
  faBars,
  faClose,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { cdn } from "../assets/cdn";
import logo from "../assets/logo.jpg";

export default function NavigationBar({ tabs = [] }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navBlurImage = `${cdn}/navbar/nav_blur.jpg`;

  const [showNav, setShowNav] = useState(false);

  const contact = (
    <div className="flex items-center gap-6 px-2 py-2 self-center">
      <div className="">
        <div className="text-black flex items-center gap-4">
          <span>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="text-black font-extrabold">Call us</span>
        </div>
        <div className="font-extrabold text-blue-900 text-sm">
          <NavLink to="tel:+254701742256">+254701742256</NavLink>
        </div>
      </div>
      <div className="">
        <div className="text-black flex items-center gap-4">
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="text-black font-extrabold">Email us</span>
        </div>
        <div className="font-extrabold text-blue-900 text-sm">
          <NavLink to="mailto:cgranddesigners@gmail.com">
            cgranddesigners@gmail.com
          </NavLink>
        </div>
      </div>
    </div>
  );

  const logoDiv = (
    <div className="h-12 w-12 m-2">
      <img src={logo} />
    </div>
  );

  return (
    <div className="sticky top-0 z-40">
      <div className="absolute inset-0 -z-10 opacity- blur-xl">
        <img className="h-full w-full object-cover" src={navBlurImage} />
      </div>

      {/* Larg Screen [md+] */}
      <div className="hidden md:flex gap-4 items-center border-amber-600/25 py-2">
        {/* {logoDiv} */}
        <div className="flex flex-grow justify-center gap-4 font-bold relative">
          {tabs.map((tab, index) => (
            <button
              onClick={() => navigate(tab.path)}
              className={`px-2 xl:px-4 border-b-4 text-lg ${
                pathname === tab.path
                  ? "text-amber-600 border-amber-600"
                  : "border-transparent"
              }`}
              key={index}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="hidden flex-grow lg:flex">{contact}</div>
      </div>

      {/* Small Screen [-md] */}
      <div className="md:hidden relative flex items-center">
        <div className="flex-grow flex px-4 h-24 w-16">{contact}</div>
        {!showNav ? (
          <div className="">
            <button
              onClick={() => {
                setShowNav(true);
              }}
              className={`text-gray-800 hover:text-amber-800 font-bold duration-300 text-center text-2xl flex relative h-12 w-12 m-2`}
            >
              <span
                className={`absolute inset-0 z-20 flex items-center justify-center`}
              >
                <FontAwesomeIcon icon={faBars} />
              </span>
            </button>
          </div>
        ) : (
          <div
            onClick={() => setShowNav(false)}
            className="fixed right-4 top-10 w-1/2 z-50 rounded-3xl shadow shadow-white"
          >
            <div className=" absolute inset-0 rounded-3xl bg-gray-100 -z-10 opacity-75"></div>
            <div className="flex justify-end p-4 mt-4">
              <button
                onClick={() => setShowNav(false)}
                className={`shadow shadow-white hover:text-amber-700 rounded-full h-8 w-8 flex items-center justify-center`}
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            <div className="flex flex-col font-bold relative px-4">
              {tabs.map((tab, index) => (
                <div
                  onClick={() => navigate(tab.path)}
                  className={`px-4 py-4 ${
                    index != tabs.length - 1 && "border-b border-gray-100"
                  } hover:text-amber-700 duration-300 xl:px-4 text-lg cursor-pointer ${
                    pathname === tab.path ? "text-amber-600" : "text-gray-800"
                  }`}
                  key={index}
                >
                  {tab.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
