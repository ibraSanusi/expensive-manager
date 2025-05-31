// models.ts
import type { ElementType } from "react";

export type Transaction = {
  fecha_operacion: string;
  fecha_valor: string;
  concepto: string;
  importe: number;
  saldo: number;
  divisa: string;
  categoria?: string;
};

export type MonthlyExpensesType = {
  month: string;
  gastos: number;
};

export type CategoryData = {
  icon: ElementType;
  fill: string;
};

export type RecentTransaction = {
  categoria: string | undefined;
  fill: string;
  icon: ElementType;
  fecha_operacion: string;
  fecha_valor: string;
  concepto: string;
  importe: number;
  saldo: number;
  divisa: string;
};

export type CategoryExpense = {
  category: string;
  total: number;
};
