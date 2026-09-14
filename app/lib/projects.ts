import "server-only";

export type Project = {slug: string; title: string; year: number; summary: string;};

const PROJECTS: Project[] = [
    {slug: "kawaii-count", title: "Kawaii Count", year: 2023, summary: "Kawaii count is a restaurant Inventory System application that is designed for cafes."},
    {slug: "whack-a-whacker", title: "WhackaWhack", year: 2025, summary: " WhackAWhack is java game application that takes inspiration from Uncanny cat golf game and whack-a-mole."},
    {slug: "aniyoka", title: "Aniyoka", year: 2026, summary: " AniYoka is an AniList tracker that helps you discover and organize the anime you watch."}
];

export const getProjects = () => PROJECTS;
export const getProject = (slug:string) => PROJECTS.find((p) => p.slug === slug);