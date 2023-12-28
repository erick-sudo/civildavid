import React from "react";
import { TransitionClient } from "../lib/TransitionClient";
import { cdn } from "../assets/cdn";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCards,
  FreeMode,
  Keyboard,
  Mousewheel,
  Pagination,
} from "swiper/modules";
import { Background } from "../lib/DottedBackground";

export default function HeroSection() {
  const linearG = "bg-gradient-to-tr from-amber-700 via-gray-800 to-amber-700";

  return (
    <div className="relative overflow-hidden">
      <Background />
      <div className="grid container mx-auto p-4 lg:grid-cols-2">
        <div className="pt-[5em] m-4 z-20">
          <TransitionClient transitionDuration={200}>
            <div
              className={`p-4 text-5xl md:text-6xl gap-12 lg:text-7xl xl:text-8xl font-extrabold ${linearG} bg-clip-text text-transparent`}
            >
              CIVIL DAVID
            </div>
          </TransitionClient>
          <TransitionClient transitionDuration={200} origin="right">
            <div
              className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-4 font-bold ${linearG} bg-clip-text text-transparent`}
            >
              Designers & Company
            </div>
          </TransitionClient>
          <div className="my-24 lg:mx-12 lg:my-24 bg-white rounded relative before:absolute before:-inset-10 before:bg-white before:skew-y-[70deg] before:-z-30">
            <TransitionClient transitionDuration={200}>
              <div
                className={`max-w-6xl ${linearG} bg-clip-text p-4 text-transparent`}
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
        <div className="hero-cards overflow-hidden z-20 py-[2em]">
          <Swiper
            loop
            mousewheel
            freeMode
            speed={500}
            tabIndex={0}
            keyboard
            navigation={{}}
            pagination={{
              clickable: true,
            }}
            className="w-[35vh] md:w-[40vh] lg:w-[50vh] mx-auto"
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Keyboard, Pagination, Mousewheel, FreeMode]}
          >
            {new Array(6).fill(0).map((_, idx) => (
              <SwiperSlide
                key={idx}
                className="h-[60vh] lg:h-[70vh] shadow shadow-black rounded-xl overflow-hidden flex"
              >
                <div className="">
                  <img
                    className="h-full w-full object-cover rounded-xl"
                    src={`${cdn}/hero_section/hero${idx % 4}.jpg`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
