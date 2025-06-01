import Papa, { ParseResult } from "papaparse";
import { getTransactionsWithCategories, type Transaction } from "@/lib";

export function handleFile(file: File): Promise<Transaction[]> {
  return new Promise((resolve, reject) => {
    Papa.parse<Transaction>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results: ParseResult<Transaction>) => {
        if (results.errors.length) {
          reject(results.errors);
        } else {
          resolve(results.data);
        }
      },
      error: (error) => {
        reject(error);
      },
    });
  });
}

export async function parseCsv(
  csvContent: string,
  addTransactions: (transactions: Transaction[]) => void,
) {
  Papa.parse<Transaction>(csvContent, {
    header: true,
    skipEmptyLines: true,
    complete: (results: ParseResult<Transaction>) => {
      // Obtiene las transacciones categorizadas automáticamente
      const transactionsWithCategories = getTransactionsWithCategories(
        results.data,
      );
      addTransactions(transactionsWithCategories);
    },
  });
}
