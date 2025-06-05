import React from "react";
import { useTransactionStore } from "@/lib/store/useTransactionStore";
import { handleFile, parseXlsxFile } from "@/lib/upload";
import { FileUploadProps } from "@/lib";

import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function FileUpload({ onUploadSuccess }: FileUploadProps) {
  const setTransactions = useTransactionStore((state) => state.setTransactions);
  const clearTransactions = useTransactionStore(
    (state) => state.clearTransactions,
  );

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    clearTransactions(); // Limpiar transacciones antes de cargar un nuevo archivo

    const fileName = file.name.toLowerCase();
    const isCsv = fileName.endsWith(".csv");
    const isXlsx = fileName.endsWith(".xlsx");

    try {
      if (isCsv) {
        const parsed = await handleFile(file);
        setTransactions(parsed);
      } else if (isXlsx) {
        const parsed = await parseXlsxFile(file);
        setTransactions(parsed);
      } else {
        console.warn("Unsupported file type:", file.type);
        alert("Unsupported file type. Please upload a .csv or .xlsx file.");
      }
    } catch (error) {
      console.error("Error processing file:", error);
      alert("Error processing file. Please check the format and try again.");
    } finally {
      e.target.value = "";

      await delay(500);
      onUploadSuccess?.(); // Llamar al callback si se proporciona
      toast.success("Archivo subido correctamente", {
        icon: <CheckCircle className="text-green-500" />,
        duration: 2500,
      });
    }
  };

  return (
    <form className="flex w-full items-center justify-center">
      <label
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            CSV or XLSX files (bank statements, max size 5MB)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          accept=".csv,.xlsx"
          className="hidden"
          onChange={onFileChange}
        />
      </label>
    </form>
  );
}
