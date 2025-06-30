import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import RoadmapVisual, { RoadmapStep } from "../components/roadmap/RoadmapVisual";
import { roadmaps } from "../data/roadmaps";
import { RoadmapNode as RoadmapNodeType } from "../types";
import { getIcon } from "../utils/icons";
import Seo from "../components/Seo";
import ShareButtons from "../components/ShareButtons";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const RoadmapView = () => {
  const { id } = useParams<{ id: string }>();
  const roadmap = roadmaps.find((r) => r.id === id);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!roadmap) {
        return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Roadmap not found</h1>
          <p className="mt-4">
            Sorry, we couldn't find the roadmap you're looking for.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const getStepIcon = (node: RoadmapNodeType) => {
    const title = node.title.toLowerCase();
    // A simple logic to find a matching icon from the title
    // This can be improved with more keywords
    if (title.includes("react")) return getIcon("React");
    if (title.includes("vue")) return getIcon("Vue");
    if (title.includes("angular")) return getIcon("Angular");
    if (title.includes("python")) return getIcon("Python");
    if (title.includes("javascript")) return getIcon("JavaScript");
    if (title.includes("typescript")) return getIcon("TypeScript");
    if (title.includes("java")) return getIcon("Java");
    if (title.includes("rust")) return getIcon("Rust");
    if (title.includes("node")) return getIcon("Node.js");
    if (title.includes("database")) return getIcon("Database");
    if (title.includes("sql")) return getIcon("PostgreSQL");

    return getIcon(node.type);
  };

  const steps: RoadmapStep[] = roadmap.nodes.map((node) => {
    const Icon = getStepIcon(node);
    return {
      icon: <Icon />,
      title: node.title,
      keywords: node.description,
    };
  });

  const arrows = roadmap.nodes
    .map((_, idx) => {
      if (idx < roadmap.nodes.length - 1) {
        return [idx, idx + 1];
      }
      return null;
    })
    .filter(Boolean);

  const handleDownloadPdf = () => {
    const roadmapElement = roadmapRef.current;
    if (!roadmapElement) return;

    setIsDownloading(true);

    html2canvas(roadmapElement, {
      backgroundColor: "#111", // Match the background color
      scale: 2, // Increase resolution
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? "landscape" : "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${roadmap.title.replace(/ /g, "_")}_Roadmap.pdf`);
      setIsDownloading(false);
    });
  };

  return (
    <>
      <Seo 
        title={roadmap.title} 
        description={roadmap.description}
        keywords={[
          `${roadmap.title.toLowerCase()} roadmap`,
          `${roadmap.title.toLowerCase()} learning path`,
          `${roadmap.title.toLowerCase()} guide`,
          `${roadmap.title.toLowerCase()} tutorial`,
          ...roadmap.tags,
          "developer roadmap",
          "programming guide",
          "tech career"
        ]}
        tags={roadmap.tags}
        type="article"
        section={roadmap.category}
      />
      <div className="flex flex-col min-h-screen bg-gray-900 text-white pt-16">
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8 flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2" />
              Back to all roadmaps
            </Link>
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="flex items-center bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              <Download className="mr-2 h-5 w-5" />
              {isDownloading ? "Downloading..." : "Download PDF"}
            </button>
          </div>
          <ShareButtons title={roadmap.title} url={window.location.href} />
          <div ref={roadmapRef}>
            <RoadmapVisual
              title={roadmap.title}
              subtitle="Developer Roadmap 2025"
              steps={steps}
              arrows={arrows as [number, number][]}
            />
        </div>
        </main>
      </div>
    </>
  );
};

export default RoadmapView;
