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
            <div className="flex justify-between">
              <CardTitle className="text-base pl-4 pt-4">
                {experience.role}
              </CardTitle>
              <CardDescription className="flex items-end gap-1 p-4 justify-end">
                {experience.startDate} - {experience.endDate}
              </CardDescription>
            </div>
            <div className="flex justify-between pb-4">
              <CardDescription className="line-clamp-2 text-sm font-light pl-4">
                {experience.organization}
              </CardDescription>
              <CardDescription className="flex items-end gap-1 pr-4 pb-4 justify-end">
                {experience.location}
              </CardDescription>
            </div>
            <ul className="list-disc pl-8">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="mb-1 pb-2">
                  {responsibility}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </CarouselItem>
    </>
  );
}
