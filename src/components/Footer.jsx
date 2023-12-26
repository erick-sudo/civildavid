import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { products } from "../assets/products";

export default function Footer() {
  const linearG = "bg-gradient-to-r from-amber-800 via-amber-600 to-amber-900";

  return (
    <div className="p-4 bg-gray-950">
      <footer className="text-white">
        <div className="px-4 py-8 mx-auto">
          <div className="text-4xl font-bold">
            <h1
              className={`w-full md:w-2/3 ${linearG} bg-clip-text text-transparent`}
            >
              How can we help you? Get in touch
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between mt-4">
            <p className="w-full md:w-2/3  text-gray-400">
              Navigate through our user-friendly interface to discover our
              comprehensive services, client testimonials, and sustainable
              practices. Join us in shaping the future of construction and
              design with a commitment to quality, reliability, and unparalleled
              craftsmanship. Welcome to a world where construction meets
              artistry, and possibilities are built to last.
            </p>
            <div className="flex flex-col mt-8 md:flex-row md:justify-between">
              <div className="">
                <p>Follow us on social media:</p>
                <div className="flex mt-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 hover:text-blue-500"
                  >
                    <FontAwesomeIcon icon={faX} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 hover:text-blue-300"
                  >
                    <FontAwesomeIcon icon={faX} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-500"
                  >
                    <FontAwesomeIcon icon={faX} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 text-center md:text-left text-lg mt-8">
            <div className="col-span-1">
              <strong
                className={`font-medium ${linearG} bg-clip-text text-transparent`}
              >
                Products
              </strong>
              <nav
                aria-label="Footer About Nav"
                className="mt-4 flex flex-col space-y-2"
              >
                {Object.keys(products).map((product, index) => (
                  <a key={index}>{product}</a>
                ))}
              </nav>
            </div>
            <div className="col-span-1">
              <strong
                className={`font-medium ${linearG} bg-clip-text text-transparent`}
              >
                Services
              </strong>
              <nav
                aria-label="Footer Services Nav"
                className="mt-4 flex flex-col space-y-2"
              >
                {["Home Demolition", "Dry Walling", "Brick Laying"].map(
                  (service, index) => (
                    <a
                      key={index}
                      className="text-white transition hover:text-gray-300"
                      href="/conferences"
                    >
                      {service}
                    </a>
                  )
                )}
              </nav>
            </div>
            <div className="col-span-1 flex justify-center">
              <div>
                <strong
                  className={`font-medium ${linearG} bg-clip-text text-transparent`}
                >
                  Contact
                </strong>
                <nav
                  aria-label="Footer Contact Nav"
                  className="mt-4 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-2">
                    <div className={`text-amber-800 text-2xl`}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <p className="text-white">contact@example.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`text-amber-800 text-2xl`}>
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <p className="text-white">+1234567890</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`text-amber-800 text-2xl`}>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <p className="text-white">Nairobi, Kenya</p>
                  </div>
                </nav>
              </div>
            </div>

            <div className="col-span-1">
              <strong
                className={`font-medium ${linearG} bg-clip-text text-transparent`}
              >
                Location
              </strong>
              <div className="mt-4 ">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9645684044293!2d36.82194621432585!3d-1.2863898359937736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f18278c0e30ef%3A0xa3e1845113ef4b60!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1622132022756!5m2!1sen!2s"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                /> */}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-amber-700 pt-8">
            <p
              className={`text-center text-m/relaxed ${linearG} bg-clip-text text-transparent`}
            >
              Civil David Designers and Company &copy;{" "}
              {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
