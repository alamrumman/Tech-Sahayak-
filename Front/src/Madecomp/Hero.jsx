import React from "react";
import Navbar from "./Navbar";
function Hero() {
  return (
    <section className="w-full h-screen bg-zinc-50 p-3">
      <div
        className="p-7 rounded-4xl bg-cover bg-center bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `url('/images/fields-bali-are-photographed-from-drone.jpg')`,
        }}
      >
        <Navbar />
        <div>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
