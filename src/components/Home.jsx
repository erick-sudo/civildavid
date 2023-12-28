import React from "react";
import { StrokeText } from "../lib/StrokeText";
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
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  FreeMode,
  EffectCards,
  Navigation,
  EffectCube,
  Mousewheel,
  Scrollbar,
} from "swiper/modules";

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
        <div className=" gap-12">
          <div className="">
            <div className="m-2 my-4">
              <Swiper
                speed={1000}
                keyboard
                tabIndex={1}
                initialSlide={2}
                className="py-12"
                freeMode
                mousewheel
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: {
                    slidesPerView: 2,
                  },
                  769: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                navigation
                pagination={{
                  pagination: true,
                  clickable: true,
                }}
                modules={[
                  EffectCoverflow,
                  FreeMode,
                  Pagination,
                  Navigation,
                  Mousewheel,
                ]}
              >
                {services.map((service, index) => (
                  <SwiperSlide
                    className="shadow shadow-black rounded-2xl overflow-hidden"
                    key={index}
                  >
                    <div className="group flex flex-col justify-center gap-12 items-start flex-grow p-2 relative">
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
                        className={`m-4 z-50  bg-clip-text text-transparen max-w-lg py-4 px-12 rounded-3xl`}
                      >
                        {service.description}
                      </div>

                      <div className="z-20 flex justify-end px-12">
                        <button className="bg-gradient-to-tl font-extrabold hover:-translate-y-1 hover:shadow-lg hover:shadow-black duration-300 rounded-[2rem] shadow shadow-black from-amber-800 via-amber-600 to-amber-900 w-max px-12 py-4">
                          View More
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

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

          <div className="m-2 lg:mx-10">
            <Swiper
              loop
              speed={1000}
              freeMode
              initialSlide={3}
              className="py-12"
              effect={"coverflow"}
              grabCursor={true}
              mousewheel
              centeredSlides={true}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: {
                  slidesPerView: 2,
                },
                769: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 80,
                modifier: 1,
                slideShadows: true,
              }}
              navigation
              pagination={{
                pagination: true,
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
            >
              {projs.slice(0, projs.length / 2).map((proj, i) => (
                <SwiperSlide
                  key={i}
                  className="shadow shadow-black rounded overflow-hidden"
                >
                  <div className="group overflow-hidden h-[40vh] flex justify-center items-center duration-300">
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
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              loop
              speed={1000}
              freeMode
              initialSlide={3}
              className="py-12"
              effect={"coverflow"}
              grabCursor={true}
              mousewheel
              centeredSlides={true}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: {
                  slidesPerView: 2,
                },
                769: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 80,
                modifier: 1,
                slideShadows: true,
              }}
              navigation
              pagination={{
                pagination: true,
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
            >
              {projs.slice(projs.length / 2).map((proj, i) => (
                <SwiperSlide
                  key={i}
                  className="shadow shadow-black rounded overflow-hidden"
                >
                  <div className="group overflow-hidden h-[40vh] flex justify-center items-center duration-300">
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="lg:mx-10">
        <h4 className="px-12 pt-4 text-3xl font-extrabold">Our Products</h4>
        <h5 className="px-12 text-2xl font-thin">Guaranteed Satisfaction</h5>
        <div className="">
          <div className="flex flex-col gap-4 gap-y-12 my-4 lg:flex-row p-2">
            <div className="lg:w-1/2">
              <Swiper
                freeMode
                speed={2000}
                autoplay={{
                  delay: 5000,
                }}
                className="w-7/8"
                effect="cube"
                mousewheel
                modules={[Navigation, Mousewheel, EffectCube, FreeMode]}
                navigation
              >
                {projs.slice(0, projs.length / 2).map((proj, i) => (
                  <SwiperSlide className="shadow shadow-black" key={i}>
                    <div className="group overflow-hidden h-[60vh] flex justify-center items-center duration-300">
                      <div className="flex-grow overflow-hidden self-stretch">
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="p-4 lg:w-1/2 flex flex-col justify-around gap-4">
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
          <div className="m-2 lg:mx-10">
            <Swiper
              speed={1000}
              freeMode
              mousewheel
              className="py-12"
              initialSlide={1}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: {
                  slidesPerView: 2,
                },
                769: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Mousewheel]}
            >
              {Object.keys(products).map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="relative">
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
                </SwiperSlide>
              ))}
            </Swiper>
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

        <div className="grid lg:grid-cols-2 gap-y-12 py-12">
          <div className="flex-grow testimonial-cards overflow-hidden py-4">
            <Swiper
              freeMode
              mousewheel
              speed={1000}
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 5000 }}
              navigation
              className="w-[35vh] md:w-[40vh] lg:w-[50vh] mx-auto rounded-3xl"
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, FreeMode, Mousewheel, Pagination]}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="overflow-hidd rounded-3xl shadow shadow-black"
                >
                  <div className="group duration-500 bg-gray-200 py-12 flex items-center justify-center rounded-3xl">
                    <div className="grid items-start group-hover:shadow-black py-12 px-8 rounded-xl m-4">
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
                                  j <= testimonial.rating
                                    ? faStar
                                    : faStarHalfAlt
                                }
                              />
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
      <div className="m-2 lg:mx-10">
        <Swiper
          loop
          mousewheel
          className=""
          scrollbar={{ draggable: true }}
          speed={1000}
          autoplay={{
            delay: 1000,
          }}
          pagination={{ clickable: true }}
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: {
              slidesPerView: 2,
            },
            769: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[FreeMode, Mousewheel, Pagination, Scrollbar]}
        >
          {projs.slice(0, projs.length / 2).map((proj, i) => (
            <SwiperSlide className="shadow shadow-black" key={i}>
              <div className="group h-[40vh] flex justify-center items-center duration-300">
                <div className="flex-grow overflow-hidden self-stretch">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
