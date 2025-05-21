import React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { LinearChart } from "../chart";

export function MonthlyExpenses() {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-3">
        <CardTitle className="text-muted-foreground font-bold">
          Gastos Mensuales
        </CardTitle>
        <span className="text-4xl font-bold">2.302€</span>
      </CardHeader>
      <LinearChart />
    </Card>
  );
}
