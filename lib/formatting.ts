// formatting.ts
import { categoryMap, DEFAULT_FILL, DEFAULT_ICON } from "./categories";
import type { Transaction } from "./models";
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
