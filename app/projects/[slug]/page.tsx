import Image from "next/image";
import { notFound } from "next/navigation";
import { readProject } from "@/lib/projects";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await readProject(slug);
  if (!project) notFound();

  return (
    <main className="...">
      <h1 className="...">{project.title}</h1>
      <p className="...">{project.year}</p>
      {project.imageUrl && (
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={960}
          height={540}
          className="mt-6 h-80 w-auto rounded border object-contain"
        />
      )}
      <p className="...">{project.summary}</p>
    </main>
  );
}
