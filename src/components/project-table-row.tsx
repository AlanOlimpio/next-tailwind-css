"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Progress } from "./ui/progress";
import { ProjectInterfaceProps } from "@/interfaces/projects";
import { statusMap } from "@/utils/statusMap";
export function ProjectTableRow({
  project,
}: {
  project: ProjectInterfaceProps;
}) {
  const router = useRouter();

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
          className="w-[60%] bg-gray-200 dark:bg-gray-700"
          color="red"
        />
      </TableCell>

      <TableCell>
        <Button
          onClick={() => router.push(`/project/${project.id}`)}
          variant="outline"
          size="sm"
        >
          <ArrowRight className="mr-2 h-3 w-3" />
          Ver detalhes
        </Button>
      </TableCell>
    </TableRow>
  );
}
