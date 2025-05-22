import React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransactionStore } from "@/lib/store/useTransactionStore";
import { LinearChart } from "../chart";
import {
  getAverageExpenses,
  getExpensesByMonth,
} from "@/lib/helpers/transactions";

export function MonthlyExpenses() {
  const transactions = useTransactionStore((state) => state.transactions);
  const monthlyExpenses = getExpensesByMonth(transactions);
  const averageExpenses = getAverageExpenses(monthlyExpenses);

  return (
    <Card>
      <CardHeader className="flex flex-col gap-3">
        <CardTitle className="text-muted-foreground font-bold">
          Gastos Mensuales
        </CardTitle>
        <span className="text-4xl font-bold">{averageExpenses}€</span>
      </CardHeader>
      <LinearChart chartData={monthlyExpenses} />
    </Card>
  );
}
