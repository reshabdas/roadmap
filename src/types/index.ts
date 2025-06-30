export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  type: "start" | "skill" | "milestone" | "optional" | "advanced" | "project";
  position?: { x: number; y: number };
  connections?: string[];
  resources?: string[];
  difficulty?: "beginner" | "intermediate" | "advanced" | "expert";
  estimatedTime?: string;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced" | "expert";
  estimatedDuration: string;
  nodes: RoadmapNode[];
  icon: string;
  color: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}
