"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const expensesCategories = [
  { name: "Food", value: 0.32, fill: "var(--color-food)" },
  { name: "Shopping", value: 0.28, fill: "var(--color-shopping)" },
  { name: "Housing", value: 0.65, fill: "var(--color-housing)" },
  { name: "Transportation", value: 0.03, fill: "var(--color-transportation)" },
];

export function ChartPieDonut() {
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
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <ul className="flex w-full flex-col gap-2">
          {expensesCategories.map((category) => (
            <li
              key={category.name}
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
