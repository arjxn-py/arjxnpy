import { SocialMediaIcons } from "@/components/common/social-media-icons";

export default async function Home() {
  return (
    <main className="py-4">
      <section className="space-y-4 py-4">
        <p className="font-light text-muted-foreground">Welcome to /arjxn-py</p>
        <p className="font-light">
          Arjun Verma is a senior undergrad at the University of Delhi, India,
          pursuing Bachelors of Technology with a major in Information
          Technology and Mathematical Innovations with a minor in Management.
        </p>
        <p className="font-light">
          My main tech stack for building apps is{" "}
          <span className="font-semibold">MERN</span>,{" "}
          <span className="font-semibold">Python</span>, and{" "}
          <span className="font-semibold">TypeScript</span>.
        </p>
        <SocialMediaIcons />
      </section>
    </main>
  );
}
