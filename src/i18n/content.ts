import { parse } from "yaml";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Lang } from "./ui";

function loadYaml<T>(path: string): T {
  const fullPath = join(process.cwd(), path);
  const text = readFileSync(fullPath, "utf-8");
  return parse(text) as T;
}

export interface CvData {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    description?: string;
  }[];
  experience: {
    title: string;
    organization: string;
    location: string;
    period: string;
    description?: string;
    highlights?: string[];
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
}

export interface Publication {
  title: string;
  authors: string;
  journal?: string;
  year: number;
  abstract?: string;
  url?: string;
  type: "article" | "working-paper" | "book-chapter" | "policy-brief";
  status: "published" | "forthcoming" | "working-paper";
}

export interface PublicationsData {
  publications: Publication[];
}

export function getCvData(lang: Lang): CvData {
  return loadYaml<CvData>(`src/content/cv/${lang}.yaml`);
}

export function getPublicationsData(lang: Lang): PublicationsData {
  return loadYaml<PublicationsData>(`src/content/publications/${lang}.yaml`);
}
