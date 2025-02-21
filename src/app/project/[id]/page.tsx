import { buildNextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Comments } from "@/components/comments";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import { ProjectInterfaceProps } from "@/interfaces/projects";
import { api } from "@/lib/axios";
import { statusMap } from "@/utils/statusMap";
import { ArrowRight } from "lucide-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function ProjectDetails({
  params,
}: {
  params: ProjectInterfaceProps;
}) {
  const session = await getServerSession(buildNextAuthOptions);

  if (!session) {
    redirect("/");
  }

  const { id } = await params;

  const project: ProjectInterfaceProps = await api
    .post("/api/project/", {
      id: id,
    })
    .then((response) => {
      const dataTem = {
        ...response.data,
        associatedTasks: ["Criar testes"],
        comments: [],
      };
      return dataTem;
    });

  return (
    <main className="flex flex-col gap-4 pt-7">
      <div className="grid grid-cols-2 gap-16  max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className="grid gap-4 content-start">
          <h1 className="text-3xl font-bold tracking-tight ">
            Nome do projeto: {project.name}
          </h1>
          <p>{project.description}</p>
          <div className="grid grid-cols-3 content-center gap-16 max-md:grid-cols-2 max-sm:grid-cols-1 ">
            <div className="col-span-2">
              <span>Status</span>

              <Progress
                value={statusMap[project.status].value}
                className="bg-gray-200 dark:bg-gray-700"
              />
            </div>
            <Button variant="default" size="lg">
              <ArrowRight className="mr-2 h-3 w-3" />
              Concluir
            </Button>
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
        </div>

        <Comments project={project} />
      </div>
    </main>
  );
}
