// formatting.ts
import { categoryMap, DEFAULT_FILL, DEFAULT_ICON } from "./categories";
import type { CategoryExpense, Transaction } from "./models";
import { guessCategory } from "./categorization";

/**
 * Formatea una lista de transacciones recientes, agregando información visual como iconos y colores.
 *
 * @param transactions - Array de transacciones a formatear.
 * @returns Array de transacciones enriquecidas con categoría, color (`fill`) e ícono (`icon`).
 *
 * @description
 * - Usa `guessCategory` para determinar la categoría si no está presente.
 * - Luego obtiene la información visual desde `categoryMap`, o usa valores por defecto si no se encuentra la categoría.
 */
export function formatRecentTransactions(transactions: Transaction[]) {
  return transactions.map((transaction) => {
    const categoria = guessCategory(transaction);
    const categoryData = categoria ? categoryMap.get(categoria) : undefined;

    return {
      ...transaction,
      categoria,
      fill: categoryData?.fill ?? DEFAULT_FILL,
      icon: categoryData?.icon ?? DEFAULT_ICON,
    };
  });
}

const expensesCategories = [
  { name: "Alimentación", value: 0.183, fill: "var(--color-food)" },
  { name: "Compras Online", value: 0.133, fill: "var(--color-shopping)" },
  { name: "Hogar", value: 0.125, fill: "var(--color-housing)" },
  {
    name: "Transporte Público",
    value: 0.115,
    fill: "var(--color-transportation)",
  },
  { name: "Suscripciones", value: 0.1, fill: "var(--color-subscription)" },
  { name: "Salud y Deporte", value: 0.083, fill: "var(--color-fitness)" },
  { name: "Ropa", value: 0.073, fill: "var(--color-clothing)" },
  { name: "Finanzas", value: 0.063, fill: "var(--color-finance)" },
  { name: "Restauración", value: 0.06, fill: "var(--color-dining)" },
  { name: "Salud", value: 0.053, fill: "var(--color-health)" },
];

export function formatExpensesCategories(
  currentMonthExpensesByCategory: CategoryExpense[],
) {
  const totalExpenses = currentMonthExpensesByCategory.reduce(
    (acc, expense) => acc + expense.total,
    0,
  );

  return currentMonthExpensesByCategory.map((expense) => {
    const category = expensesCategories.find(
      (cat) => cat.name.toLowerCase() === expense.category.toLowerCase(),
    );
    return {
      name: expense.category,
      value: parseFloat((expense.total / totalExpenses).toFixed(4)),
      fill: category ? category.fill : "var(--color-others)",
    };
  });
}
