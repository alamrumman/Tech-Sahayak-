import { Circle } from "lucide-react";

const OverallHealthCard = () => {
  const healthPoints = [
    "Your soil shows good overall health with balanced nutrient levels.",
    "pH levels are within the optimal range for most crops.",
    "Organic matter content supports healthy soil structure.",
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Overall Soil Health
      </h3>
      <ul className="space-y-3">
        {healthPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <Circle
              className="text-green-500 mt-1"
              fill="currentColor"
              size={12}
            />
            <span className="text-gray-600 text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverallHealthCard;
