// categorization.ts
import type { Transaction } from "./models";
import { keywordMap } from "./categories";

export function matchCategory(description: string): string | undefined {
  for (const { keywords, category } of keywordMap) {
    const escapedKeywords = keywords.map((k) =>
      k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    );
    const regex = new RegExp(`\\b(${escapedKeywords.join("|")})\\b`, "i");
    if (regex.test(description)) return category;
  }
  return undefined;
}

export function guessCategory(transaction: Transaction): string | undefined {
  const description = (transaction.concepto ?? "").toLowerCase();
  const matchedCategory = matchCategory(description);
  return matchedCategory ?? transaction.categoria;
}

export function getTransactionsWithCategories(
  transactions: Transaction[],
): Transaction[] {
  return transactions.map((tx) => ({
    ...tx,
    categoria: guessCategory(tx),
  }));
}
