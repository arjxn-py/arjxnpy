import { SocialMediaIcons } from "@/components/common/social-media-icons";

export default async function Home() {
  return (
    <main className="py-4">
      <section className="space-y-4 py-4">
        <p className="text-sm font-light text-muted-foreground">
          Welcome to /arjxn-py
        </p>
        <p className="text-sm font-light">
          Arjun Verma is a senior undergrad at the University of Delhi, India,
          pursuing his Bachelors of Technology degree with a major in
          <span className="font-semibold">
            {" "}
            Information Technology and Mathematical Innovations
          </span>{" "}
          with a minor in
          <span className="font-semibold"> Management</span>.
        </p>
        <p className="text-sm font-light">
          I am very passionate about{" "}
          <span className="font-semibold">open source</span> and{" "}
          <span className="font-semibold">open science</span>. Currently, I am
          co-supervising three students for{" "}
          <span className="font-semibold">Google Summer of Code</span> at{" "}
          <span className="font-semibold">PyBaMM</span> (Python Battery
          Mathematical Modeling), under{" "}
          <span className="font-semibold">NumFOCUS</span>, where I also
          volunteer to help maintain the project. Additionally, I have worked as
          a{" "}
          <span className="font-semibold">Google Summer of Code developer</span>{" "}
          at <span className="font-semibold">PyBaMM</span>.
        </p>
        <p className="text-sm font-light">
          In addition to my work with PyBaMM, I have also worked as a{" "}
          <span className="font-semibold">Remote Software Engineer</span> at{" "}
          <span className="font-semibold">Development Monitors LLC</span>,
          Arlington, Virginia. There, I was one of the four developers on
          several{" "}
          <span className="font-semibold">World Bank funded projects</span>.
        </p>
        <p className="text-sm font-light">
          I possess a strong background in{" "}
          <span className="font-semibold">Full Stack Software Engineering</span>{" "}
          and <span className="font-semibold">DevOps</span>. My expertise lies
          in <span className="font-semibold">Python</span>,{" "}
          <span className="font-semibold">JavaScript/TypeScript</span>,{" "}
          <span className="font-semibold">MERN</span>,{" "}
          <span className="font-semibold">Three.js</span>,{" "}
          <span className="font-semibold">Docker</span>,{" "}
          <span className="font-semibold">Kubernetes</span>,{" "}
          <span className="font-semibold">AWS</span>,{" "}
          <span className="font-semibold">CI/CD</span>, and more.
        </p>
        <p className="text-sm font-light">
          I consider myself very adaptive with new technologies and have good
          experience working with{" "}
          <span className="font-semibold">LLM Integrations</span>,{" "}
          <span className="font-semibold">3D modeling using Three.js</span>,{" "}
          <span className="font-semibold">QGIS Plugin Development</span>,{" "}
          <span className="font-semibold">Containerization</span>, and{" "}
          <span className="font-semibold">Hosting on Cloud Platforms</span>. I
          am currently exploring{" "}
          <span className="font-semibold">
            Retrieval Augmentation Generation frameworks
          </span>{" "}
          and <span className="font-semibold">Infrastructure as Code</span>.
        </p>
        <SocialMediaIcons />
      </section>
    </main>
  );
}
