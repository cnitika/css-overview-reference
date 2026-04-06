import { useState } from "react";

/**
 * TransformDemos Component
 * Provides interactive animated demonstrations for all Transforms & Transitions concepts
 * Includes: transforms, transitions, blend modes, animations, and responsive effects
 */

export function TranslateDemo() {
  const [isAnimating, setIsAnimating] = useState(true);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-slate-800">Translate Transform</h4>
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
        >
          {isAnimating ? "Pause" : "Play"}
        </button>
      </div>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-center overflow-hidden">
        <div
          className={`w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg ${
            isAnimating ? "animate-pulse" : ""
          }`}
          style={{
            transform: isAnimating ? "translateX(100px)" : "translateX(0)",
            transition: isAnimating ? "transform 2s ease-in-out infinite" : "none",
          }}
        />
      </div>
      <p className="text-sm text-slate-600">
        The box moves horizontally using <code className="bg-slate-200 px-1 rounded">translateX()</code>
      </p>
    </div>
  );
}

export function RotateDemo() {
  const [isAnimating, setIsAnimating] = useState(true);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-slate-800">Rotate Transform</h4>
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
        >
          {isAnimating ? "Pause" : "Play"}
        </button>
      </div>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-center">
        <div
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
          style={{
            transform: isAnimating ? "rotate(360deg)" : "rotate(0deg)",
            transition: isAnimating ? "transform 3s linear infinite" : "none",
          }}
        >
          ↻
        </div>
      </div>
      <p className="text-sm text-slate-600">
        The box rotates 360 degrees using <code className="bg-slate-200 px-1 rounded">rotate()</code>
      </p>
    </div>
  );
}

export function ScaleDemo() {
  const [isAnimating, setIsAnimating] = useState(true);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-slate-800">Scale Transform</h4>
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
        >
          {isAnimating ? "Pause" : "Play"}
        </button>
      </div>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-center">
        <div
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg"
          style={{
            transform: isAnimating ? "scale(1.5)" : "scale(1)",
            transition: isAnimating ? "transform 1.5s ease-in-out infinite" : "none",
          }}
        />
      </div>
      <p className="text-sm text-slate-600">
        The box grows and shrinks using <code className="bg-slate-200 px-1 rounded">scale()</code>
      </p>
    </div>
  );
}

export function SkewDemo() {
  const [isAnimating, setIsAnimating] = useState(true);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-slate-800">Skew Transform</h4>
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
        >
          {isAnimating ? "Pause" : "Play"}
        </button>
      </div>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-center">
        <div
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg"
          style={{
            transform: isAnimating ? "skew(20deg, 10deg)" : "skew(0deg, 0deg)",
            transition: isAnimating ? "transform 1.5s ease-in-out infinite" : "none",
          }}
        />
      </div>
      <p className="text-sm text-slate-600">
        The box skews using <code className="bg-slate-200 px-1 rounded">skew()</code>
      </p>
    </div>
  );
}

export function Perspective3DDemo() {
  const [isAnimating, setIsAnimating] = useState(true);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-slate-800">3D Perspective Transform</h4>
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
        >
          {isAnimating ? "Pause" : "Play"}
        </button>
      </div>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-center" style={{ perspective: "1000px" }}>
        <div
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg"
          style={{
            transform: isAnimating ? "rotateX(45deg) rotateY(45deg)" : "rotateX(0deg) rotateY(0deg)",
            transition: isAnimating ? "transform 2s ease-in-out infinite" : "none",
            transformStyle: "preserve-3d",
          }}
        />
      </div>
      <p className="text-sm text-slate-600">
        The box rotates in 3D space using <code className="bg-slate-200 px-1 rounded">rotateX/rotateY</code>
      </p>
    </div>
  );
}

export function TransitionDemo() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-slate-800">Smooth Transition on Hover</h4>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-center">
        <div
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: isHovered ? "#3b82f6" : "#fbbf24",
            transform: isHovered ? "scale(1.3) rotate(10deg)" : "scale(1) rotate(0deg)",
            transition: "all 0.5s ease-in-out",
          }}
        />
      </div>
      <p className="text-sm text-slate-600">
        Hover over the box to see smooth color, scale, and rotation changes with <code className="bg-slate-200 px-1 rounded">transition</code>
      </p>
    </div>
  );
}

export function BlendModeDemo() {
  const blendModes = ["multiply", "screen", "overlay", "darken", "lighten"];
  const [selectedMode, setSelectedMode] = useState("multiply");

  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-slate-800 mb-3">Blend Modes</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {blendModes.map((mode) => (
            <button
              key={mode}
              onClick={() => setSelectedMode(mode)}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                selectedMode === mode
                  ? "bg-yellow-600 text-white"
                  : "bg-slate-300 text-slate-800 hover:bg-slate-400"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-center relative overflow-hidden">
        <div className="absolute w-24 h-24 bg-red-500 rounded-full opacity-70" />
        <div
          className="absolute w-24 h-24 bg-blue-500 rounded-full opacity-70"
          style={{
            mixBlendMode: selectedMode as any,
            transform: "translateX(30px) translateY(20px)",
          }}
        />
      </div>
      <p className="text-sm text-slate-600">
        The blue circle blends with the red circle using <code className="bg-slate-200 px-1 rounded">mix-blend-mode: {selectedMode}</code>
      </p>
    </div>
  );
}

export function KeyframeAnimationDemo() {
  const [isAnimating, setIsAnimating] = useState(true);

  const bounceKeyframes = `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-30px); }
    }
  `;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-slate-800">Keyframe Animation (Bounce)</h4>
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
        >
          {isAnimating ? "Pause" : "Play"}
        </button>
      </div>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-center">
        <div
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg"
          style={{
            animation: isAnimating ? "bounce 1s ease-in-out infinite" : "none",
          }}
        />
      </div>
      <style>{bounceKeyframes}</style>
      <p className="text-sm text-slate-600">
        The box bounces using <code className="bg-slate-200 px-1 rounded">@keyframes</code> animation
      </p>
    </div>
  );
}

export function PulseAnimationDemo() {
  const [isAnimating, setIsAnimating] = useState(true);

  const pulseKeyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-slate-800">Pulse Animation</h4>
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
        >
          {isAnimating ? "Pause" : "Play"}
        </button>
      </div>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-center">
        <div
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg"
          style={{
            animation: isAnimating ? "pulse 2s ease-in-out infinite" : "none",
          }}
        />
      </div>
      <style>{pulseKeyframes}</style>
      <p className="text-sm text-slate-600">
        The box fades in and out using <code className="bg-slate-200 px-1 rounded">opacity</code> animation
      </p>
    </div>
  );
}

export function SlideInAnimationDemo() {
  const [isAnimating, setIsAnimating] = useState(true);

  const slideInKeyframes = `
    @keyframes slideIn {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-slate-800">Slide In Animation</h4>
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
        >
          {isAnimating ? "Restart" : "Play"}
        </button>
      </div>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-center overflow-hidden">
        <div
          key={isAnimating ? "animating" : "stopped"}
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg"
          style={{
            animation: "slideIn 1s ease-out forwards",
          }}
        />
      </div>
      <style>{slideInKeyframes}</style>
      <p className="text-sm text-slate-600">
        The box slides in from the left using <code className="bg-slate-200 px-1 rounded">@keyframes slideIn</code>
      </p>
    </div>
  );
}

export function TimingFunctionDemo() {
  const timingFunctions = ["ease", "linear", "ease-in", "ease-out", "ease-in-out"];
  const [selectedTiming, setSelectedTiming] = useState("ease");

  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold text-slate-800 mb-3">Timing Functions</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {timingFunctions.map((timing) => (
            <button
              key={timing}
              onClick={() => setSelectedTiming(timing)}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                selectedTiming === timing
                  ? "bg-yellow-600 text-white"
                  : "bg-slate-300 text-slate-800 hover:bg-slate-400"
              }`}
            >
              {timing}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-start overflow-hidden">
        <div
          key={selectedTiming}
          className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg"
          style={{
            animation: `slideRight 2s ${selectedTiming} infinite`,
          }}
        />
      </div>
      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(0); }
          50% { transform: translateX(200px); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <p className="text-sm text-slate-600">
        The box moves with <code className="bg-slate-200 px-1 rounded">{selectedTiming}</code> timing function
      </p>
    </div>
  );
}

export function CombinedTransformDemo() {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-slate-800">Combined Transforms</h4>
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
        >
          {isAnimating ? "Pause" : "Play"}
        </button>
      </div>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-center">
        <div
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg"
          style={{
            transform: isAnimating
              ? "translateX(50px) rotate(45deg) scale(1.2)"
              : "translateX(0) rotate(0deg) scale(1)",
            transition: isAnimating ? "transform 2s ease-in-out infinite" : "none",
          }}
        />
      </div>
      <p className="text-sm text-slate-600">
        The box combines <code className="bg-slate-200 px-1 rounded">translate</code>, <code className="bg-slate-200 px-1 rounded">rotate</code>, and <code className="bg-slate-200 px-1 rounded">scale</code>
      </p>
    </div>
  );
}

export function ResponsiveAnimationDemo() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-slate-800">Responsive Animation</h4>
      <div className="bg-slate-100 p-8 rounded-lg h-32 flex items-center justify-center">
        <div
          className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg"
          style={{
            animation: "bounce 1s ease-in-out infinite",
          }}
        />
      </div>
      <style>{`
        @media (max-width: 768px) {
          @keyframes bounce {
            0%, 100% { transform: translateY(0) scale(0.8); }
            50% { transform: translateY(-15px) scale(0.8); }
          }
        }
        @media (min-width: 769px) {
          @keyframes bounce {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-30px) scale(1); }
          }
        }
      `}</style>
      <p className="text-sm text-slate-600">
        Animation scales based on screen size using <code className="bg-slate-200 px-1 rounded">@media</code> queries
      </p>
    </div>
  );
}
