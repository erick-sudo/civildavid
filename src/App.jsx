import { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
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

export default function App() {
  const tabs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" }
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
