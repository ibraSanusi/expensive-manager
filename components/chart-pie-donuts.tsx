"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function ChartPieDonut({
  expensesCategories,
  chartConfig,
  chartData,
}: {
  expensesCategories: {
    name: string;
    value: number;
    fill: string;
  }[];
  chartConfig: ChartConfig;
  chartData: {
    category: string;
    expenses: number;
    fill: string;
  }[];
}) {
  return (
    <Card className="flex flex-col border-none">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="expenses"
              nameKey="category"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <ul className="flex w-full flex-col gap-2">
          {expensesCategories.map((category, index) => (
            <li
              key={`${category.name}-${index}`}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: category.fill }}
                />
                <span className="text-muted-foreground text-sm font-medium">
                  {category.name}
                </span>
              </div>
              <span className="text-muted-foreground text-sm font-medium">
                {Math.trunc(category.value * 100)}%
              </span>
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
}
