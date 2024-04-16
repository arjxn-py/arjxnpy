import { Repo } from "@/types";
import { siteConfig } from "@/config/site";
import { HeadingText } from "@/components/common/heading-text";
import { ProjectCard } from "@/components/projects/project-card";
import { getRepo } from "@/lib/api/github";

export default async function experience() {
  const data = (await getRepo()) as Repo[];
  return (
    <main className="items-center py-2">
      <section className="space-y-4 py-4">
        <HeadingText>Projects</HeadingText>
        <div className="flex flex-col items-end gap-4">
          <div className="grid w-full grid-cols-1">
            {data.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <a
            target="_blank"
            href={`${siteConfig.links.github}?tab=repositories`}
            className="text-sm underline"
          >
            See More...
          </a>
        </div>
      </section>
    </main>
  );
}
