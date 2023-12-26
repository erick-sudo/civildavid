import React from "react";
import Pager from "../lib/Pager";
import { StrokeText } from "../lib/StrokeText";
import Loop from "../lib/Loop";
import { testimonialImageAvatars, testimonials } from "../assets/testimonials";
import { team, teamMembersAvatars } from "../assets/team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faEnvelope,
  faLocationDot,
  faQuoteLeftAlt,
  faQuoteRightAlt,
  faStar,
  faStarHalfAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Focus from "../lib/Focus";
import { productImages, products } from "../assets/products";
import { TransitionClient } from "../lib/TransitionClient";
import { attractiveStatements } from "../assets/statements";
import { serviceImages, services } from "../assets/services";
import HeroSection from "./HeroSection";
import { projects } from "../assets/projects";

export default function Home() {
  const linearG = "bg-gradient-to-tl from-amber-800 via-amber-600 to-amber-900";

  const projs = Object.keys(projects);

  return (
    <div className="flex flex-col gap-24 py-4">
      {/* Hero Section */}
      <HeroSection />

      {/* Services */}
      <div className="">
        <h4 className="px-12 pt-4 text-3xl font-extrabold">We Offer</h4>
        <h5 className="px-12 text-2xl font-thin">Professional touch</h5>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="">
            <Pager
              padding={0}
              autoPlay={{
                play: false,
                interval: 10000,
              }}
              slidesClassName="flex"
              orientation="vertical"
              contentClassName=""
              className="rounded-none"
              arrows={{
                showArrows: false,
              }}
              indicators={{
                showIndicators: true,
                activeClassName: "bg-amber-600 border-0",
                inactiveClassName: "bg-amber-800 border-0",
                indicatorsWrapperClassName: "border-0",
              }}
            >
              {services.map((service, index) => (
                <div
                  className="group flex flex-col justify-center gap-12 items-start flex-grow border border-amber-700 p-2 overflow-hidden relative"
                  key={index}
                >
                  <div className="absolute inset-0 -z-10">
                    <img
                      className="w-full h-full object-cover group-hover:scale-150 duration-500"
                      src={serviceImages[service.title][0]}
                    />
                  </div>
                  <div className="absolute inset-6 -z-10 bg-white opacity-75 blur-lg group-hover:blur-2xl duration-300"></div>
                  <div className="py-6 px-4 text-3xl flex items-center font-extrabold z-20 text-gray-800">
                    {service.title}
                  </div>
                  <div
                    className={`m-4 z-50 ${linearG} bg-clip-text text-transparent max-w-lg py-4 px-12 rounded-3xl`}
                  >
                    {service.description}
                  </div>

                  <div className="z-20 flex justify-end px-12">
                    <button className="bg-gradient-to-tl font-extrabold hover:-translate-y-1 hover:shadow-lg hover:shadow-black duration-300 rounded from-amber-800 via-amber-600 to-amber-900 w-max px-12 py-4">
                      View More
                    </button>
                  </div>
                </div>
              ))}
            </Pager>

            <div className="grid gap-4 my-8 px-12">
              <div className="flex items-center gap-2 text-2xl font-thin">
                <FontAwesomeIcon
                  className="text-amber-700"
                  icon={faArrowRightLong}
                />
                <div>Quality craftsmanship</div>
              </div>
              <div className="flex items-center gap-2 text-2xl font-thin">
                <FontAwesomeIcon
                  className="text-amber-700"
                  icon={faArrowRightLong}
                />
                <div>Quality supervision</div>
              </div>
              <div className="flex items-center gap-2 text-2xl font-thin">
                <FontAwesomeIcon
                  className="text-amber-700"
                  icon={faArrowRightLong}
                />
                <div>Proper utilization of materials</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <Loop
              orientation="horizontal"
              slidesClassName="w-[40vh]"
              direction={1}
              speed={20}
              padding={20}
              spacing={10}
            >
              {projs.slice(0, projs.length / 2).map((proj, i) => (
                <div
                  className="group overflow-hidden h-[40vh] flex justify-center items-center duration-300"
                  key={i}
                >
                  <div className="flex-grow overflow-hidden shadow shadow-black self-stretch">
                    <img
                      className="w-full h-full object-cover group-hover:scale-125 duration-500"
                      src={projects[proj]["image"]}
                    />
                  </div>

                  <div className="absolute flex items-center text-white">
                    <div
                      className={`flex items-center justify-center h-16 w-16 shadow-inner shadow-black rounded-[30px] ${linearG}`}
                    >
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <button
                      className={`px-6 rounded-[30px] -translate-x-[1rem] shadow-inner shadow-black ${linearG}`}
                    >
                      {proj}
                    </button>
                  </div>

                  <Focus />
                </div>
              ))}
            </Loop>

            <Loop
              orientation="horizontal"
              slidesClassName="w-[40vh]"
              direction={1}
              speed={20}
              padding={20}
              spacing={10}
            >
              {projs.slice(projs.length / 2).map((proj, i) => (
                <div
                  className="group overflow-hidden h-[40vh] flex justify-center items-center duration-300"
                  key={i}
                >
                  <div className="flex-grow overflow-hidden shadow shadow-black self-stretch">
                    <img
                      className="w-full h-full object-cover group-hover:scale-125 duration-500"
                      src={projects[proj]["image"]}
                    />
                  </div>

                  <div className="absolute flex items-center text-white">
                    <div
                      className={`flex items-center justify-center h-16 w-16 shadow-inner shadow-black rounded-[30px] ${linearG}`}
                    >
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <button
                      className={`px-6 rounded-[30px] -translate-x-[1rem] shadow-inner shadow-black ${linearG}`}
                    >
                      {proj}
                    </button>
                  </div>

                  <Focus />
                </div>
              ))}
            </Loop>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="">
        <h4 className="px-12 pt-4 text-3xl font-extrabold">Our Products</h4>
        <h5 className="px-12 text-2xl font-thin">Guaranteed Satisfaction</h5>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="grid gap-4 lg:grid-cols-2 p-2 m-2">
            <div className="">
              <Loop
                orientation="vertical"
                slidesClassName=""
                className="h-[100vh]"
                direction={1}
                speed={20}
                padding={20}
                spacing={10}
              >
                {projs.slice(0, projs.length / 2).map((proj, i) => (
                  <div
                    className="group overflow-hidden h-[40vh] flex justify-center items-center duration-300"
                    key={i}
                  >
                    <div className="flex-grow overflow-hidden shadow shadow-black self-stretch">
                      <img
                        className="w-full h-full object-cover group-hover:scale-125 duration-500"
                        src={projects[proj]["image"]}
                      />
                    </div>

                    <div className="absolute flex items-center text-white">
                      <div
                        className={`flex items-center justify-center h-16 w-16 shadow-inner shadow-black rounded-[30px] ${linearG}`}
                      >
                        <FontAwesomeIcon icon={faLocationDot} />
                      </div>
                      <button
                        className={`px-6 rounded-[30px] -translate-x-[1rem] shadow-inner shadow-black ${linearG}`}
                      >
                        {proj}
                      </button>
                    </div>

                    <Focus />
                  </div>
                ))}
              </Loop>
            </div>
            <div className="p-4 flex flex-col justify-around gap-4">
              {attractiveStatements.slice(0, 4).map((stmt, index) => (
                <TransitionClient
                  origin="bottom"
                  transitionDuration={400}
                  key={index}
                >
                  <div
                    className={`group p-4 mb-12 max-w-sm mx-auto spherical-shadow rounded-xl hover:bg-gradient-to-r hover:from-amber-900 hover:via-amber-800 hover:to-amber-950 cursor-pointer`}
                  >
                    <div className="flex">
                      <div className="text-4xl h-[6rem] group-hover:bg-amber-800 hover:duration-500 bg-gray-100 duration-500 rounded-t-xl rounded-bl-xl border px-2 border-amber-600/50 flex items-center justify-center font-extrabold">
                        <StrokeText
                          sz={2}
                          strokeColor="rgb(31, 41, 55)"
                          fillColor="transparent"
                          text={`0${index + 1}`}
                        />
                      </div>
                      <div className="flex-grow text-gray-800 group-hover:text-white flex items-center px-4 font-bold text-xl">
                        {stmt.title}
                      </div>
                    </div>
                    <div className="h-12 pt-2 text-gray-800 group-hover:text-white font-bold px-4">
                      {stmt.desc}
                    </div>
                  </div>
                </TransitionClient>
              ))}
            </div>
          </div>
          <div className=" self-center">
            <Pager
              padding={20}
              autoPlay={{
                play: true,
                interval: 5000,
              }}
              slidesClassName=""
              orientation="vertica"
              contentClassName=""
              className=" rounded-none"
              arrows={{
                showArrows: false,
              }}
              indicators={{
                showIndicators: true,
                activeClassName: "bg-gray-100 shadow shadow-black border-0 p-2",
                inactiveClassName: "bg-gray-600 border-0 py-2",
                indicatorsWrapperClassName: "border-0 ",
              }}
            >
              {Object.keys(products).map((product, index) => (
                <div className="relative" key={index}>
                  {/* <div className="absolute blur-lg opacity-25 -z-10 bg-gradient-to-r from-amber-950 via-amber-700 to-amber-950 inset-0"></div> */}
                  <div className="h-[40vh] z-10 overflow-hidden relative shadow shadow-black">
                    <img
                      className="w-full h-full object-cover hover:scale-125 duration-500"
                      src={productImages[product][0]}
                    />
                  </div>
                  <button
                    className={`${linearG} z-20 m-4 right-10 px-4 py-2 top-[40vh] rounded-2xl shadow shadow-black hover:scale-125 duration-500`}
                  >
                    View More
                  </button>
                  <div className="text-2xl m-2 items-center font-extrabold z-20">
                    {product}
                  </div>
                  <div className="m-2 text-4xl text-gray-500">
                    <FontAwesomeIcon icon={faQuoteLeftAlt} />
                  </div>
                  <div className="m-4 text-black z-20 rounded-2xl font-thin">
                    {products[product][Object.keys(products[product])[0]]}
                  </div>
                </div>
              ))}
            </Pager>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto">
        <h4 className="px-12 pt-4 text-3xl font-extrabold">Our Team</h4>
        <h5 className="px-12 text-2xl font-thin">
          Meet our team of professionals
        </h5>

        <div>
          <div
            className="my-4 grid gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 justify-around p-4"
            direction={-1}
            speed={100}
          >
            {team.map((member, index) => (
              <TransitionClient
                transitionDuration={200}
                key={index}
                origin="bottom"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="h-32 w-32 rounded-full overflow-hidden shadow-md shadow-black">
                    <img
                      className="w-full h-full object-cover"
                      src={teamMembersAvatars[member.name]}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-amber-700 font-extrabold text-xl">
                      {member.name}
                    </div>
                    <div className="text-gray-600 text-center font-bold italic">
                      {member.position}
                    </div>
                  </div>
                </div>
              </TransitionClient>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="">
        <h4 className="px-12 pt-4 text-3xl font-extrabold">Testimonials</h4>
        <h5 className="px-12 text-2xl font-thin">
          What our clients say about us
        </h5>

        <div className="flex flex-col lg:flex-row gap-y-12 py-12">
          <div className="p-4 flex-grow">
            <Loop
              className="w-full h-[60vh]"
              orientation="horizontal"
              verticalClassName=""
              slidesClassName="w-[40vh]"
              direction={-1}
              speed={10}
              spacing={20}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group duration-500 w-[40vh] hover:bg-white flex items-center justify-center rounded-xl"
                >
                  <div className="grid group-hover:bg-gradient-to-r  group-hover:from-amber-600 group-hover:via-amber-700 group-hover:to-amber-600 group-hover:duration-500  items-start group-hover:shadow-black py-12 px-8 rounded-xl m-4">
                    <div
                      className="grid group-hover:scale-105 duration-500"
                      key={index}
                    >
                      <div className="flex flex-col items-center gap-4 px-6">
                        <div className="h-14 w-14">
                          <img
                            className="h-full w-full object-cover rounded-full shadow shadow-black"
                            src={testimonialImageAvatars[testimonial.name]}
                          />
                        </div>

                        <div className="font-extrabold group-hover:text-black text-gray-700/75 italic">
                          {testimonial.name}
                        </div>
                      </div>

                      <div className="grid">
                        <div className="flex items-center gap-4 text-2xl py-4 text-gray-700/50 justify-start">
                          <FontAwesomeIcon icon={faQuoteLeftAlt} />
                          <div className="flex-grow border-dotted border-b-2"></div>
                        </div>
                        <div className="flex-grow flex items-center">
                          {testimonial.message}
                        </div>

                        <div className="flex items-center gap-4 text-2xl py-4 text-gray-700/50 justify-end">
                          <div className="flex-grow border-dotted border-b-2"></div>
                          <FontAwesomeIcon icon={faQuoteRightAlt} />
                        </div>
                      </div>
                      
                      <div className="px-4 flex relative">
                        {new Array(10).fill(0).map((i, j) => (
                          <span
                            style={{ left: `${j * 20}px` }}
                            key={j}
                            className="group-hover:text-black text-amber-600 block absolute anim-bounce-from-r"
                          >
                            <FontAwesomeIcon
                              icon={
                                j <= testimonial.rating ? faStar : faStarHalfAlt
                              }
                            />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Loop>
          </div>

          <div className="m-4 self-">
            <h5 className="px-12 pt-4 mx-auto text-3xl font-extrabold bg-clip-text text-transparent w-max bg-gradient-to-r from-amber-600 via-black to-amber-800">
              Reach out
            </h5>
            <form className="mx-auto grid gap-4 mt-6 mb-12 max-w-lg py-12 px-8 rounded-xl">
              <div className="flex items-stretch  overflow-hidden border rounded max-w-lg">
                <div className="w-10 flex items-center justify-center border-r">
                  <FontAwesomeIcon icon={faUserCircle} />
                </div>
                <input
                  className="w-full px-4 py-2 outline-none"
                  placeholder="Name"
                />
              </div>
              <div className="flex border rounded overflow-hidden max-w-lg">
                <div className="w-10 flex items-center justify-center border-r">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  className="w-full px-4 py-2 outline-none"
                  placeholder="Email address"
                />
              </div>
              <div className="flexborder rounded overflow-hidden max-w-lg">
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 outline-none border"
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="shadow shadow-black bg-gradient-to-r  from-amber-600 via-amber-900 to-amber-600 rounded-[50px] text-white p-2 duration-500 hover:translate-y-2 hover:shadow-lg hover:shadow-black hover:bg-gradient-to-r hover:from-amber-900 hover:via-amber-600 hover:to-amber-900">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* More products */}
      <div className="p-4">
        <Loop
          orientation="horizontal"
          slidesClassName="w-[40vh]"
          direction={1}
          speed={20}
          padding={20}
          spacing={10}
        >
          {projs.slice(0, projs.length / 2).map((proj, i) => (
            <div
              className="group h-[40vh] flex justify-center items-center duration-300"
              key={i}
            >
              <div className="flex-grow shadow shadow-black overflow-hidden self-stretch">
                <img
                  className="w-full h-full object-cover group-hover:scale-125 duration-500"
                  src={projects[proj]["image"]}
                />
              </div>

              <div className="absolute flex items-center text-white">
                <div
                  className={`flex items-center justify-center h-16 w-16 shadow-inner shadow-black rounded-[30px] ${linearG}`}
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <button
                  className={`px-6 rounded-[30px] -translate-x-[1rem] shadow-inner shadow-black ${linearG}`}
                >
                  {proj}
                </button>
              </div>

              <Focus />
            </div>
          ))}
        </Loop>
      </div>
    </div>
  );
}
