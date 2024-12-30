import React, { useState, useEffect } from "react";
import { Pause, Square, Activity, X } from "lucide-react";

const VrHud = () => {
  const [gazePosition, setGazePosition] = useState({ x: 50, y: 50 });
  const [sudValue, setSudValue] = useState(0);
  const [hoveredControl, setHoveredControl] = useState(null);
  const [fillProgress, setFillProgress] = useState(0);

  const controls = [
    { id: "pause", icon: Pause, label: "Pause Session" },
    { id: "stop", icon: Square, label: "End Session" },
    { id: "progress", icon: Activity, label: "View Progress" },
    { id: "close", icon: X, label: "Close Menu" },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setGazePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (hoveredControl) {
      const timer = setInterval(() => {
        setFillProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 2;
        });
      }, 20);
      return () => clearInterval(timer);
    } else {
      setFillProgress(0);
    }
  }, [hoveredControl]);

  const handleControlClick = (id) => {
    console.log(`Control ${id} activated`);
    // Add control-specific logic here
  };

  return (
    <div className="fixed inset-0 pointer-events-none select-none">
      {/* Gaze reticle */}
      <div
        className="fixed w-8 h-8 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
        style={{
          left: `${gazePosition.x}%`,
          top: `${gazePosition.y}%`,
          opacity: 0.6,
        }}
      >
        <div className="absolute inset-2 bg-white rounded-full opacity-30" />
      </div>

      {/* Control panel */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-4 pointer-events-auto">
        <div className="space-y-6">
          {controls.map(({ id, icon: Icon, label }) => (
            <div
              key={id}
              className="relative"
              onMouseEnter={() => setHoveredControl(id)}
              onMouseLeave={() => setHoveredControl(null)}
              onClick={() => handleControlClick(id)}
            >
              <button className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center hover:bg-opacity-30 transition-all">
                <Icon className="text-white" size={24} />
                {hoveredControl === id && (
                  <div
                    className="absolute inset-0 rounded-xl border-2 border-white"
                    style={{
                      clipPath: `circle(${fillProgress}% at 50% 50%)`,
                    }}
                  />
                )}
              </button>
              <span className="absolute left-full ml-4 text-white text-sm whitespace-nowrap opacity-60">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* SUD Slider */}
        <div className="mt-8 px-2">
          <input
            type="range"
            min="0"
            max="100"
            value={sudValue}
            onChange={(e) => setSudValue(e.target.value)}
            className="w-full appearance-none bg-white bg-opacity-20 h-1 rounded-full"
          />
          <div className="flex justify-between mt-2 text-white text-xs opacity-60">
            <span>0</span>
            <span>SUD</span>
            <span>100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VrHud;
