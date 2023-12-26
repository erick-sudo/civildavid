import React from "react";
import { homes } from "../assets/images/apartments/apartments";
import { TransitionClient } from "../lib/TransitionClient";

export default function HeroSection() {
  const linearG = "bg-gradient-to-tr from-amber-700 via-gray-800 to-amber-700";

  return (
    <div className="relative">
      <div className="absolute -z-20 inset-0">
        <img className="w-full h-full object-cover" src={homes[8]} />
      </div>
      <div className="absolute bg-white/50 inset-0 -z-10"></div>
      <div className="pt-[3em] z-20">
        <TransitionClient transitionDuration={1000}>
          <div
            className={`w-max text-5xl md:text-6xl lg:text-7xl xl:text-8xl py-4 px-4 md:px-6 lg:px-12 xl:px-24 font-extrabold ${linearG} bg-clip-text text-transparent`}
          >
            CIVIL DAVID
          </div>
        </TransitionClient>
        <TransitionClient transitionDuration={1000} origin="right">
          <div
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-4 px-4 md:px-6 lg:px-12 xl:px-24 font-bold ${linearG} bg-clip-text text-transparent`}
          >
            Designers & Company
          </div>
        </TransitionClient>
        <div className="px-12 py-24 text-3xl">
          <TransitionClient transitionDuration={1000}>
            <div
              className={`max-w-6xl ${linearG} bg-clip-text text-transparent`}
            >
              As industry leaders, we specialize in transforming concepts into
              reality, combining cutting-edge construction techniques with
              visionary design. Explore our diverse portfolio showcasing a
              spectrum of successful projects, from infrastructure development
              to architectural marvels. Our team of seasoned professionals
              brings expertise and creativity to every endeavor, ensuring
              unparalleled excellence.
            </div>
          </TransitionClient>
        </div>
      </div>
    </div>
  );
}
