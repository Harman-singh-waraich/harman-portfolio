export interface Skill {
  field: string;
  technologies: string[];
}
export interface Project {
  title: string;
  techstack: string;
  thumbnail: string | undefined;
  description: string;
  liveLink: string | undefined;
  repo: string | undefined;
}
