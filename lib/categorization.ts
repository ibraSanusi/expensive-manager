import type { Transaction } from "./models";
import { keywordMap } from "./categories";

/**
 * Busca una categoría coincidente en base a palabras clave dentro de una descripción.
 *
 * @param description - La descripción del movimiento bancario.
 * @returns El nombre de la categoría encontrada o `undefined` si no hay coincidencias.
 */
export function matchCategory(description: string): string | undefined {
  for (const { keywords, category } of keywordMap) {
    // Escapa caracteres especiales para que funcionen correctamente en RegExp
    const escapedKeywords = keywords.map((k) =>
      k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    );

    // Crea una expresión regular con las palabras clave
    const regex = new RegExp(`\\b(${escapedKeywords.join("|")})\\b`, "i");

    // Si hay coincidencia en la descripción, devuelve la categoría
    if (regex.test(description)) return category;
  }

  return undefined;
}

/**
 * Intenta adivinar la categoría de una transacción basada en su descripción.
 *
 * @param transaction - La transacción a categorizar.
 * @returns El nombre de la categoría detectada o la categoría original si ya existe.
 */
export function guessCategory(transaction: Transaction): string | undefined {
  const description = (transaction.concepto ?? "").toLowerCase();
  const matchedCategory = matchCategory(description);
  return matchedCategory ?? "Otros";
}

/**
 * Devuelve una copia del array de transacciones, con las categorías asignadas automáticamente cuando sea posible.
 *
 * @param transactions - Lista de transacciones a categorizar.
 * @returns Array de transacciones con la propiedad `categoria` actualizada.
 */
export function getTransactionsWithCategories(
  transactions: Transaction[],
): Transaction[] {
  return transactions.map((tx) => ({
    ...tx,
    categoria: guessCategory(tx),
  }));
}
