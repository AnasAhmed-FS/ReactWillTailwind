import React from "react";
import { sculptureList } from "./data.js";
import { useState } from "react";
export default function About() {
  var [gal, steGal] = useState(0);
  let sculpture = sculptureList[gal];
  function handleClick() {
    // gal !== sculpture.length ? steGal(gal + 1) : gal + 0;
    var res = sculpture.length;
    if (gal === res) {
      alert("Refresh the page to ");
    } else {
      steGal(gal + 1);
    }
  }
  function handleClickPrev() {
    steGal(gal - 1);
  }
  return (
    <div className=" text-slate-100 max-w-md sm:max-w-xl md:max-w-3xl mx-auto pt-40 pb-12">
      <h1 className="font-extrabold uppercase text-center pb-5">
        List of all data{" "}
      </h1>
      <div className="flex flex-row pb-3 justify-around">
        <button
          className=" bg-sky-700 p-3   rounded-lg  hover:bg-sky-600 transition-all duration-500"
          onClick={handleClick}
        >
          Next
        </button>
        <button
          className="uppercase  bg-sky-700 p-3   rounded-lg  hover:bg-sky-600  transition-all duration-500"
          onClick={handleClickPrev}
        >
          Prev
        </button>
      </div>
      <div
        className=" bg-slate-300 rounded-2xl w-full text-black
      flex flex-col sm:flex-row"
      >
        <div className=" pb-8 pt-5 sm:p-5   md:p-8 text-center sm:w-2/3    ">
          <blockquote>
            <p className="text-lg font-medium">“{sculpture.description}.”</p>
          </blockquote>

          <figcaption className="font-medium">
            <div className="text-sky-600 ">{sculpture.name}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {sculpture.artist}
            </div>
          </figcaption>
        </div>
        <div className=" sm:w-1/3 ">
          <img
            className="w-full h-full  md:rounded-none"
            src={sculpture.url}
            alt={sculpture.alt}
          />
        </div>
      </div>{" "}
      <h3>
        ({gal + 1} of {sculptureList.length})
      </h3>
    </div>
  );
}
