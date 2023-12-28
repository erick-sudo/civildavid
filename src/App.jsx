import { useContext, useEffect } from "react";
import "./App.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/keyboard";

import { Launching } from "./components/Launching";
import { AppContext } from "./components/AppContext";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Error404Page from "./components/Error404Page";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";

import { register } from "swiper/element/bundle";
register();

export default function App() {
  const tabs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
  ];

  const { launching } = useContext(AppContext);

  return (
    <div className="text-gray-800">
      {launching ? (
        <Launching />
      ) : (
        <div>
          <NavigationBar tabs={tabs} />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}
