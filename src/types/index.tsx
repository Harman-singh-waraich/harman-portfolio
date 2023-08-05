import { Models } from "appwrite";
import { atom } from "recoil";

export interface Skill {
  field: string;
  technologies: string[];
}
export interface Project {
  title: string;
  techstack: string;
  thumbnail: string;
  description: string;
  liveLink: string | undefined;
  repo: string | undefined;
}
export interface Blog extends Models.Document {
  title: string;
  metadesc: string;
  content: string;
  slug: string;
  image: string;
}
