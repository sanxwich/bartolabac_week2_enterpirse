export const dynamic = "force-dynamic"; {/* added this to check if the network works for searching */}

import { Suspense } from "react";
import {getProjects} from "../../lib/projects";
import { ProjectSearch } from "./project-search";
import { RowsSkeleton, StatsSkeleton } from "./skeletons";
import { ProjectRows } from "./project-rows";
import { ProjectStats } from "./project-stats";


export default function ProjectsPage(){
  return(
    <main className= "px-16 py-8">
      <h1 className="text-4xl font-bold">Projects</h1>
      
      <Suspense fallback={<StatsSkeleton />}>
<ProjectStats />
</Suspense>

      <Suspense fallback={<RowsSkeleton />}>
      <ProjectRows />
      </Suspense>
    </main>
  );
}