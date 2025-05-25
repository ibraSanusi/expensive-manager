// expenses.ts
import type { Transaction, MonthlyExpensesType } from "./models";

export function getExpensesByMonth(
  transactions: Transaction[],
): MonthlyExpensesType[] {
  const expensesByMonth: Record<string, number> = {};

  transactions.forEach(({ fecha_operacion, importe }) => {
    const month = new Date(fecha_operacion).toLocaleString("default", {
      month: "long",
    });
    if (importe < 0)
      expensesByMonth[month] =
        (expensesByMonth[month] || 0) + Math.abs(importe);
  });

  return Object.entries(expensesByMonth).map(([month, gastos]) => ({
    month,
    gastos,
  }));
}

export function getAverageExpenses(
  monthlyExpenses: MonthlyExpensesType[],
): string {
  if (monthlyExpenses.length === 0) return "0.00";
  const total = monthlyExpenses.reduce((acc, { gastos }) => acc + gastos, 0);
  return (total / monthlyExpenses.length).toFixed(2);
}

export function getMonthlyExpenses(transactions: Transaction[]): number {
  const now = new Date();
  return transactions.reduce((acc, { fecha_valor, importe }) => {
    const date = new Date(fecha_valor);
    if (
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear() &&
      importe < 0
    ) {
      return acc + Math.abs(importe);
    }
    return acc;
  }, 0);
}
