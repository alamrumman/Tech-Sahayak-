import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Cardcomp from "./Cardcomp";
import SHCupload from "./SHCupload";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { FlipWords } from "../components/ui/flip-words";
import axios from "axios";

function Hero() {
  // 1. Define words for the STATIC part of the sentence
  const staticWords = [
    { text: "Yield " },
    { text: " prediction" },
    { text: "using" },
  ];

  // 2. Define words for the DYNAMIC (flipping) part of the sentence
  const changingWords = [
    "Agricultural data",
    "Soil metrics",
    "Weather patterns",
  ];

  return (
    <section className="w-full h-screen bg-zinc-50 p-2 sm:p-3">
      <div
        className="p-5 sm:p-5 rounded-2xl sm:rounded-4xl bg-cover bg-center bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `url('/images/fields-bali-are-photographed-from-drone.jpg')`,
        }}
      >
        <Navbar />
        <div className="min-h-[80px] mt-8 sm:mt-12 bg-transparent max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl font-semibold tracking-tight text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
          Yield prediction using
          <FlipWords words={changingWords} />
          {/* 4. Render FlipWords for the changing part right after it */}
          {/* We add a space and specific styling to make it look like one sentence */}
        </div>

        <div className="flex flex-col md:flex-row md:justify-center md:items-end gap-8 sm:gap-12 md:gap-20 lg:gap-50 text-black mt-12 sm:mt-16 md:mt-10">
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <div className="scale-80 sm:scale-100 md:scale-120 ">
              <Cardcomp />
            </div>
          </div>
          <div className="flex justify-center w-full md:w-auto">
            <div className="scale-80 sm:scale-100 md:scale-120">
              <SHCupload />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
