import React from "react";
import { productImages, products } from "../assets/products";
import { TransitionClient } from "../lib/TransitionClient";

export default function Products() {
  const linearG = "bg-gradient-to-tr from-amber-950 via-amber-600 to-amber-950";
  return (
    <div className="border border-transparent">
      <div className="flex flex-col gap-24 py-12 p-4 container mx-auto">
        {Object.keys(products).map((product, index) => (
          <div key={index}>
            <div className="p-4 duration-500">
              <TransitionClient origin="right" transitionDuration={500}>
                <div
                  className={`text-4xl font-extrabold p-4 ${linearG} bg-clip-text text-transparent w-max`}
                >
                  {product}
                </div>
              </TransitionClient>
              <div>
                {Object.keys(products[product]).map((prod, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-stretch ${
                      idx % 2 === 0
                        ? "md:flex-row-reverse items-center"
                        : "md:flex-row items-center"
                    }`}
                  >
                    <TransitionClient
                      origin="bottom"
                      transitionDuration={2000}
                      className="md:w-1/2 m-2 h-[40vh]"
                      contentClassName="flex flex-grow"
                    >
                      <div className="m-4 shadow shadow-black rounded-lg overflow-hidden flex-grow">
                        <img
                          className="h-full w-full object-cover"
                          src={productImages[product][idx]}
                        />
                      </div>
                    </TransitionClient>
                    <div className="md:w-1/2 self-center">
                      <TransitionClient
                        transitionDuration={1000}
                        origin="right"
                        className=""
                      >
                        <div className="text-4xl font-thin p-2">{prod}</div>
                      </TransitionClient>

                      <TransitionClient
                        className="px-2 py-4"
                        transitionDuration={1000}
                      >
                        <div className=" mx-2 mb-12 mt-4 px-4 py-8 rounded-xl">
                          <div className="max-w-sm font-bold text-gray-900">
                            {products[product][prod]}
                          </div>
                        </div>
                      </TransitionClient>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <TransformClient transitionDuration={1000} origin="">
        <div className="h-[40vh] bg-amber-700"></div>
      </TransformClient> */}
    </div>
  );
}
