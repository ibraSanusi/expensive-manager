import Papa, { ParseResult } from "papaparse";
import * as XLSX from "xlsx";
import { getTransactionsWithCategories, type Transaction } from "@/lib";

/**
 * Parsea un archivo .xlsx y devuelve las transacciones con categorías aplicadas.
 * @param file Archivo .xlsx subido por el usuario
 * @returns Promise<Transaction[]> con los datos del Excel convertidos y categorizados
 */
export async function parseXlsxFile(file: File): Promise<Transaction[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target!.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });

        const firstSheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[firstSheetName];

        const rows: unknown[][] = XLSX.utils.sheet_to_json(sheet, {
          header: 1,
          blankrows: false,
        });

        // Buscar la fila con encabezados reales
        const headerIndex = rows.findIndex((row) =>
          row[0]?.toString().toLowerCase().includes("fecha operación"),
        );

        if (headerIndex === -1) {
          throw new Error("Encabezados de movimientos no encontrados");
        }

        const dataRows = rows.slice(headerIndex + 1); // filas de datos

        const transactions: Transaction[] = dataRows
          .filter((row) => row.length >= 6)
          .map((row) => ({
            fecha_operacion: parseDate(row[0]),
            fecha_valor: parseDate(row[1]),
            concepto: String(row[2]).trim(),
            importe: toNumber(row[3]),
            saldo: toNumber(row[4]),
            divisa: String(row[5] || "EUR").trim(),
          }));

        const categorized = getTransactionsWithCategories(transactions);
        resolve(categorized);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
}

function parseDate(value: unknown): string {
  if (typeof value === "string") {
    const [day, month, year] = value.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  return String(value);
}

function toNumber(value: unknown): number {
  if (typeof value === "string") {
    return parseFloat(
      value.replace(/\./g, "").replace(",", ".").replace("−", "-"),
    );
  }
  return Number(value);
}

/**
 * Procesa un archivo CSV y retorna una promesa con una lista de transacciones parseadas.
 *
 * Utiliza FileReader para leer el archivo como texto y PapaParse para convertir el contenido CSV en objetos.
 * Se espera que el archivo tenga encabezados en la primera fila y que cada fila represente una transacción.
 *
 * @param {File} file - El archivo CSV que se desea procesar.
 * @returns {Promise<Transaction[]>} - Promesa que se resuelve con un array de objetos tipo Transaction.
 *
 * @example
 * const file = event.target.files[0];
 * const transactions = await handleFile(file);
 * setTransactions(transactions);
 */
export function handleFile(file: File): Promise<Transaction[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const text = reader.result as string;

      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const transactions = result.data as Transaction[];
          resolve(transactions);
        },
        error: (error: unknown) => {
          console.error("CSV parse error:", error);
          reject(error);
        },
      });
    };

    reader.onerror = (err) => {
      reject(err);
    };

    reader.readAsText(file);
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
