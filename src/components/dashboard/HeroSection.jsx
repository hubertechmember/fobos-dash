import React from "react";
import { Monitor } from "lucide-react";

const HeroSection = () => {
  const userName = "Sarah";

  return (
    <div className="relative w-full bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome back, {userName}!
          </h1>
          <p className="text-xl text-gray-600">
            Ready to tackle your next VR therapy session?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
              Continue Last Session
            </button>
            <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium border-2 border-teal-600 hover:bg-teal-50 transition-colors">
              Explore Scenarios
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-64 h-64 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center">
            <Monitor size={96} className="text-teal-600" />
            <div className="absolute w-32 h-32 bg-teal-50 rounded-full -top-4 -right-4 z-0" />
            <div className="absolute w-24 h-24 bg-blue-50 rounded-full bottom-0 -left-4 z-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
