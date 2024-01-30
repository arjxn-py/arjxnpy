import { Experience } from "@/types";
import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <>
      <CarouselItem>
        <div className="flex flex-col gap-1">
          <Card className="">
            <CardTitle className="text-base pl-4 pt-4">
              {experience.role}
            </CardTitle>
            <CardDescription className="line-clamp-2 text-sm font-light pl-4">
              {experience.organization}
            </CardDescription>
            <CardDescription className="flex items-end gap-1 p-4 justify-end">
              {experience.startDate} - {experience.endDate}
            </CardDescription>
            <CardDescription className="flex items-center gap-1 p-4">
              {experience.location}
            </CardDescription>
          </Card>
        </div>
      </CarouselItem>
    </>
  );
}
