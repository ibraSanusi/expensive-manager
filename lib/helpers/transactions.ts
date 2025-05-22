import { Transaction } from "../store/useTransactionStore";

export function getExpensesByMonth(transactions: Transaction[]) {
  const expensesByMonth: Record<string, number> = {};

  transactions.forEach((transaction) => {
    const month = new Date(transaction.fecha_operacion).toLocaleString(
      "default",
      {
        month: "long",
      },
    );

    if (!expensesByMonth[month]) {
      expensesByMonth[month] = 0;
    }

    // Solo sumar si el importe es negativo (gasto)
    if (transaction.importe < 0) {
      expensesByMonth[month] += Math.abs(transaction.importe);
    }
  });

  return Object.entries(expensesByMonth).map(([month, gastos]) => ({
    month,
    gastos,
  }));
}

type MonthlyExpensesType = {
  month: string;
  gastos: number;
};

export function getAverageExpenses(monthlyExpenses: MonthlyExpensesType[]) {
  const totalExpenses = monthlyExpenses.reduce(
    (acc, curr) => acc + curr.gastos,
    0,
  );
  return (totalExpenses / monthlyExpenses.length).toFixed(2);
}
