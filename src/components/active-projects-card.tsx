import { FolderOpenDot } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function ActiveProjectsCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Projetos ativos
        </CardTitle>
        <FolderOpenDot className="h-4 w-4   text-amber-500 dark:text-amber-500" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">15</span>
      </CardContent>
    </Card>
  );
}
