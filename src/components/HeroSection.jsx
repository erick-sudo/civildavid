import React from "react";
import { TransitionClient } from "../lib/TransitionClient";
import { cdn } from "../assets/cdn";

export default function HeroSection() {
  const linearG = "bg-gradient-to-tr from-amber-700 via-gray-800 to-amber-700";

  return (
    <div className="relative grid lg:grid-cols-2 overflow-hidden">
      <div className="pt-[3em] z-20 flex flex-col justify-center">
        <TransitionClient transitionDuration={200}>
          <div
            className={`p-4 text-5xl md:text-6xl gap-12 lg:text-7xl xl:text-8xl font-extrabold ${linearG} bg-clip-text text-transparent`}
          >
            CIVIL DAVID
          </div>
        </TransitionClient>
        <TransitionClient transitionDuration={200} origin="right">
          <div
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-4 font-bold ${linearG} bg-clip-text text-transparent`}
          >
            Designers & Company
          </div>
        </TransitionClient>
        <div className="mx-2 my-24 lg:mx-12 lg:my-24 bg-white">
          <TransitionClient transitionDuration={200}>
            <div
              className={`max-w-6xl ${linearG} bg-clip-text p-2 text-transparent`}
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
      <div>
        <div className="m-2 shadow shadow-black">
          <img
            className="h-full w-full object-cover"
            src={`${cdn}/hero_section/hero1.jpg`}
          />
        </div>
      </div>
    </div>
  );
}
