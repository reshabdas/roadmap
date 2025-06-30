import React from "react";

export interface RoadmapStep {
  icon: React.ReactNode;
  title: string;
  keywords: string;
}

export interface RoadmapVisualProps {
  title: string;
  subtitle: string;
  steps: RoadmapStep[];
  arrows?: [number, number][]; // connections between steps
}

const getGridPosition = (idx: number, columns: number) => {
  const row = Math.floor(idx / columns);
  const col = idx % columns;
  return { row, col };
};

const DotsBackground = () => (
  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
    <defs>
      <pattern
        id="dots"
        x="0"
        y="0"
        width="24"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="2" fill="#222" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
);

const WhiteArrow = ({
  direction = "right",
}: {
  direction?: "right" | "down";
}) =>
  direction === "right" ? (
    <svg
      width="48"
      height="24"
      viewBox="0 0 48 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-6 md:w-20 md:h-8"
    >
      <line
        x1="4"
        y1="12"
        x2="44"
        y2="12"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <polyline
        points="36,6 44,12 36,18"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="24"
      height="48"
      viewBox="0 0 24 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-12 md:w-8 md:h-20"
    >
      <line
        x1="12"
        y1="4"
        x2="12"
        y2="44"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <polyline
        points="6,36 12,44 18,36"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

const RoadmapVisual: React.FC<RoadmapVisualProps> = ({
  title,
  subtitle,
  steps,
  arrows,
}) => {
  const columns = 3;
  const rows = Math.ceil(steps.length / columns);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#111] py-4 px-1 relative overflow-x-auto">
      <DotsBackground />
      <div className="w-full max-w-4xl flex flex-col items-center justify-start p-2 md:p-8 relative z-10">
        {/* Two-line heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 text-center drop-shadow-lg leading-tight px-2 mb-0">
          {title}
        </h1>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg leading-tight px-2 mb-8">
          {subtitle}
        </h2>
        <div className="w-full flex flex-col items-center">
          {/* Always render the grid, scale down on mobile */}
          <div className="relative w-full flex justify-center">
            <div
              className="grid grid-cols-3 gap-x-10 gap-y-10 md:gap-x-24 md:gap-y-24 mt-4 relative transition-transform duration-300 transform scale-90 sm:scale-100"
              style={{ minHeight: rows * 120 }}
            >
              {steps.map((step, idx) => {
                const { row, col } = getGridPosition(idx, columns);
                return (
                  <div
                    key={idx}
                    className="relative flex flex-col items-center z-10"
                  >
                    <div className="mb-2 text-5xl md:text-7xl drop-shadow-lg">
                      {step.icon}
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 text-center leading-snug">
                      {step.title}
                    </div>
                    <div className="text-xs md:text-base text-white text-center whitespace-pre-line leading-snug">
                      {step.keywords}
                    </div>
                    {/* Draw arrows: right for same row, down for end of row */}
                    {arrows &&
                      arrows.some(
                        ([from, to]) =>
                          from === idx && to === idx + 1 && col < columns - 1,
                      ) && (
                        <div className="absolute right-[-32px] md:right-[-90px] top-1/2 transform -translate-y-1/2 z-0">
                          <WhiteArrow direction="right" />
                        </div>
                      )}
                    {arrows &&
                      arrows.some(
                        ([from, to]) =>
                          from === idx &&
                          to === idx + columns &&
                          row < rows - 1,
                      ) && (
                        <div className="absolute left-1/2 bottom-[-50px] md:bottom-[-90px] transform -translate-x-1/2 z-0">
                          <WhiteArrow direction="down" />
                        </div>
                      )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapVisual;
