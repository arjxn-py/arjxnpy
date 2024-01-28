import { siteConfig } from "@/config/site";
import { HeadingText } from "@/components/common/heading-text";
import { SocialMediaIcons } from "@/components/common/social-media-icons";
import { ProjectsSkeleton } from "@/components/loaders/projects-skeleton";

export default function Home() {
  return (
    <main className="py-4">
      <section className="space-y-4 py-4">
        <p className="font-light text-muted-foreground">Welcome to /arjxn-py</p>
        <p className="font-light">
          I am a junior undergrad at the University of Delhi in New Delhi,
          India, pursuing my Bachelors of Technology degree with a major in
          Information Technology and Mathematical Innovations with a minor in
          Management.
        </p>
        <p className="font-light">
          My main tech stack for building apps is{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">React</span>, and{" "}
          <span className="font-semibold">TypeScript</span>.
        </p>
        <SocialMediaIcons />
      </section>
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
