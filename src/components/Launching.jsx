import React, { useContext } from "react";
import { ConvergeText } from "./ConvergeText";
import Loop from "../lib/Loop";
import { AppContext } from "./AppContext";
import splash1 from "../assets/splash/splash1.png";
import splash2 from "../assets/splash/splash2.png";
import { homes } from "../assets/images/apartments/apartments";

export function Launching() {
  const linearG = "from-amber-600 via-amber-900 to-amber-500 bg-gradient-to-tr";

  const { setLaunching } = useContext(AppContext);
  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      <div className="flex flex-grow">
        <div className="max-w-2xl flex py-8 px-4 flex-grow mx-auto">
          <div className="flex">
            <Loop
              showNavigators={false}
              slidesClassName=""
              direction={-1}
              speed={1}
              spacing={4}
              className=" h-full"
              padding={1}
              orientation="vertical"
            >
              {"designers and company".split("").map((ch, i) => (
                <div
                  key={i}
                  className={`shadow shadow-amber-900/10 h-8 w-8 flex items-center justify-center rounded-full`}
                ></div>
              ))}
            </Loop>
          </div>
          <ConvergeText
            centerComponent={
              <div className="relative">
                <div className="absolute left-0 right-0 -bottom-10 -top-10 bg-white">
                <img
                src={splash2}
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
            }
            text="CIVIL DAVID"
          />
          <div className="flex">
            <Loop
              showNavigators={false}
              slidesClassName=""
              direction={-1}
              speed={1}
              spacing={4}
              className=" h-full"
              padding={1}
              orientation="vertical"
            >
              {"designers and company".split("").map((ch, i) => (
                <div
                  key={i}
                  className={`shadow shadow-amber-900/10 h-8 w-8 flex items-center justify-center rounded-full`}
                ></div>
              ))}
            </Loop>
          </div>
        </div>
      </div>
      <div className="self-center p-4">
        <button
          onClick={() => setLaunching(false)}
          className={`px-12 py-4 ${linearG} text-white rounded-[30px] shadow shadow-black hover:-translate-y-2 duration-500`}
        >
          Lets Go
        </button>
      </div>
    </div>
  );
}
