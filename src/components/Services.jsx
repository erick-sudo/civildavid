import React from "react";
import { TransitionClient } from "../lib/TransitionClient";
import { serviceImages, services } from "../assets/services";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCards,
  EffectCoverflow,
  EffectCube,
  FreeMode,
  Mousewheel,
  Pagination,
} from "swiper/modules";

export default function Services() {
  const linearG = "from-amber-600 via-amber-900 to-amber-500 bg-gradient-to-t";

  const components = [
    {
      component: Swiper,
      props: {
        speed: 1000,
        loop: true,
        autoplay: { delay: 1000 },
        initialSlide: 2,
        pagination: {
          clickable: true,
        },
        effect: "coverflow",
        slidesPerView: 3,
        depth: 200,
        modules: [Pagination, EffectCoverflow, Mousewheel, FreeMode],
      },
      slideWrapper: SwiperSlide,
      slideClassName: "shadow shadow-black h-[20vh] lg:h-[30vh] flex",
    },
    {
      component: Swiper,
      props: {
        speed: 1000,
        loop: true,
        autoplay: { delay: 1000 },
        initialSlide: 2,
        pagination: {
          clickable: true,
        },
        effect: "cube",
        slidesPerView: 3,
        depth: 200,
        modules: [Pagination, EffectCube, Mousewheel, FreeMode],
        className: "h-[30vh]",
      },
      slideWrapper: SwiperSlide,
      slideClassName: "flex shadow shadow-black",
    },
    {
      component: Swiper,
      props: {
        speed: 1000,
        loop: true,
        autoplay: { delay: 2000 },
        initialSlide: 2,
        pagination: {
          clickable: true,
        },
        navigation: true,
        effect: "cards",
        modules: [Pagination, EffectCards, Mousewheel, FreeMode],
        className: "h-[50vh] w-2/3",
      },
      slideWrapper: SwiperSlide,
      slideClassName: "flex-grow flex shadow shadow-black rounded-2xl",
    },
  ];

  return (
    <div className="fle">
      <div className="flex-grow "></div>
      <div className="container mx-auto ">
        {services.map((service, index) => {
          const randomComponent = components[index % 3];

          const VisualHost = randomComponent.component;
          const SlideHost = randomComponent.slideWrapper;

          return (
            <div key={index}>
              <div
                className={`m-2 p-2 flex gap-y-12 ${
                  index % 2 === 0 ? "flex-col" : "flex-col-reverse"
                } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`md:w-1/2 lg:w-1/3 self-center ${
                    index % 2 !== 0 && "r-to-l"
                  }`}
                >
                  <div className={`${index % 2 === 0 ? "flex" : "flex rtl"}`}>
                    <div className="grid gap-2">
                      <div className={`p-[2px] ${linearG} rounded`}></div>
                      <div className={`p-[2px] ${linearG} rounded`}></div>
                      <div className={`p-[2px] ${linearG} rounded`}></div>
                      <div className={`p-[2px] ${linearG} rounded`}></div>
                    </div>
                    <div className="p-2">
                      <div className="lg:hidden">
                        <TransitionClient
                          origin={index % 2 === 0 ? "left" : "right"}
                          transitionDuration={1000}
                        >
                          <div
                            className={`p-4 text-2xl text-gray-800 font-extrabold rounded-2xl`}
                          >
                            {service.title}
                          </div>
                        </TransitionClient>
                      </div>
                      <TransitionClient transitionDuration={1000}>
                        <div className="px-4 text-xl font-thin text-justify">
                          {service.description}
                        </div>
                      </TransitionClient>
                    </div>
                  </div>
                </div>
                <div
                  className={`w-full md:w-1/2 lg:w-1/3 p-4 border border-dashed border-amber-600 h-max self-center`}
                >
                  <div>
                    <VisualHost freeMode mousewheel {...randomComponent.props}>
                      {serviceImages[service.title].map((i, idx) =>
                        ![].includes(idx) ? (
                          <SlideHost
                            key={idx}
                            className={`${randomComponent.slideClassName}`}
                          >
                            <div className="flex-grow">
                              <img
                                className="h-full w-full object-cover"
                                src={i}
                              />
                            </div>
                          </SlideHost>
                        ) : (
                          <div key={idx}></div>
                        )
                      )}
                    </VisualHost>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-1/3 border-b border-dashed border-amber-600 self-center">
                  <TransitionClient
                    origin={index % 2 === 0 ? "left" : "right"}
                    transitionDuration={1000}
                  >
                    <div
                      className={`p-4 px-6 text-6xl text-gray-800 font-extrabold rounded-2xl`}
                    >
                      {service.title}
                    </div>
                  </TransitionClient>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex-grow m-2"></div>
    </div>
  );
}
