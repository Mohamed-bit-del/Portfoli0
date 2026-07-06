import { projects } from "../data/projects";

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}
