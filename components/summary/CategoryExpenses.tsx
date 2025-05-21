import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPieDonut } from "../chart-pie-donuts";

export function CategoryExpenses() {
  return (
    <Card className="flex flex-col justify-between border-none">
      <CardHeader className="flex flex-col gap-3">
        <CardTitle className="text-muted-foreground text-2xl font-bold">
          Categorías de Gastos
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <ChartPieDonut />
      </CardContent>
    </Card>
  );
}
