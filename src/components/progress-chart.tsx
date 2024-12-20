"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import colors from "tailwindcss/colors";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { date: "14/12", progress: 10 },
  { date: "15/12", progress: 6 },
  { date: "16/12", progress: 15 },
  { date: "17/12", progress: 20 },
  { date: "18/12", progress: 7 },
  { date: "19/12", progress: 2 },
  { date: "20/12", progress: 10 },
];

export function ProgressChart() {
  return (
    <Card className="col-span-12">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Projetos concluídos
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={248}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              dx={-10}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              stroke={colors.violet[500]}
              type="linear"
              strokeWidth={2}
              dataKey="progress"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
