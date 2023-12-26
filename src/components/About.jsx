import React from "react";
import { TransitionClient } from "../lib/TransitionClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCube,
  faLayerGroup,
  faLightbulb,
  faSuitcase,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { homes } from "../assets/images/apartments/apartments";
import splash1 from "../assets/splash/splash1.png";
import splash2 from "../assets/splash/splash2.png";

export default function About() {
  const linearG = "bg-gradient-to-tr from-amber-950 via-amber-600 to-amber-950";

  const mission =
    "Our mission is to deliver high-quality construction and design solutions that exceed client expectations, prioritize sustainability, and contribute to the betterment of communities.";

  const vision =
    "We envision a future where our innovative projects shape inspiring environments, promote sustainable practices, and set new standards for excellence in the civil construction and design industry.";

  const icons = {
    Excellence: faLightbulb,
    Integrity: faCube,
    Innovation: faTools,
    Sustainability: faSuitcase,
    Collaboration: faLayerGroup,
  };

  const coreValues = {
    Excellence:
      "We strive for excellence in every aspect of our work, from project conception to completion.",
    Integrity:
      "We conduct business with the utmost integrity, building trust with clients, partners, and the community.",
    Innovation:
      "We embrace innovation, leveraging cutting-edge technologies and creative solutions to drive success.",
    Sustainability:
      "We are committed to environmentally responsible practices, promoting sustainability in every project.",
    Collaboration:
      "We foster a collaborative culture, working closely with clients, partners, and our talented team to achieve shared goals.",
  };

  let imageIdx = 0
  const coreValuesImagePairs = Object.keys(coreValues).map((value, index) => {
    imageIdx += 1
    const elements = [
      <div className="p-4 flex-grow">
        <div className="flex items-center gap-4">
          <div className="text-2xl text-amber-800">
            <FontAwesomeIcon icon={icons[value]} />
          </div>
          <TransitionClient
            origin={index % 2 === 0 ? "left" : "right"}
            transitionDuration={1000}
          >
            <h2 className="px-4 py-2 text-4xl font-thin">{value}</h2>
          </TransitionClient>
        </div>
        <TransitionClient
          origin={index % 2 === 0 ? "right" : "left"}
          transitionDuration={1000}
        >
          <h2 className="px-4 py-2 text-2xl">{coreValues[value]}</h2>
        </TransitionClient>
      </div>,
      <div className="min-h-[25vh] flex-grow flex">
        <TransitionClient
          origin={index % 2 === 0 ? "top" : "bottom"}
          transitionDuration={1000}
          className="absolute inset-0 p-4"
        >
          <div className="flex-grow h-full shadow shadow-black rounded overflow-hidden">
            <img
              className="w-full h-full object-cover shadow shadow-black"
              src={homes[imageIdx]}
            />
          </div>
        </TransitionClient>
      </div>,
    ];

    return index % 2 === 0 ? elements : elements.reverse();
  });

  return (
    <div className="p-4 grid gap-24">
      {/* Mission */}
      <div className="grid gap-8 md:grid-cols-2 container mx-auto">
        <div className="self-center">
          <TransitionClient transitionDuration={1000}>
            <h1
              className={`text-5xl w-max my-4 ${linearG} bg-clip-text text-transparent`}
            >
              Mission
            </h1>
          </TransitionClient>
          <TransitionClient origin="right" transitionDuration={1000}>
            <div className="px-4 py-2 text-2xl lg:text-3xl max-w-lg text-justify">
              {mission}
            </div>
          </TransitionClient>
        </div>
        <TransitionClient className="flex" transitionDuration={1000}>
          <div className="flex max-w-lg h-full">
            <div className="relative flex-grow bg-white">
              <img
                src={splash1}
                alt=""
                className="w-full h-full object-cover"
              />
              <img
                src={homes[5]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
          </div>
        </TransitionClient>
      </div>

      {/* Vision */}
      <div className="grid gap-8 md:grid-cols-2 container mx-auto">
        <TransitionClient className="flex" transitionDuration={1000}>
          <div className="flex max-w-lg h-full">
            <div className="relative flex-grow bg-white">
              <img
                src={splash2}
                alt=""
                className="w-full h-full object-cover"
              />
              <img
                src={homes[13]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
          </div>
        </TransitionClient>
        <div className="self-center">
          <TransitionClient transitionDuration={1000}>
            <h1
              className={`text-5xl w-max my-4 ${linearG} bg-clip-text text-transparent`}
            >
              Vision
            </h1>
          </TransitionClient>
          <TransitionClient origin="right" transitionDuration={1000}>
            <div className="px-4 py-2 text-2xl lg:text-3xl max-w-lg text-justify">
              {vision}
            </div>
          </TransitionClient>
        </div>
      </div>

      {/* Core Values */}
      <div className="container mx-auto">
        <h1
          className={`text-5xl w-max my-4 ${linearG} bg-clip-text text-transparent`}
        >
          Core values
        </h1>
        <div className="list-disc text-gray-700 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {coreValuesImagePairs.flat().map((v, index) => (
            <div className="flex relative" key={index}>
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
