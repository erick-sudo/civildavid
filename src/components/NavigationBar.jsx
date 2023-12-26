import {
  faBars,
  faClose,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { homes } from "../assets/images/apartments/apartments";

export default function NavigationBar({ tabs = [] }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);

  const linearG = "bg-gradient-to-tl from-amber-800 via-amber-600 to-amber-950";

  return (
    <div className="sticky top-0 z-40">
      <div className="absolute inset-0 -z-10 opacity- blur-xl">
        <img className="h-full w-full object-cover" src={homes[6]} />
      </div>

      {/* Larg Screen [md+] */}
      <div className="hidden md:flex gap-4 items-center border-amber-600/25 py-2">
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
        <div className="hidden lg:flex items-center gap-6 flex-grow">
          <div className="flex items-center ">
            <div className="h-12 text-amber-600 w-12 flex items-center justify-center text-3xl">
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
            </div>
            <div className="">
              <h4 className="text-amber-600 px-4">Call us</h4>
              <h4 className="font-extrabold text-gray-800">+87-877-673</h4>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="h-12 text-amber-600 w-12 flex items-center justify-center text-3xl">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <div className="">
              <h4 className="text-amber-600 px-4">Email us</h4>
              <h4 className="font-extrabold text-gray-800">
                <a href="mailto:info@gmail.com" title="Send mail">
                  info@gmail.com
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen [-md] */}
      <div className="md:hidden relative flex items-center">
        {!showNav ? (
          <div className="flex flex-grow justify-end">
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
