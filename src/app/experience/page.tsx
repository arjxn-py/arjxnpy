import { HeadingText } from "@/components/common/heading-text";
import ExperienceCard from "@/components/experience/experience-card";
import experiences from "@/lib/api/experiences";
import { Experience } from "@/types";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

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
            <Carousel className="w-full" orientation="vertical">
              <CarouselContent className="max-h-[435px] overflow-y-auto">
                {data.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
}
