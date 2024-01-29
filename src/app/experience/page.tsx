import { HeadingText } from "@/components/common/heading-text";
import ExperienceCard from "@/components/experience/experience-card";
import experiences from "@/lib/api/experiences";
import { Experience } from "@/types";

export default async function experience() {
  const data = (await experiences) as Experience[];

  return (
    <main className="items-center py-8">
      <div className="space-y-4">
        <HeadingText subtext="Professional Development, Roles and Responsibilities">
          Experience
        </HeadingText>
        <div className="flex flex-col items-end gap-4">
          <div className="grid w-full grid-cols-1">
            {data.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
