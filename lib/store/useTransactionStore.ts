// src/store/useTransactionStore.ts
import { create } from "zustand";

export type Transaction = {
  fecha_operacion: string;
  fecha_valor: string;
  concepto: string;
  importe: number;
  saldo: number;
  divisa: string;
  categoria?: string;
};

type State = {
  transactions: Transaction[];
  addTransaction: (t: Transaction) => void;
  addTransactions: (t: Transaction[]) => void;
  clearTransactions: () => void;
};

export const useTransactionStore = create<State>((set) => ({
  transactions: [],
  addTransaction: (t) =>
    set((state) => ({
      transactions: [...state.transactions, t],
    })),
  addTransactions: (tArray) =>
    set((state) => ({
      transactions: [...state.transactions, ...tArray],
    })),
  clearTransactions: () => set({ transactions: [] }),
}));
