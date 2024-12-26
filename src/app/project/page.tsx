import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProjectTableRow } from "@/components/project-table-row";

import { Metadata } from "next";
import { projects } from "@/components/mock/projects";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ProjectCreationDialog } from "@/components/project-creation-dialog";

export const metadata: Metadata = {
  title: "Project | Tailwind CSS",
  description: "Generated by create next app",
};

export default async function Project() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <main className="flex flex-col gap-4">
      <div className="flex justify-between gap-4 max-md:flex-col align-middle pt-7">
        <h1 className="text-3xl font-bold tracking-tight">Project</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <PlusCircle className="mr-2 h-3 w-3" />
              Novo projeto
            </Button>
          </DialogTrigger>
          <ProjectCreationDialog />
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Identificador</TableHead>
              <TableHead className="min-w-[170px]">Nome do projeto</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progresso</TableHead>
              <TableHead className="w-[164px]">Detalhes do Projeto</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project, i) => {
              return (
                <ProjectTableRow project={project} key={`identifier${i}`} />
              );
            })}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
