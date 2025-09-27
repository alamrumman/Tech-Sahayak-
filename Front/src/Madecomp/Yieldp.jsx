import React, { useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

// All 30 districts of Odisha
const ODISHA_DISTRICTS = [
  "Angul",
  "Balangir",
  "Balasore",
  "Bargarh",
  "Bhadrak",
  "Boudh",
  "Cuttack",
  "Deogarh",
  "Dhenkanal",
  "Gajapati",
  "Ganjam",
  "Jagatsinghpur",
  "Jajpur",
  "Jharsuguda",
  "Kalahandi",
  "Kandhamal",
  "Kendrapara",
  "Kendujhar",
  "Khordha",
  "Koraput",
  "Malkangiri",
  "Mayurbhanj",
  "Nabarangpur",
  "Nayagarh",
  "Nuapada",
  "Puri",
  "Rayagada",
  "Sambalpur",
  "Subarnapur",
  "Sundargarh",
].sort(); // Alphabetically sorted

function Yieldp() {
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    // You can add API call here to fetch data based on selected district
    console.log("Selected district:", event.target.value);
  };

  return (
    <section className="w-full h-screen bg-zinc-50 p-3">
      <div
        className="p-5 rounded-4xl bg-cover bg-center bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `url('/images/fields-bali-are-photographed-from-drone.jpg')`,
        }}
      >
        <Navbar />
        <div className="mt-10 h-100 p-5">
          <select
            value={selectedDistrict}
            onChange={handleDistrictChange}
            className="select select-success bg-zinc-100 text-black w-full max-w-xs"
          >
            <div className="h-50">
              <option className="" value="" disabled>
                Select a District
              </option>
              {ODISHA_DISTRICTS.map((district) => (
                <option className="" key={district} value={district}>
                  {district}
                </option>
              ))}
            </div>
          </select>

          {/* Display selected district */}
          {selectedDistrict && (
            <div className="mt-4 p-3 bg-white/80 rounded-lg">
              <p className="text-lg font-semibold text-green-700">
                Selected: {selectedDistrict}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Yieldp;
