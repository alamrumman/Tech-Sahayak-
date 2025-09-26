import React from "react";

function SHCupload() {
  return (
    <div className="bg-zinc-100 h-50 w-100 mt-20 rounded-3xl p-3 ">
      <div className="flex  ">
        <img className="h-42 w-42 rounded-2xl " src="images\sv.jpg" alt="" />
        <div className="p-2 flex-col">
          <label
            className="mt-10  text-green-700 font-semibold text-xl  "
            htmlFor=""
          >
            Personalized Crop Recommendation
          </label>
          <div>
            <label className="tracking-tighter text-sm" htmlFor="">
              Upload your SHC for soil health and yield recommendations.
            </label>
            <div className="py-2">
              <input
                type="file"
                className="file-input file-input-success bg-amber-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SHCupload;
