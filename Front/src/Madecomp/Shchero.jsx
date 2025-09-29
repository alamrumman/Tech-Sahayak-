import { ArrowLeft } from "lucide-react";
import MetricCard from "./MetricCard";
import Navbar from "./Navbar";
import SoilMetricsChart from "./SoilMetricsChart";
import OverallHealthCard from "./OverallHealthCard";

// You would typically fetch this data from an API
const soilData = {
  ph: 7.3,
  nitrogen: 480,
  phosphorus: 9.63,
  potassium: 201,
};

const SoilAnalysisDashboard = () => {
  return (
    <section className="w-full min-h-screen bg-zinc-50 p-2 sm:p-3">
      <div
        className="p-5 sm:p-5 rounded-2xl sm:rounded-4xl bg-cover bg-center w-full min-h-full"
        style={{
          backgroundImage: `url('/images/fields-bali-are-photographed-from-drone.jpg')`,
        }}
      >
        <Navbar />
        {/* Wrapper for content, removed bg-gray-50 to show the background image */}
        <div className="p-4 sm:p-6 lg:p-8 font-sans">
          <div className="max-w-7xl mx-auto">
            {/* Header - Text color changed to white for readability on background image */}
            <header className="mb-8">
              <button className="flex items-center gap-2 text-zinc-200 hover:text-white mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                <ArrowLeft size={20} />
                Back
              </button>
              <h1 className="text-3xl font-bold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                Soil Analysis Results
              </h1>
              <p className="text-sm text-zinc-300 mt-1 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                Screenshot (13).png • Analyzed on 9/29/2025
              </p>
            </header>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* === CODE UPDATED IN THIS SECTION === */}
              {/* Column 1 & 2 for metrics, now with the new layout */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* pH Card - takes full height of its column */}
                <MetricCard
                  title="pH Level"
                  value={soilData.ph.toString()}
                  unit=""
                  status="Optimal"
                  currentValue={soilData.ph}
                  optimalRange={[6.0, 7.5]}
                  scaleMax={14}
                />

                {/* N, P, K Cards - stacked vertically in the second column */}
                <div className="flex flex-col gap-6">
                  <MetricCard
                    title="Nitrogen (N)"
                    value={soilData.nitrogen.toString()}
                    unit="kg/ha"
                    status="Needs Attention"
                    currentValue={soilData.nitrogen}
                    optimalRange={[200, 300]}
                    scaleMax={500}
                    size="compact" // <-- New size prop
                  />
                  <MetricCard
                    title="Phosphorus (P)"
                    value={soilData.phosphorus.toString()}
                    unit="kg/ha"
                    status="Needs Attention"
                    currentValue={soilData.phosphorus}
                    optimalRange={[25, 50]}
                    scaleMax={60}
                    size="compact" // <-- New size prop
                  />
                  <MetricCard
                    title="Potassium (K)"
                    value={soilData.potassium.toString()}
                    unit="kg/ha"
                    status="Optimal"
                    currentValue={soilData.potassium}
                    optimalRange={[150, 250]}
                    scaleMax={300}
                    size="compact" // <-- New size prop
                  />
                </div>
              </div>
              {/* === END OF UPDATED SECTION === */}

              {/* Column 3 */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                <SoilMetricsChart data={soilData} />
                <OverallHealthCard />
              </div>
            </div>
          </div>
        </div>
        <a href="/Shcrecommendation">
          <div className="flex items-center justify-center ">
            <button className="bg-green-600 text-white p-5 rounded-2xl text-semibold text-xl">
              Get recommendation
            </button>
          </div>
        </a>
      </div>
    </section>
  );
};

export default SoilAnalysisDashboard;
