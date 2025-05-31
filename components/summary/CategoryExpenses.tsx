import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPieDonut } from "../chart-pie-donuts";
import { ChartConfig } from "../ui/chart";
import { useTransactionStore } from "@/lib/store/useTransactionStore";
import {
  formatExpensesCategories,
  getCurrentMonthExpensesByCategory,
} from "@/lib";

const chartData = [
  { category: "alimentacion", expenses: 275, fill: "var(--color-food)" },
  { category: "comprasOnline", expenses: 200, fill: "var(--color-shopping)" },
  { category: "hogar", expenses: 187, fill: "var(--color-housing)" },
  {
    category: "transportePublico",
    expenses: 173,
    fill: "var(--color-transportation)",
  },
  {
    category: "suscripciones",
    expenses: 150,
    fill: "var(--color-subscription)",
  },
  { category: "saludDeporte", expenses: 125, fill: "var(--color-fitness)" },
  { category: "ropa", expenses: 110, fill: "var(--color-clothing)" },
  { category: "finanzas", expenses: 95, fill: "var(--color-finance)" },
  { category: "restauracion", expenses: 90, fill: "var(--color-dining)" },
  { category: "salud", expenses: 80, fill: "var(--color-health)" },
];

const chartConfig = {
  expenses: {
    label: "Porcentaje",
  },
  alimentacion: {
    label: "Alimentación",
    color: "var(--color-food)",
  },
  comprasOnline: {
    label: "Compras Online",
    color: "var(--color-shopping)",
  },
  hogar: {
    label: "Hogar",
    color: "var(--color-housing)",
  },
  transportePublico: {
    label: "Transporte Público",
    color: "var(--color-transportation)",
  },
  suscripciones: {
    label: "Suscripciones",
    color: "var(--color-subscription)",
  },
  saludDeporte: {
    label: "Salud y Deporte",
    color: "var(--color-fitness)",
  },
  ropa: {
    label: "Ropa",
    color: "var(--color-clothing)",
  },
  finanzas: {
    label: "Finanzas",
    color: "var(--color-finance)",
  },
  restauracion: {
    label: "Restauración",
    color: "var(--color-dining)",
  },
  salud: {
    label: "Salud",
    color: "var(--color-health)",
  },
} satisfies ChartConfig;

export function CategoryExpenses() {
  const { transactions } = useTransactionStore();

  const currentMonthExpensesByCategory =
    getCurrentMonthExpensesByCategory(transactions);

  const formattedExpensesCategories = formatExpensesCategories(
    currentMonthExpensesByCategory,
  );

  console.log("Current Month Categories: ", currentMonthExpensesByCategory);

  return (
    <Card className="flex flex-col justify-between border-none">
      <CardHeader className="flex flex-col gap-3">
        <CardTitle className="text-muted-foreground text-2xl font-bold">
          Categorías de Gastos
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <ChartPieDonut
          expensesCategories={formattedExpensesCategories}
          chartConfig={chartConfig}
          chartData={chartData}
        />
      </CardContent>
    </Card>
  );
}
