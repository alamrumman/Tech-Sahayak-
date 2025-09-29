import { AlertTriangle, CheckCircle } from "lucide-react";

const MetricCard = ({
  title,
  value,
  unit,
  status,
  currentValue,
  optimalRange,
  scaleMax,
}) => {
  const isOptimal = status === "Optimal";
  const progressPercentage = (currentValue / scaleMax) * 100;
  const optimalStartPercentage = (optimalRange[0] / scaleMax) * 100;
  const optimalWidthPercentage =
    ((optimalRange[1] - optimalRange[0]) / scaleMax) * 100;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <span
          className={`px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1.5 ${
            isOptimal
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isOptimal ? <CheckCircle size={14} /> : <AlertTriangle size={14} />}
          {status}
        </span>
      </div>
      <div>
        <p className="text-4xl font-bold text-gray-800">
          {value}{" "}
          <span className="text-xl font-medium text-gray-500">{unit}</span>
        </p>
      </div>
      <div className="w-full mt-2">
        <div className="h-2.5 w-full bg-gray-200 rounded-full relative">
          <div
            className="absolute h-full bg-green-200 rounded-full"
            style={{
              left: `${optimalStartPercentage}%`,
              width: `${optimalWidthPercentage}%`,
            }}
          ></div>
          <div
            className="absolute h-full bg-slate-700 rounded-l-full"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-right">
          Optimal range: {optimalRange[0]} - {optimalRange[1]} {unit}
        </p>
      </div>
    </div>
  );
};

export default MetricCard;
