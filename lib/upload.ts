import Papa, { ParseResult } from "papaparse";
import { getTransactionsWithCategories, type Transaction } from "@/lib";

export const handleFile = (
  file: File,
  setTransactions: (t: Transaction[]) => void,
) => {
  const reader = new FileReader();

  reader.onload = () => {
    const text = reader.result as string;

    Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const transactions = result.data as Transaction[];
        setTransactions(transactions);
      },
      error: (error: unknown) => {
        console.error("CSV parse error:", error);
      },
    });
  };

  reader.readAsText(file);
};

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
