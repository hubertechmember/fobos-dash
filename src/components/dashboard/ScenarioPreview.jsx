import React, { useState } from "react";
import { Search, BookmarkPlus, Share2, Clock, Star } from "lucide-react";

const scenarios = [
  {
    id: 1,
    title: "Café Order Simulation",
    description:
      "Practice ordering at a busy café with background chatter and queue management",
    difficulty: "Beginner",
    duration: "15 min",
    thumbnail: "/api/placeholder/400/300",
  },
  {
    id: 2,
    title: "Public Transport Navigation",
    description: "Navigate a crowded subway station during rush hour",
    difficulty: "Intermediate",
    duration: "20 min",
    thumbnail: "/api/placeholder/400/300",
  },
];

const ScenarioPreview = () => {
  const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="py-12 px-8">
      {/* Search and Filter Bar */}
      <div className="mb-8">
        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search scenarios..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>All Difficulties</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <select className="border border-gray-200 rounded-lg px-4 py-2">
            <option>All Durations</option>
            <option>0-15 min</option>
            <option>15-30 min</option>
            <option>30+ min</option>
          </select>
        </div>
      </div>

      {/* Preview Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Thumbnail */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={selectedScenario.thumbnail}
            alt={selectedScenario.title}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedScenario.title}
            </h3>
            <p className="text-gray-600">{selectedScenario.description}</p>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-yellow-500" />
              <span className="text-gray-600">
                {selectedScenario.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-gray-400" />
              <span className="text-gray-600">{selectedScenario.duration}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
              Start Session
            </button>
            <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <BookmarkPlus size={20} className="text-gray-600" />
            </button>
            <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Scenario List */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedScenario.id === scenario.id
                ? "border-teal-500 bg-teal-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setSelectedScenario(scenario)}
          >
            <h4 className="font-medium text-gray-800">{scenario.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{scenario.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenarioPreview;
