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

  const project = projects[parseInt(params.id) - 1];

  return (
    <main className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4 content-center items-center max-md:grid-cols-2 max-sm:grid-cols-1">
        <h1 className="text-3xl font-bold tracking-tight pt-7">
          Nome do projeto: {project.name}
        </h1>
        <div className="pt-7">
          <span>Status</span>

          <Progress
            value={statusMap[project.status].value}
            className={`${statusMap[project.status].color} `}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1"></div>
      <div className="grid grid-cols-9 gap-4 max-sm:grid-cols-1"></div>
    </main>
  );
}
