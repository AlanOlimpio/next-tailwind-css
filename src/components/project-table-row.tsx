import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Progress } from "./ui/progress";
import { ProjectInterfaceProps } from "@/interfaces/projects";

const statusMap = {
  active: {
    text: "Ativo",
    value: 66,
    color: "bg-cyan-500",
  },
  late: {
    text: "Atrasado",
    value: 33,
    color: "bg-red-500",
  },
  completed: {
    text: "Concluído",
    value: 100,
    color: "bg-green-500",
  },
};

export function ProjectTableRow({
  project,
}: {
  project: ProjectInterfaceProps;
}) {
  return (
    <TableRow>
      <TableCell className="font-mono text-xs font-medium">
        {project.id}
      </TableCell>

      <TableCell className="font-medium">{project.name}</TableCell>
      <TableCell>{statusMap[project.status].text}</TableCell>
      <TableCell>
        <Progress
          value={statusMap[project.status].value}
          className={`${statusMap[project.status].color}`}
        />
      </TableCell>

      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRight className="mr-2 h-3 w-3" />
          Ver detalhes
        </Button>
      </TableCell>
    </TableRow>
  );
}
