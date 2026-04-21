import { projects } from "@/lib/projects";
import { ProjectsClient } from "@/components/ProjectsClient";

export const revalidate = 3600;

export const metadata = {
  title: "Projects — Anton Kovalev",
};

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}
