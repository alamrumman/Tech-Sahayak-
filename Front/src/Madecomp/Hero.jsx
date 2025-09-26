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
    <section className="w-full h-screen bg-zinc-50 p-3">
      <div
        className="p-5 rounded-4xl bg-cover bg-center bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `url('/images/fields-bali-are-photographed-from-drone.jpg')`,
        }}
      >
        <Navbar />
        <div className="h-20 mt-12 bg-transparent w-120 font-semibold tracking-tight text-white text-2xl md:text-5xl ">
          Yield prediction using
          <FlipWords words={changingWords} />
          {/* 4. Render FlipWords for the changing part right after it */}
          {/* We add a space and specific styling to make it look like one sentence */}
        </div>

        <div className=" md:flex justify-center-safe  gap-20 text-black">
          <div className="mt-20 flex justify-end ">
            <Cardcomp />
          </div>
          <div>
            <SHCupload />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
