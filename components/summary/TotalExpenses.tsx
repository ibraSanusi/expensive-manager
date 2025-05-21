import React from "react";

import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "../ui/progress";

export function TotalExpenses() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex flex-col gap-3">
        <CardTitle className="text-muted-foreground font-bold">
          Gastos Totales
        </CardTitle>
        <span className="text-5xl font-bold">4.568€</span>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <span className="text-muted-foreground text-xl">Budget</span>
        <Progress value={33} />
      </CardContent>
      <CardFooter>
        <span className="text-4xl">5.000€</span>
      </CardFooter>
    </Card>
  );
}
