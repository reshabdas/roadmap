import React, { useState, useMemo, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Users,
  Star,
  Award,
  Zap,
  Target,
  Rocket,
  Globe,
  BookCheck,
  ShieldCheck,
  Search,
  CheckCircle,
} from "lucide-react";
import RoadmapCard from "../components/roadmap/RoadmapCard";
import { roadmaps, categories } from "../data/roadmaps";
import { Roadmap, Category } from "../types";
import Seo from "../components/Seo";

interface HomeProps {
  searchQuery: string;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const roleBasedRoadmapIds = [
  "frontend-developer",
  "backend-developer",
  "full-stack",
  "android",
  "ios",
  "ai-data-scientist",
  "data-analyst",
  "mlops",
  "devops",
  "software-architect",
  "cyber-security",
  "product-manager",
  "engineering-manager",
  "developer-relations",
  "technical-writer",
  "blockchain",
  "qa-automation",
  "ux-designer",
  "game-developer",
];

const skillBasedRoadmapIds = [
  "computer-science",
  "react-developer",
  "vue-developer",
  "angular-developer",
  "javascript-expert",
  "typescript-mastery",
  "postgresql-expert",
  "sql-specialist",
  "nodejs-developer",
  "python-developer",
  "csharp-developer",
  "java-developer",
  "cplusplus-developer",
  "go-developer",
  "rust-developer",
  "spring-boot-developer",
  "react-native-developer",
  "flutter-developer",
  "generative-ai",
  "system-design",
  "api-design",
];

export default function Home({ searchQuery }: HomeProps) {
  const query = useQuery();
  const navigate = useNavigate();

  const isPopularSort = query.get("sort") === "popular";
  const selectedCategory = query.get("category") || "all";

  const handleCategorySelect = (categoryId: string) => {
    // When a category is selected, we build a new URL from scratch
    // to ensure old parameters like 'sort=popular' are removed.
    if (categoryId === "all") {
      navigate("/");
    } else {
      navigate(`/?category=${categoryId}`);
    }
  };

  const filteredRoadmaps = useMemo(() => {
    let filtered = roadmaps;

    // Filter by popular
    if (isPopularSort) {
      filtered = filtered.filter((roadmap) => roadmap.difficulty === "expert");
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (roadmap) => roadmap.category === selectedCategory,
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (roadmap) =>
          roadmap.title.toLowerCase().includes(query) ||
          roadmap.description.toLowerCase().includes(query) ||
          roadmap.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery, isPopularSort]);

  const roleBasedRoadmaps = useMemo(
    () => filteredRoadmaps.slice(0, Math.ceil(filteredRoadmaps.length / 2)),
    [filteredRoadmaps],
  );

  const skillBasedRoadmaps = useMemo(
    () => filteredRoadmaps.slice(Math.ceil(filteredRoadmaps.length / 2)),
    [filteredRoadmaps],
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <Seo
        title="RoadmapPro - Developer Roadmaps for Professionals"
        description="High-quality learning roadmaps for developers, engineers, and tech professionals. Find your path to mastery with structured guides for React, Python, DevOps, AI, and more."
        keywords={[
          "developer roadmap",
          "programming guide",
          "tech career path",
          "software development roadmap",
          "react roadmap",
          "python roadmap",
          "devops roadmap",
          "ai roadmap",
          "frontend roadmap",
          "backend roadmap",
          "full stack roadmap",
          "mobile development roadmap",
          "data science roadmap",
          "cyber security roadmap",
          "blockchain roadmap",
          "game development roadmap",
          "ui ux roadmap",
          "qa testing roadmap",
          "product management roadmap",
          "engineering management roadmap"
        ]}
        tags={[
          "developer",
          "programming",
          "technology",
          "career",
          "learning",
          "roadmap",
          "guide",
          "tutorial"
        ]}
      />
      <div className="min-h-screen bg-slate-900 text-slate-200">
        {/* Enhanced Hero Section */}
        <section className="relative text-center py-24 sm:py-28 lg:py-36 px-4 border-b border-slate-800 overflow-hidden">
          {/* Enhanced Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDelay: '4s'}}></div>
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-5xl mx-auto relative z-10"
          >
            {/* Badge */}
            {/* Removed fake claim badge */}
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-50 mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Developer
              </span>
              <br />
              <span className="text-slate-100">Roadmaps</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Master your tech career with expertly curated learning paths. 
              From beginner to expert, find your perfect roadmap.
            </motion.p>
            
            {/* Enhanced CTA */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <div className="flex items-center text-slate-400 text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Free forever • No signup required
              </div>
            </motion.div>
            
            {/* Search Info */}
            {searchQuery && (
              <motion.div variants={itemVariants} className="mb-8 text-center">
                <p className="text-slate-300">
                  Showing results for:{" "}
                  <span className="font-semibold text-sky-400 bg-sky-400/10 px-2 py-1 rounded">
                    "{searchQuery}"
                  </span>
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Enhanced Roadmaps Section */}
        <main className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Search Results */}
            {searchQuery ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <h2 className="text-3xl font-bold text-slate-50 mb-8 flex items-center">
                  <Search className="w-8 h-8 mr-3 text-sky-400" />
                  Search Results
                </h2>
                {filteredRoadmaps.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRoadmaps.map((roadmap) => (
                      <Link
                        to={`/roadmaps/${roadmap.id}`}
                        key={roadmap.id}
                        className="block h-full"
                      >
                        <RoadmapCard roadmap={roadmap} />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-10 h-10 text-slate-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-300 mb-2">
                      No roadmaps found
                    </h3>
                    <p className="text-slate-500 max-w-md mx-auto">
                      Try a different search term or browse our complete collection below.
                    </p>
                  </div>
                )}
              </motion.div>
            ) : (
              <>
                {/* Enhanced Role-based Roadmaps */}
                <motion.div
                  className="mb-20"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.div variants={itemVariants} className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-50 mb-4 flex items-center">
                      <Target className="w-8 h-8 mr-3 text-blue-400" />
                      Featured Roadmaps
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl">
                      Explore our curated collection of learning paths for developers and tech professionals.
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {roleBasedRoadmaps.map((roadmap) => (
                      <Link
                        to={`/roadmaps/${roadmap.id}`}
                        key={roadmap.id}
                        className="block h-full"
                      >
                        <RoadmapCard roadmap={roadmap} />
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced Skill-based Roadmaps */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="mb-16"
                >
                  <motion.div variants={itemVariants} className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-50 mb-4 flex items-center">
                      <Zap className="w-8 h-8 mr-3 text-yellow-400" />
                      More Roadmaps
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl">
                      Discover additional learning paths and specialized roadmaps for your career growth.
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillBasedRoadmaps.map((roadmap) => (
                      <Link
                        to={`/roadmaps/${roadmap.id}`}
                        key={roadmap.id}
                        className="block h-full"
                      >
                        <RoadmapCard roadmap={roadmap} />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
