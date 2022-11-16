import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navpar.css";

import ImgLogo from "../img/logo512.png";

export default function Navpar() {
  var NavPar = () => {
    var mobile = document.getElementById("mobile-menu");
    var nav_btn = document.getElementById("hamburger-button");
    // toggle will add classNames to html tags and we have some rules about toogle :
    //1- if this class was already added before time in this case we would have false or the class Name will delete automatically
    // 2- if className first time established and added in the HTML this case this class will add
    nav_btn.classList.toggle("toggle-btn");
    mobile.classList.toggle("hidden");
  };
  return (
    <div>
      <div
        className="bg-slate-700 text-white opacity-95 z-100 
      relative    
      "
      >
        <section
          className="  
         flex justify-between  sm:justify-around 
         p-4
         fixed top-0 left-0 right-0 z-100
         bg-slate-700   
         "
        >
          <h1 className="text-2xl sm:pt-2 font-medium">
            <a href="#hero">ReactTailwindCss</a>
          </h1>
          {/* This icon to appear only in sm screen with options navigations */}
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer   text-3xl sm:hidden"
            onClick={NavPar}
          >
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          {/* Navpar in large screen   */}
          <nav
            className="hidden sm:flex transition ease-in delay-150 "
            aria-label="main"
          >
            <div className="text-slate-50 font-mono md:mx-2 p-3 rounded-lg">
              <NavLink
                className="rounded-lg hover:bg-sky-700 p-2 "
                end
                to={"/ReactWillTailwind"}
              >
                HOME
              </NavLink>
            </div>
            <div className="text-slate-50 font-mono md:mx-2 p-3 rounded-lg">
              <NavLink
                className="rounded-lg hover:bg-sky-700 p-2 transition  "
                to={"/ReactWillTailwind/about"}
              >
                About
              </NavLink>
            </div>
            <div className="text-slate-50 font-mono md:mx-2 p-3 rounded-lg">
              <NavLink
                className="rounded-lg hover:bg-sky-700 p-2 transition  "
                to={"/ReactWillTailwind/tail"}
              >
                TailWindCss
              </NavLink>
            </div>
          </nav>
        </section>
        {/* Mobile Navpar  */}
        <section
          id="mobile-menu"
          onClick={NavPar}
          className=" fixed top-12 left-0 right-0    hidden w-full     flex-col bg-black text-5xl"
        >
          <nav className="flex min-h-screen flex-col items-center py-5">
            <div className="text-slate-50 font-mono  text-2xl p-3 rounded-lg">
              <NavLink
                className="rounded-lg hover:bg-sky-700 p-2 "
                end
                to={"/ReactWillTailwind"}
              >
                HOME
              </NavLink>
            </div>
            <div className="text-slate-50 font-mono  text-2xl p-3 rounded-lg">
              <NavLink
                className="rounded-lg hover:bg-sky-700 p-2 transition  "
                to={"/ReactWillTailwind/about"}
              >
                About
              </NavLink>
            </div>
            <div className="text-slate-50 font-mono  text-2xl p-3 rounded-lg">
              <NavLink
                className="rounded-lg hover:bg-sky-700 p-2 transition  "
                to={"/ReactWillTailwind/tail"}
              >
                TailWindCss
              </NavLink>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
}
