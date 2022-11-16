import React from "react";
import ImgLogoR from "../img/logo512.png";
import ImgLogoTail from "../img/tailWind.svg";
import Html5 from "../img/html5.png";
import Css3 from "../img/css3.png";
import Js from "../img/js.png";
import Es6 from "../img/ES6-01.svg";
export default function Home() {
  return (
    /* Notes about font types :-
    // 1- Main Titles --> font-semibold,
    // 2- Sub Titles --> font-mono,
    // 3- Describe Titles --> serif */

    <div className="  mt-20">
      {/* First Section React */}
      <header
        className="flex flex-col-reverse
       sm:flex-row justify-around items-center py-10 sm:py-20"
      >
        <div className="flex flex-col  max-w-xs pt-12 sm:pt-0">
          <h2 className="text-center text-white text-3xl uppercase font-semibold  pb-3 dark:text-white">
            Section here about
            <span className="text-sky-300 "> React.js </span>
          </h2>
          <p className="text-xl text-slate-400 font-serif">
            My text Is here to all My text Is here to all My text Is here to all
          </p>
        </div>
        <img src={ImgLogoR} alt="TailWind " className="w-36" />
      </header>

      <hr className="w-1/3 bg-slate-400 mx-auto  "></hr>
      {/* Second Section TailwindCss */}
      <header
        className="flex flex-col  
       sm:flex-row-reverse justify-around items-center py-10 sm:py-28"
      >
        <div className="flex flex-col  max-w-xs pt-12 sm:pt-0 text-center">
          <h2 className="text-center text-white text-3xl uppercase font-semibold  pb-3 dark:text-white">
            Main idea here about
            <span className="text-sky-300 "> Tailwind </span>Css
          </h2>
          <p className="text-xl text-slate-400 font-serif">
            My text Is here to all My text Is here to all My text Is here to all
          </p>
        </div>
        <img
          src={ImgLogoTail}
          alt="TailWind "
          className="w-36 pt-8 sm:pt-0 pb-5"
        />
      </header>
      <hr className="w-2/3 bg-slate-400 mx-auto  "></hr>
      {/* Third Section */}
      <div className="pt-12  m-auto">
        <h2 className="text-center uppercase text-2xl font-mono pb-5 	">
          frontend skills
        </h2>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xs sm:max-w-xl m-auto">
          <div className="flex flex-col  border-2 border-white bg-slate-800 rounded-2xl transition-all duration-300 ease-out hover:scale-75  ">
            <img src={Html5} alt="HTML5" className="p-5 w-32 mx-auto " />
            <h2 className="text-center uppercase text-2xl font-mono 	">html5</h2>
          </div>
          <div className="flex flex-col border-2 border-sky-400  rounded-2xl transition-all duration-300 ease-out hover:scale-75  ">
            <img src={Css3} alt="CSS3" className="p-5 w-32 mx-auto" />
            <h2 className="text-center uppercase text-2xl font-mono  	">css3</h2>
          </div>
          <div className="flex flex-col border-2 border-black bg-slate-800  rounded-2xl  transition-all duration-300 ease-out hover:scale-75 ">
            <img src={Js} alt="JS" className="p-5 w-32 mx-auto" />
            <h2 className="text-center uppercase text-2xl font-mono ">
              javascript
            </h2>
          </div>
          <div className="flex flex-col border-2 border-orange-600   rounded-2xl transition-all duration-300 ease-out hover:scale-75  ">
            <img src={Es6} alt="CSS3" className="p-5 w-32 mx-auto" />
            <h2 className="text-center uppercase text-2xl font-mono  	">es6</h2>
          </div>
          <div className="flex flex-col border-2 border-white bg-slate-800  rounded-2xl  transition-all duration-300 ease-out hover:scale-75 ">
            <img src={ImgLogoR} alt="JS" className="p-5 w-32 mx-auto" />
            <h2 className="text-center uppercase text-2xl font-mono ">React</h2>
          </div>
          <div className="flex flex-col border-2 border-sky-400  rounded-2xl transition-all duration-300 ease-out hover:scale-75  ">
            <img src={ImgLogoTail} alt="CSS3" className=" p-5   mx-auto" />
            <h2 className="text-center uppercase text-2xl font-mono   ">
              Tailwindcss
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}
