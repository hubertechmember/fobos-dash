import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, ArrowRight } from "lucide-react";

const mockProgressData = [
  { session: 1, preAnxiety: 80, postAnxiety: 65 },
  { session: 2, preAnxiety: 75, postAnxiety: 55 },
  { session: 3, preAnxiety: 70, postAnxiety: 45 },
  { session: 4, preAnxiety: 60, postAnxiety: 35 },
];

const ExposureFeedback = () => {
  const [preAnxiety, setPreAnxiety] = useState(50);
  const [postAnxiety, setPostAnxiety] = useState(30);

  return (
    <div className="py-12 px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold text-gray-800">Session Feedback</h2>

        {/* Anxiety Sliders */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="block text-gray-700 font-medium">
              Pre-Exposure Anxiety (SUD)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={preAnxiety}
              onChange={(e) => setPreAnxiety(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>0</span>
              <span>{preAnxiety}</span>
              <span>100</span>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-gray-700 font-medium">
              Post-Exposure Anxiety (SUD)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={postAnxiety}
              onChange={(e) => setPostAnxiety(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>0</span>
              <span>{postAnxiety}</span>
              <span>100</span>
            </div>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Progress Overview
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={mockProgressData}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="session" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="preAnxiety"
                  stroke="#f59e0b"
                  name="Pre-Exposure"
                />
                <Line
                  type="monotone"
                  dataKey="postAnxiety"
                  stroke="#10b981"
                  name="Post-Exposure"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-teal-600" />
            <h3 className="text-lg font-medium text-gray-800">
              WAT Recommendations
            </h3>
          </div>

          <div className="space-y-4">
            {postAnxiety < preAnxiety * 0.7 ? (
              <div className="flex items-center gap-4 text-green-700 bg-green-50 p-4 rounded-lg">
                <ArrowRight />
                <p>
                  Great progress! Consider increasing the challenge level in
                  your next session.
                </p>
              </div>
            ) : postAnxiety > preAnxiety * 0.9 ? (
              <div className="flex items-center gap-4 text-amber-700 bg-amber-50 p-4 rounded-lg">
                <ArrowRight />
                <p>
                  The exposure might be too challenging. Try reducing the
                  intensity for better progress.
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-4 text-blue-700 bg-blue-50 p-4 rounded-lg">
                <ArrowRight />
                <p>Good session! Continue at this level to build confidence.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExposureFeedback;
