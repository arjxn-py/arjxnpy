import { Skeleton } from "@/components/ui/skeleton";
import { Experience } from "@/types";
import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

interface ExperienceCardProps {
  experience?: Experience;
}

export function ExperienceSkeleton() {
  return (
    <>
      <CarouselItem>
        <Card className="">
          <div className="flex justify-between">
            <CardTitle className="text-base pl-4 pt-4">
              <Skeleton className="h-5 w-[27rem]" />
            </CardTitle>
            <CardDescription className="flex items-end gap-1 p-4 justify-end">
              <Skeleton className="h-5 w-[10rem]" />
            </CardDescription>
          </div>
          <div className="flex justify-between pb-4">
            <CardDescription className="line-clamp-2 text-sm font-light pl-4">
              <Skeleton className="h-5 w-[10rem]" />
            </CardDescription>
            <CardDescription className="flex items-end gap-1 pr-4 pb-4 justify-end">
              <Skeleton className="h-5 w-[10rem]" />
            </CardDescription>
          </div>
          <ul className="list-disc pl-8">
            <li className="mb-1 pb-2">
              <Skeleton className="h-5 w-[30rem]" />
            </li>
            <li className="mb-1 pb-2">
              <Skeleton className="h-5 w-[30rem]" />
            </li>
            <li className="mb-1 pb-2">
              <Skeleton className="h-5 w-[30rem]" />
            </li>
          </ul>
        </Card>
      </CarouselItem>
    </>
  );
}
