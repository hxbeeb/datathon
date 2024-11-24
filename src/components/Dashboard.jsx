import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"; // Adjust the import path based on your project structure
import LearningPathCard from "./LearningPathCard"; // Adjust the import path as needed

const Dashboard = () => {
  const location = useLocation();
  const incorrectFabrics = location.state?.incorrectFabrics || [];

  // Full list of fabrics
  const fabrics = [
    { name: "Wool", type: "Natural Fiber", durability: "High", progress: 20 },
    { name: "Cashmere", type: "Natural Fiber", durability: "Moderate", progress: 50 },
    { name: "Cotton", type: "Natural Fiber", durability: "Moderate", progress: 80 },
    { name: "Silk", type: "Natural Fiber", durability: "Low", progress: 0 },
    { name: "Polyester", type: "Synthetic Fiber", durability: "High", progress: 60 },
    { name: "Linen", type: "Natural Fiber", durability: "High", progress: 40 },
    { name: "Hemp", type: "Natural Fiber", durability: "High", progress: 30 },
    { name: "Nylon", type: "Synthetic Fiber", durability: "Moderate", progress: 70 },
    { name: "Acrylic", type: "Synthetic Fiber", durability: "Low", progress: 50 },
    { name: "Spandex", type: "Synthetic Fiber", durability: "Moderate", progress: 90 },
    { name: "Rayon", type: "Semi-Synthetic Fiber", durability: "Low", progress: 25 },
    { name: "Bamboo", type: "Natural Fiber", durability: "Moderate", progress: 55 },
    { name: "Modal", type: "Semi-Synthetic Fiber", durability: "Moderate", progress: 65 },
    { name: "Tencel", type: "Semi-Synthetic Fiber", durability: "High", progress: 75 },
    { name: "Acetate", type: "Semi-Synthetic Fiber", durability: "Low", progress: 35 },
    { name: "Viscose", type: "Semi-Synthetic Fiber", durability: "Moderate", progress: 45 },
    { name: "Polypropylene", type: "Synthetic Fiber", durability: "High", progress: 85 },
    { name: "Elastane", type: "Synthetic Fiber", durability: "High", progress: 95 },
    { name: "Fleece", type: "Synthetic Fiber", durability: "High", progress: 60 },
    { name: "Jute", type: "Natural Fiber", durability: "High", progress: 20 },
  ];
  

  // Filter fabrics based on incorrect answers
  const filteredFabrics = fabrics.filter((fabric) =>
    incorrectFabrics.includes(fabric.name)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b bg-red-100">
      <Navbar /> {/* Render the imported Navbar */}
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold text-black text-center mb-8">
          Fabric Learning Paths
        </h1>
        {filteredFabrics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFabrics.map((fabric, index) => (
              <div
                key={index}
                className="bg-pink-500 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              >
                <h2 className="text-xl font-bold text-black">{fabric.name}</h2>
                <p className="text-black">Type: {fabric.type}</p>
                <p className="text-black">Durability: {fabric.durability}</p>
                
                {/* Progress Bar */}
                <div className="relative w-full h-4 bg-gray-300 rounded-full mt-4">
                  <div
                    className="absolute top-0 left-0 h-full bg-purple-700 rounded-full"
                    style={{ width: `${fabric.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-black mt-2">
                  Progress: {fabric.progress}%
                </p>

                {/* Action Button */}
                <button
                  className={`mt-4 px-4 py-2 font-semibold rounded-lg ${
                    fabric.progress === 0
                      ? "bg-green-500 hover:bg-green-700 text-white"
                      : "bg-yellow-500 hover:bg-yellow-700 text-white"
                  }`}
                >
                  {fabric.progress === 0 ? "Start" : "Resume"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-black">
            You have no fabrics to review. Great job!
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

