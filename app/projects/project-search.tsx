"use client";

import type { Project } from "../../lib/projects";
import { ProjectList } from "./project-list";
import { useState } from "react";

type Props = { projects: Project[] };
export function ProjectSearch({ projects }: Props) {
  const [query, setQuery] = useState("");

  const shown = projects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search projects"
        className="mt-8 w-80 border border-gray-400 px-4 py-2 text-black"
      />
      <ProjectList projects={shown} />
    </>
  );
}
{/* struggled a bit here because the search works on local but not on network, idk if  */}
