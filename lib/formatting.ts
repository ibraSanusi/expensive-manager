// formatting.ts
import { categoryMap, DEFAULT_FILL, DEFAULT_ICON } from "./categories";
import type { Transaction } from "./models";
import { guessCategory } from "./categorization";

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
