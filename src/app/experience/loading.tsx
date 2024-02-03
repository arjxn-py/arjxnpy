import { HeadingText } from "@/components/common/heading-text";
import { ExperienceSkeleton } from "@/components/loaders/experience-skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function experience() {
  return (
    <main className="items-center py-8">
      <div className="space-y-4">
        <HeadingText subtext="Professional Development, Roles and Responsibilities">
          Experience
        </HeadingText>
        <div className="flex flex-col items-end gap-4">
          <div className="grid w-full grid-cols-1"></div>
          <div className="flex flex-col items-end gap-4">
            <div className="grid w-full grid-cols-1">
              <Carousel className="w-full">
                <CarouselContent>
                  <ExperienceSkeleton />
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
