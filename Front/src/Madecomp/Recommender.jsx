import React from "react";
import { Leaf, Droplets, Clock, Calendar, CheckCircle } from "lucide-react";

// Data for the recommendation cards, based on the provided images
const recommendations = [
  {
    icon: <Leaf className="w-6 h-6 text-green-700" />,
    title: "Phosphorus Enhancement",
    timeframe: "At planting time",
    priority: "Medium",
    priorityColor: "bg-yellow-100 text-yellow-800",
    description:
      "Phosphorus levels are below optimal. Apply phosphate fertilizers to improve root development and flowering.",
    actionItems: [
      "Apply 60-80 kg/ha of single super phosphate",
      "Apply at planting time for best results",
      "Consider rock phosphate for long-term availability",
      "Ensure adequate soil moisture for uptake",
    ],
  },
  {
    icon: <Leaf className="w-6 h-6 text-green-700" />,
    title: "Organic Matter Enhancement",
    timeframe: "Before next season",
    priority: "Medium",
    priorityColor: "bg-yellow-100 text-yellow-800",
    description:
      "Low organic matter affects soil structure and water retention. Add compost and organic amendments.",
    actionItems: [
      "Apply 5-10 tons/ha of well-decomposed compost",
      "Incorporate crop residues after harvest",
      "Practice green manuring with leguminous crops",
      "Avoid excessive tillage to preserve organic matter",
    ],
  },
  {
    icon: <Calendar className="w-6 h-6 text-green-700" />,
    title: "Optimal Sowing Window",
    timeframe: "Next planting season",
    priority: "Medium",
    priorityColor: "bg-yellow-100 text-yellow-800",
    description:
      "Based on your soil conditions, here’s the recommended sowing schedule for maximum yield.",
    actionItems: [
      "Prepare seedbed 2-3 weeks before sowing",
      "Ensure soil moisture is at field capacity",
      "Apply basal fertilizers before sowing",
      "Use certified seeds for better germination",
    ],
  },
  {
    icon: <Droplets className="w-6 h-6 text-green-700" />,
    title: "Irrigation Management",
    timeframe: "Throughout growing season",
    priority: "Low",
    priorityColor: "bg-green-100 text-green-800",
    description:
      "Optimize water usage based on soil characteristics and crop requirements.",
    actionItems: [
      "Install drip irrigation for water efficiency",
      "Monitor soil moisture using sensors",
      "Apply mulch to reduce water evaporation",
      "Schedule irrigation during early morning or evening",
    ],
  },
];

// Reusable component for each recommendation card
const RecommendationCard = ({
  icon,
  title,
  timeframe,
  priority,
  priorityColor,
  description,
  actionItems,
}) => (
  <div className="bg-green-50/50 border border-green-200/60 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-4">
        <div className="bg-white p-2 rounded-full border border-green-200/80">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Clock className="w-4 h-4 mr-1.5" />
            <span>{timeframe}</span>
          </div>
        </div>
      </div>
      <span
        className={`px-3 py-1 text-xs font-medium rounded-full ${priorityColor}`}
      >
        {priority}
      </span>
    </div>
    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
    <div className="flex-grow">
      <h4 className="font-semibold text-gray-700 mb-2">Action Items:</h4>
      <ul className="space-y-2">
        {actionItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span className="text-sm text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <button className="mt-6 w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
      View Detailed Guide
    </button>
  </div>
);

// Main App component
export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-10">
          <div className="inline-block bg-green-100 p-4 rounded-full mb-4">
            <Leaf className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            AI Recommendations
          </h1>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
            Personalized recommendations based on your soil analysis to optimize
            crop yield and soil health
          </p>
        </header>

        {/* Recommendations Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <RecommendationCard key={index} {...rec} />
          ))}
        </main>
      </div>
    </div>
  );
}
