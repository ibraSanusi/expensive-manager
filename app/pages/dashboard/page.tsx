"use client";

import MainLayout from "@/components/mainLayout";
import SummaryCards from "@/components/summaryCards";
import {
  Transaction,
  useTransactionStore,
} from "@/lib/store/useTransactionStore";
import { useEffect } from "react";
import rawTransactions from "@/lib/mocks/transactions.json";

// Cuando se cargue la página, se cargan las transacciones
// desde el archivo JSON y se añaden al store de Zustand
// para que estén disponibles en toda la aplicación
// y se puedan usar en los componentes que lo necesiten.
export default function Home() {
  const addTransactions = useTransactionStore((state) => state.addTransactions);
  const transactions = rawTransactions as Transaction[];

  useEffect(() => {
    addTransactions(transactions);
  }, []);

  return (
    <MainLayout>
      <SummaryCards />
    </MainLayout>
  );
}
