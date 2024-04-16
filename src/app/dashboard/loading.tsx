import { HeadingText } from "@/components/common/heading-text";
import { DashboardSkeleton } from "@/components/loaders/dashboard-skeleton";

export const metadata = {
  title: "Dashboard",
  description: "Statistics about my activities",
};

export default async function Dashboard() {
  return (
    <main className="items-center py-2">
      <div className="space-y-4">
        <HeadingText subtext="Statistics about my activities">
          Dashboard
        </HeadingText>
        <div className="flex flex-wrap gap-2">
          <DashboardSkeleton />
        </div>
      </div>
    </main>
  );
}
