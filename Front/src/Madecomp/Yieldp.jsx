import React, { useState } from "react";
import Navbar from "./Navbar";

import { TrendingUp, ArrowUp, ArrowDown } from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
].sort();

const ODISHA_CROPS = [
  "Rice",
  "Wheat",
  "Maize",
  "Sugarcane",
  "Groundnut",
  "Moong",
  "Lentil",
  "Potato",
  "Onion",
  "Tomato",
];

function Yieldp() {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");

  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
  const handleCropChange = (e) => setSelectedCrop(e.target.value);

  const yieldData =
    selectedDistrict === "Angul" && selectedCrop === "Rice"
      ? [
          { year: "2019", yield: 2500 },
          { year: "2020", yield: 2600 },
          { year: "2021", yield: 2550 },
          { year: "2022", yield: 2650 },
          { year: "2023", yield: 2700 },
          { year: "2024", yield: 2750 },
          { year: "Predicted", yield: 3000 },
        ]
      : [];

  const avgYield =
    yieldData.length > 1
      ? Math.round(
          yieldData
            .slice(0, -1)
            .reduce((sum, d) => sum + d.yield, 0) / (yieldData.length - 1)
        )
      : 0;
  const highestYield =
    yieldData.length > 1
      ? Math.max(...yieldData.slice(0, -1).map((d) => d.yield))
      : 0;
  const increaseSince2019 =
    yieldData.length > 1 ? yieldData[yieldData.length - 2].yield - yieldData[0].yield : 0;

  return (
    <section className="w-full h-screen bg-zinc-50 p-3">
      <div
        className="p-5 rounded-4xl bg-cover bg-center bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `url('/images/fields-bali-are-photographed-from-drone.jpg')`,
        }}
      >
        <Navbar />
        <div className="mt-10 flex gap-6 h-[85%]">
          {/* Left Side: Inputs + Insights + Table */}
          <div className="w-1/2 bg-white/90 p-4 rounded-xl shadow-lg overflow-y-auto flex flex-col gap-4">
            <h2 className="text-lg font-bold mb-2">Historical Yield Data</h2>

            {/* District + Crop Inputs */}
            <select
              value={selectedDistrict}
              onChange={handleDistrictChange}
              className="select select-success bg-zinc-100 text-black w-full mb-2"
            >
              <option value="" disabled>
                Select District
              </option>
              {ODISHA_DISTRICTS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <select
              value={selectedCrop}
              onChange={handleCropChange}
              className="select select-success bg-zinc-100 text-black w-full mb-4"
            >
              <option value="" disabled>
                Select Crop
              </option>
              {ODISHA_CROPS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {selectedDistrict && selectedCrop && yieldData.length > 0 && (
              <>
                {/* Insights Cards */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg shadow flex flex-col items-start">
                    <span className="text-xs text-green-700 font-semibold">
                      Average Yield
                    </span>
                    <span className="text-xl font-bold text-green-900">
                      {avgYield} kg/ha
                    </span>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg shadow flex flex-col items-start">
                    <span className="text-xs text-blue-700 font-semibold">
                      Highest Yield
                    </span>
                    <span className="text-xl font-bold text-blue-900">
                      {highestYield} kg/ha
                    </span>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded-lg shadow flex flex-col items-start">
                    <span className="text-xs text-yellow-700 font-semibold">
                      Increase Since 2019
                    </span>
                    <span className="text-xl font-bold text-yellow-900 flex items-center gap-1">
                      {increaseSince2019} kg/ha{" "}
                      {increaseSince2019 > 0 ? (
                        <ArrowUp className="h-4 w-4 text-green-600" />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-red-600" />
                      )}
                    </span>
                  </div>

                  <div className="bg-purple-50 p-3 rounded-lg shadow flex flex-col items-start">
                    <span className="text-xs text-purple-700 font-semibold">
                      Predicted Yield 2025
                    </span>
                    <span className="text-xl font-bold text-purple-900">
                      {yieldData[yieldData.length - 1].yield} kg/ha
                    </span>
                  </div>
                </div>

                {/* Mini Sparkline */}
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-700">
                    Yield Trend
                  </span>
                  <LineChart width={250} height={100} data={yieldData}>
                    <Line
                      type="monotone"
                      dataKey="yield"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </div>

                {/* Historical Data Table */}
                <div>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="border-b px-2 py-1">Year</th>
                        <th className="border-b px-2 py-1">Yield (kg/ha)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yieldData.map((row, idx) => (
                        <tr
                          key={idx}
                          className={
                            row.year === "Predicted"
                              ? "font-semibold bg-green-50"
                              : ""
                          }
                        >
                          <td className="border-b px-2 py-1">{row.year}</td>
                          <td className="border-b px-2 py-1">{row.yield}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>

          {/* Right Side: Chart */}
          <div className="w-1/2 bg-white p-4 rounded-xl shadow-lg flex flex-col justify-center">
            {yieldData.length > 0 && (
              <Card className="w-full h-full">
                <CardHeader>
                  <CardTitle className="text-black">
                    {selectedCrop} Yield - {selectedDistrict}
                  </CardTitle>
                  <CardDescription className="text-black">
                    2019 - Predicted 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={yieldData}
                      margin={{ top: 30, left: 20, right: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="yield"
                        stroke="#22c55e"
                        strokeWidth={3}
                        dot={{ r: 6 }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
                <CardFooter className="flex flex-col gap-1 text-sm">
                  <div className="flex items-center gap-1 font-medium text-black">
                    Predicted yield: {yieldData[yieldData.length - 1].yield} kg/ha{" "}
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-muted-foreground text-xs text-zinc-950">
                    Historical yields 2019-2024
                  </div>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Yieldp;
