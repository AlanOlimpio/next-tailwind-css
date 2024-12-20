import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Progress } from "./ui/progress";

const statusMap = {
  active: {
    tex: "ativo",
    value: 33,
    color: "bg-slate-500",
  },
  late: {
    tex: "Ativo",
    value: 66,
    color: "bg-amber-500",
  },
  completed: {
    tex: "Concluído",
    value: 100,
    color: "bg-green-500",
  },
};

export function ProjectTableRow() {
  return (
    <TableRow>
      <TableCell className="font-mono text-xs font-medium">
        sfsadfasdfasdfas
      </TableCell>

      <TableCell className="font-medium">Projeto teste</TableCell>
      <TableCell>Concluído</TableCell>
      <TableCell>
        <Progress
          value={statusMap["completed"].value}
          className={`${statusMap["completed"].color}`}
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
