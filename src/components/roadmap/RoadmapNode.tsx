import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Circle,
  Star,
  Clock,
  Zap,
  Target,
  Award,
  BookOpen,
} from "lucide-react";
import { RoadmapNode as RoadmapNodeType } from "../types";

interface RoadmapNodeProps {
  node: RoadmapNodeType;
  isCompleted?: boolean;
  onClick: () => void;
}

export default function RoadmapNode({
  node,
  isCompleted = false,
  onClick,
}: RoadmapNodeProps) {
  const getNodeStyle = () => {
    const baseStyle =
      "relative w-40 h-28 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden";

    switch (node.type) {
      case "start":
        return `${baseStyle} bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 text-white border-2 border-emerald-300`;
      case "milestone":
        return `${baseStyle} bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 text-white border-2 border-purple-300`;
      case "optional":
        return `${baseStyle} bg-gradient-to-br from-gray-400 via-slate-500 to-gray-600 text-white border-2 border-gray-300`;
      case "advanced":
        return `${baseStyle} bg-gradient-to-br from-red-500 via-pink-500 to-rose-600 text-white border-2 border-red-300`;
      default:
        return `${baseStyle} bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 text-white border-2 border-blue-300`;
    }
  };

  const getDifficultyColor = () => {
    switch (node.difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 border border-green-200";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      case "advanced":
        return "bg-red-100 text-red-800 border border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  const getTypeIcon = () => {
    switch (node.type) {
      case "start":
        return <Zap className="w-4 h-4" />;
      case "milestone":
        return <Target className="w-4 h-4" />;
      case "optional":
        return <Star className="w-4 h-4" />;
      case "advanced":
        return <Award className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
      style={{ left: node.position.x, top: node.position.y }}
      onClick={onClick}
      whileHover={{ scale: 1.05, zIndex: 50 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>

      {/* Main node */}
      <div
        className={`${getNodeStyle()} ${isCompleted ? "ring-4 ring-green-400 ring-opacity-60" : ""}`}
      >
        {/* Completion status */}
        <motion.div
          className="absolute -top-2 -right-2 z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {isCompleted ? (
            <CheckCircle className="w-7 h-7 text-green-500 bg-white rounded-full shadow-lg" />
          ) : (
            <Circle className="w-7 h-7 text-gray-400 bg-white rounded-full shadow-lg" />
          )}
        </motion.div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 right-2 w-16 h-16 rounded-full bg-white/20"></div>
          <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-white/10"></div>
        </div>

        {/* Content */}
        <div className="relative p-4 h-full flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                {getTypeIcon()}
                <h4 className="text-sm font-bold leading-tight line-clamp-2">
                  {node.title}
                </h4>
              </div>
              {node.estimatedTime && (
                <div className="flex items-center space-x-1 text-xs opacity-90">
                  <Clock className="w-3 h-3" />
                  <span>{node.estimatedTime}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}
            >
              {node.difficulty}
            </div>
            {node.type === "optional" && (
              <Star className="w-4 h-4 opacity-75 fill-current" />
            )}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Enhanced tooltip */}
      <motion.div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50"
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
      >
        <div className="bg-gray-900 text-white text-sm rounded-xl px-4 py-3 whitespace-nowrap max-w-xs shadow-2xl border border-gray-700">
          <div className="font-bold text-blue-300 mb-1">{node.title}</div>
          <div className="text-gray-300 mb-2 text-xs">{node.description}</div>
          <div className="flex items-center justify-between text-xs">
            <span className={`px-2 py-1 rounded-full ${getDifficultyColor()}`}>
              {node.difficulty}
            </span>
            {node.estimatedTime && (
              <span className="text-gray-400">⏱️ {node.estimatedTime}</span>
            )}
          </div>
          {node.resources && node.resources.length > 0 && (
            <div className="mt-2 pt-2 border-t border-gray-700">
              <div className="text-xs text-gray-400 mb-1">Resources:</div>
              <div className="text-xs text-blue-300">
                {node.resources.slice(0, 2).join(", ")}
                {node.resources.length > 2 && "..."}
              </div>
            </div>
          )}
        </div>
        {/* Tooltip arrow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </motion.div>
    </motion.div>
  );
}
