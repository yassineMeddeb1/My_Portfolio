export interface Project {
  id: number;
  name: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  images: string[];   // ✅ pour le carousel
  category: string;
  liveLink?: string;
  githubLink?: string;
}
