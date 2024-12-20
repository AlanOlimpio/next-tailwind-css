import { FolderDot } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function CompletedProjectsCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Projetos concluídos
        </CardTitle>
        <FolderDot className="h-4 w-4 text-muted-foreground text-emerald-500 dark:text-emerald-400" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">5</span>
      </CardContent>
    </Card>
  );
}
