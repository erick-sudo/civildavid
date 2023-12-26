import React from "react";
import { TransitionClient } from "../lib/TransitionClient";
import { serviceImages, services } from "../assets/services";
import Cube from "./Cube";
import { randomInteger } from "../lib/functions";
import Loop from "../lib/Loop";

export default function Services() {
  const linearG = "from-amber-600 via-amber-900 to-amber-500 bg-gradient-to-t";

  const dirs = [-1, 1];

  const components = [
    {
      component: Cube,
      props: {
        facesClassName: "flex",
        className: "h-48 mx-auto",
        time: 10000,
        style: { animation: `20s turn linear infinite` },
      },
      childClassName: "flex-grow",
    },
    {
      component: Loop,
      props: {
        orientation: "horizontal",
        slidesClassName: "w-[20vh]",
        direction: dirs[randomInteger(0, 2)],
        speed: 100,
        padding: 0,
        spacing: 5,
        showNavigators: false,
      },
      childClassName: "shadow shadow-black h-[20vh]",
    },
    {
      component: Loop,
      props: {
        orientation: "vertical",
        slidesClassName: "",
        className: "h-[40vh]",
        direction: dirs[randomInteger(0, 2)],
        speed: 100,
        padding: 0,
        spacing: 5,
        showNavigators: false,
      },
      childClassName:
        "h-[20vh] max-w-lg shadow shadow-black",
    },
  ];

  return (
    <div className="flex">
      <div className="flex-grow "></div>
      <div className="container mx-auto ">
        {services.map((service, index) => {
          const randomComponent = components[index % 3];

          const VisualHost = randomComponent.component;

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
                  <TransitionClient
                    className={`${VisualHost === Cube && "py-12"}`}
                    origin="right"
                    transitionDuration={500}
                  >
                    <VisualHost {...randomComponent.props}>
                      {serviceImages[service.title].map((i, idx) =>
                        ![].includes(idx) ? (
                          <div
                            key={idx}
                            className={`${randomComponent.childClassName}`}
                          >
                            <img
                              className="h-full w-full object-cover"
                              src={i}
                            />
                          </div>
                        ) : (
                          <div key={idx}></div>
                        )
                      )}
                    </VisualHost>
                  </TransitionClient>
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
