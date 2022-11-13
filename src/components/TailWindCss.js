import React from "react";
import ImgLogo from "../img/logo512.png";

export const TailWindCss = () => {
  return (
    <div>
      {/* First Element */}
      <div class="md:flex   max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src={ImgLogo}
            alt="Modern building architecture"
          />
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Company retreats
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Incredible accomodation for your team
          </p>
          <p class="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
      {/* Second elemnt */}
      <div
        className=" bg-slate-600  mt-5  p-1          
        md:flex 
        max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl
        m-auto 
        rounded-lg "
      >
        <img
          src={ImgLogo}
          alt="Nothing Here"
          className=" md:max-w-md  
          object-cover 
          w-44 
          h-32 sm:h-32 
          m-auto "
        />
        <div className=" ">
          <h2 className=" text-slate-50 uppercase underline text-center pt-7 md:pt-5 ">
            My First
          </h2>
          <p className=" text-slate-300  text-center">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
      {/* Third Element  */}
    </div>
  );
};
