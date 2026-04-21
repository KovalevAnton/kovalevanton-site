import { JOURNEY } from "@/lib/journey";
import { projects } from "@/lib/projects";
import { HomeClient } from "@/components/HomeClient";

export const revalidate = 3600;

export default function Home() {
  return (
    <HomeClient
      day={JOURNEY.currentDay}
      total={JOURNEY.totalDays}
      projects={projects}
    />
  );
}
