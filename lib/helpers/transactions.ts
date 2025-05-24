import { Transaction } from "../store/useTransactionStore";

/**
 * @description This function takes an array of transactions and returns the total expenses grouped by month.
 * It returns an array of objects with the month name and the total expenses for that month.
 * @param transactions Array of transactions to calculate expenses from.
 * @returns Array of objects with month and total expenses.
 */
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

function categorizeTransaction(concepto: string): string {
  const c = concepto.toLowerCase();
  if (c.includes("nómina")) return "Nómina";
  if (c.includes("devoluciones")) return "Devolución";
  if (c.includes("supermercado")) return "Alimentación";
  if (c.includes("gasolinera")) return "Transporte";
  if (c.includes("zara")) return "Ropa";
  if (c.includes("amazon")) return "Compras Online";
  if (c.includes("restaurante")) return "Restauración";
  if (c.includes("luz") || c.includes("iberdrola")) return "Servicios";
  if (c.includes("transferencia a favor")) return "Transferencia a terceros";
  return "Otros";
}

/**
 *
 * @param transactions Array of transactions to categorize.
 * @description This function takes an array of transactions and categorizes each transaction based on its concept.
 * It adds a new property `categoria` to each transaction object.
 * @returns Transaction objects with an additional `categoria` property.
 */
export function getTransactionsWithCategories(transactions: Transaction[]) {
  return transactions.map((transaction) => {
    const categoria = categorizeTransaction(transaction.concepto);
    return { ...transaction, categoria };
  });
}

/**
 *
 * @param transactions Array of transactions to calculate monthly expenses.
 * @description This function calculates the total expenses for the current month from a list of transactions.
 * @returns number - The total expenses for the current month.
 */
export function getMonthlyExpenses(transactions: Transaction[]) {
  return transactions.reduce((acc, transaction) => {
    // Comprobar si la transaccion es del mes actual
    const transactionDate = new Date(transaction.fecha_valor);
    const currentDate = new Date();

    if (
      transactionDate.getMonth() !== currentDate.getMonth() &&
      transactionDate.getFullYear() !== currentDate.getFullYear()
    )
      return acc;

    // Comprobar si la transaccion es un gasto
    if (transaction.importe < 0) return acc + Math.abs(transaction.importe);

    return acc;
  }, 0);
}
