import { siteConfig } from "@/config/site";
import { HeadingText } from "@/components/common/heading-text";
import { ProjectsSkeleton } from "@/components/loaders/projects-skeleton";

export default async function experience() {
  return (
    <main className="items-center py-2">
      <section className="space-y-4 py-4">
        <HeadingText>Projects</HeadingText>
        <div className="flex flex-col items-end gap-4">
          <div className="grid w-full grid-cols-1">
            <ProjectsSkeleton />
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
