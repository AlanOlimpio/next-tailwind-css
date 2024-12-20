import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

export function ProjectTableRow() {
  return (
    <TableRow>
      <TableCell className="font-mono text-xs font-medium">
        sfsadfasdfasdfas
      </TableCell>

      <TableCell className="font-medium">Projeto teste</TableCell>
      <TableCell>Concluído</TableCell>

      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRight className="mr-2 h-3 w-3" />
          Ver detalhes
        </Button>
      </TableCell>
    </TableRow>
  );
}
