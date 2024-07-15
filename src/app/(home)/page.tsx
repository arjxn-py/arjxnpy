import { SocialMediaIcons } from "@/components/common/social-media-icons";

export default async function Home() {
  return (
    <main className="py-4">
      <section className="text-xs space-y-4 py-4">
        {/* <p className="text-xs font-light text-muted-foreground">
          Welcome to /arjxn-py
        </p> */}
        <p className="text-xs font-light">
          Arjun Verma is a senior undergrad at the University of Delhi, India,
          pursuing his Bachelors of Technology degree with a major in
          <span className="font-semibold">
            {" "}
            Information Technology and Mathematical Innovations
          </span>{" "}
          with a minor in
          <span className="font-semibold"> Management</span>.
        </p>
        <p className="text-xs font-light">
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
        <p className="text-xs font-light">
          In addition to my work with PyBaMM, I have also worked as a{" "}
          <span className="font-semibold">Remote Software Engineer</span> at{" "}
          <span className="font-semibold">Development Monitors LLC</span>,
          Arlington, Virginia. There, I was one of the core developers on
          a couple of{" "}
          <span className="font-semibold">World Bank funded projects</span>.
        </p>
        <p className="text-xs font-light">
          I possess a strong background in{" "}
          <span className="font-semibold">Full Stack Software Engineering</span>{" "}
          and <span className="font-semibold">DevOps</span>. My expertise lies
          in:
        </p>
        <div className="grid grid-cols-3 gap-4 text-xs font-light">
          <ul className="list-disc pl-6">
            <li>
              <span className="">Python</span>
            </li>
            <li>
              <span className="">JavaScript/TypeScript</span>
            </li>
            <li>
              <span className="">MERN</span>
            </li>
            <li>and more...</li>
          </ul>
          <ul className="list-disc pl-6">
            <li>
              <span className="">Three.js</span>
            </li>
            <li>
              <span className="">Docker</span>
            </li>
            <li>
              <span className="">Kubernetes</span>
            </li>
          </ul>
          <ul className="list-disc pl-6">
            <li>
              <span className="">AWS</span>
            </li>
            <li>
              <span className="">CI/CD</span>
            </li>
            <li>
              <span className="">SQL/PostgreSQL</span>
            </li>
          </ul>
        </div>
        <p className="text-xs font-light">
          I consider myself very adaptive with new technologies and have good
          experience working with:
        </p>
        <div className="grid grid-cols-2 gap-4 text-xs font-light">
          <ul className="list-disc pl-6">
            <li>
              <span className="">LLM Integrations</span>
            </li>
            <li>
              <span className="">3D modeling using Three.js</span>
            </li>
            <li>
              <span className="">Hosting on Cloud Platforms</span>
            </li>
          </ul>
          <ul className="list-disc pl-6">
            <li>
              <span className="">QGIS Plugin Development</span>
            </li>
            <li>
              <span className="">Containerization</span>
            </li>
            <li>
              <span className="">Python Packaging</span>
            </li>
          </ul>
        </div>
        <p className="text-xs font-light">I am currently exploring:</p>
        <div className="grid grid-cols-2 gap-4 text-xs font-light">
          <ul className="list-disc pl-6">
            <li>
              <span className="">Retrieval Augmented Generation</span>
            </li>
          </ul>
          <ul className="list-disc pl-6">
            <li>
              <span className="">Infrastructure as Code</span>
            </li>
          </ul>
        </div>
        <p className="text-xs font-light text-muted-foreground">
          Above lists are by no means exhaustive.
        </p>
        <SocialMediaIcons />
      </section>
    </main>
  );
}
