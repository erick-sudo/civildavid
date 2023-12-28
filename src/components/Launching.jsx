import React, { useContext, useEffect, useState } from "react";
import { ConvergeText } from "./ConvergeText";
import Loader from "./Loader";
import { AppContext } from "./AppContext";

export function Launching() {
  const text = "Civil David Designers & Company";
  const [textIndex, setTextIndex] = useState(0);
  const { setLaunching } = useContext(AppContext);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      if (idx > text.length) {
        stopInterval();
        setTimeout(() => {
          setLaunching(false);
        }, 100);
      } else {
        setTextIndex(idx);
        idx += 1;
      }
    }, 10);

    const stopInterval = () => {
      clearInterval(interval);
    };

    return () => {
      stopInterval();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center">
      <div
        style={{ animation: "500ms anim_left ease-out" }}
        className="absolute left-[100%] right-0 top-0 bottom-0 bg-black -z-10 duration-300 ease-linear"
      ></div>
      <Loader
        className="p-2 text-2xl text-amber-600 font-thin"
        text={text.slice(0, textIndex)}
      />
      {/* <div className="w-full h-1/3"></div>
      <div className="flex flex-grow">
        <div className="max-w-2xl flex py-8 px-4 flex-grow mx-auto">
          <ConvergeText
            className=""
            centerComponent={<div className="relative"><Loader className="-translate-y-[50%]" /></div>}
            text="CIVIL DAVID"
          />
        </div>
      </div>
      <div className=" w-full h-1/3">
        <div className="p-2 text-2xl text-amber-600 font-extrabold w-max mx-auto">
          {text.slice(0, textIndex)}
        </div>
      </div> */}
    </div>
  );
}
