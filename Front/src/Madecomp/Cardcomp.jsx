import React from "react";
import "./Cardcomp.css";
import { ImArrowUpRight2 } from "react-icons/im";
function Cardcomp() {
  return (
    <div class="relative w-[400px] h-[200px] ">
      <div class="inverted-radius w-full h-full bg-whitesmoke"></div>
      <div className="W-40 absolute top-0 p-2 flex">
        <img
          className="h-42 w-42 rounded-2xl mt-1 "
          src="images\Screenshot 2025-09-26 234950.png"
          alt=""
        />
        <div className="flex flex-col p-2">
          <label
            className="mt-10  text-green-700 font-semibold text-xl "
            htmlFor=""
          >
            Yeild predictor
          </label>
          <label className="tracking-tighter text-sm">
            Get to know your yeild today and take steps to enhance it
          </label>
          <a href="/yeildpredict">
            <button className="btn btn-outline btn-success mt-2 w-30">
              Check now!
            </button>
          </a>
        </div>
      </div>
      <div class="absolute top-[0.1px]  hover:scale-120 transition duration-350 right-[8px]">
        <button class="rounded-4xl bg-green-400 hover:bg-green-500 w-13 h-13 flex items-center justify-center cursor-pointer">
          <ImArrowUpRight2 className="transform " />
        </button>
      </div>
    </div>
  );
}

export default Cardcomp;
