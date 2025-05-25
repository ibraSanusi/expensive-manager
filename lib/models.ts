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
