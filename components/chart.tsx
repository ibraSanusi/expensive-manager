"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", gastos: 186 },
  { month: "February", gastos: 305 },
  { month: "March", gastos: 237 },
  { month: "April", gastos: 73 },
  { month: "May", gastos: 209 },
  { month: "June", gastos: 214 },
];

const chartConfig = {
  gastos: {
    label: "Gastos",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function LinearChart() {
  return (
    <Card className="w-full border-none">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="gastos"
              type="natural"
              stroke={chartConfig.gastos.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
