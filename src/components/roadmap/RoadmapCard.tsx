import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Roadmap } from "../types";
import { categories } from "../../data/roadmaps";

interface RoadmapCardProps {
  roadmap: Roadmap;
}

export default function RoadmapCard({ roadmap }: RoadmapCardProps) {
  const IconComponent = (Icons as any)[roadmap.icon] || Icons.Code;
  const category = categories.find((c) => c.id === roadmap.category);

  const fromColor = category?.color.split(" ")[0] || "from-gray-500";
  const toColor = category?.color.split(" ")[1] || "to-gray-600";

  return (
    <motion.div
      className="group relative h-full bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-px bg-gradient-to-r ${fromColor} ${toColor} rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
        aria-hidden="true"
      ></div>

      <div className="relative h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-50 mb-1">
              {roadmap.title}
            </h3>
            <p className="text-sm text-sky-300">{category?.name}</p>
          </div>
          <div className="ml-4">
            <IconComponent className="w-8 h-8 text-slate-500 group-hover:text-slate-300 transition-colors" />
          </div>
        </div>

        <p className="text-slate-400 text-sm mb-6 flex-grow">
          {roadmap.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {roadmap.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-slate-700 text-slate-300 px-2.5 py-1 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
