// src/store/useTransactionStore.ts
import { create } from "zustand";
import { Transaction } from "../models";

type State = {
  transactions: Transaction[];
  addTransaction: (t: Transaction) => void;
  addTransactions: (t: Transaction[]) => void;
  setTransactions: (t: Transaction[]) => void; // Set transactions directly (initial load)
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
  setTransactions: (tArray) => set({ transactions: tArray }),
  clearTransactions: () => set({ transactions: [] }),
}));
