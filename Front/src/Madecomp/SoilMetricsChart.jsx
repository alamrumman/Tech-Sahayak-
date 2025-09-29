import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SoilMetricsChart = ({ data }) => {
  const chartData = [
    { name: "pH", "Current Value": data.ph, "Optimal Value": 6.8 }, // Example optimal
    { name: "Nitrogen", "Current Value": data.nitrogen, "Optimal Value": 250 },
    {
      name: "Phosphorus",
      "Current Value": data.phosphorus,
      "Optimal Value": 37.5,
    },
    {
      name: "Potassium",
      "Current Value": data.potassium,
      "Optimal Value": 200,
    },
    { name: "Organic Matter", "Current Value": 0, "Optimal Value": 0 }, // Placeholder
  ];

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex justify-center items-center gap-4 mt-4">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <div
              className="w-3 h-3"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-sm text-gray-600">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-700">
        Soil Metrics Overview
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Visual representation of your soil health metrics
      </p>
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#9ca3af" />
            <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
              }}
            />
            <Legend content={renderLegend} />
            <Bar dataKey="Current Value" fill="#1e293b" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Optimal Value" fill="#a1a1aa" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SoilMetricsChart;
