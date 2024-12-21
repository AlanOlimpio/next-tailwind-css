import { Comments } from "@/components/comments";
import { projects } from "@/components/mock/projects";
import { Progress } from "@/components/ui/progress";

import { ProjectInterfaceProps } from "@/interfaces/projects";
import { statusMap } from "@/utils/statusMap";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function ProjectDetails({
  params,
}: {
  params: ProjectInterfaceProps;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  const { id } = await params;

  const projectFilter = projects.filter((item) => {
    if (item.id === id) {
      return item;
    }
  });

  const project = await new Promise<ProjectInterfaceProps>((resolve) => {
    setTimeout(() => {
      resolve(projectFilter[0]);
    }, 200);
  });

  return (
    <main className="flex flex-col gap-4 pt-7">
      <div className="grid grid-cols-2 gap-4  max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className="grid gap-4">
          <h1 className="text-3xl font-bold tracking-tight ">
            Nome do projeto: {project.name}
          </h1>
          <p>{project.description}</p>
        </div>
        <Comments project={project} />
      </div>
      <div className="grid  gap-4 max-sm:grid-cols-1">
        <h2 className="text-2xl font-bold tracking-tight ">
          Tarefas associadas:
        </h2>
        <ul className="list-decimal pl-10">
          {project.associatedTasks?.map((item, index) => {
            if (item.length) {
              return <li key={index}>{item}</li>;
            }
          })}
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className="pt-7">
          <span>Status</span>
          <Progress
            value={statusMap[project.status].value}
            className="bg-gray-200 dark:bg-gray-700"
          />
        </div>
      </div>
    </main>
  );
}
