import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransactionStore } from "@/lib/store/useTransactionStore";
import { formatRecentTransactions } from "@/lib/helpers/transactions";

// Ahora puedo crear un array de transacciones recientes
// con los datos de las categorias y el icono segun la categoria

// const recentTransactions = [
//   {
//     name: "Food",
//     value: 45,
//     fill: "var(--color-food)",
//     category: "Dining",
//     date: "Apr 24",
//     icon: PiForkKnifeFill,
//   },
//   {
//     name: "Shopping",
//     value: 129,
//     fill: "var(--color-shopping)",
//     category: "Shopping",
//     date: "Apr 22",
//     icon: IoMdBriefcase,
//   },
//   {
//     name: "Housing",
//     value: 650,
//     fill: "var(--color-housing)",
//     category: "Housing",
//     date: "Apr 20",
//     icon: FaHouse,
//   },
//   {
//     name: "Transportation",
//     value: 30,
//     fill: "var(--color-transportation)",
//     category: "Housing",
//     date: "Apr 18",
//     icon: FaBusSimple,
//   },
// ];

export function RecentTransactions() {
  const { transactions } = useTransactionStore();

  const recentTransactions = formatRecentTransactions(transactions);

  return (
    <Card className="flex flex-col gap-16 border-none">
      <CardHeader className="flex flex-col gap-3">
        <CardTitle className="text-muted-foreground text-2xl font-bold">
          Transacciones Recientes
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <ul className="flex h-full w-full flex-col justify-center gap-4">
          {recentTransactions.map((transaction) => {
            const Icon = transaction.icon;

            return (
              <li
                key={transaction.categoria}
                className="flex items-center gap-4"
              >
                <div className="relative">
                  <div
                    className="size-10 rounded-full"
                    style={{ backgroundColor: transaction.fill }}
                  />
                  <Icon className="absolute inset-0 m-auto size-6 text-white" />
                </div>
                <div className="flex w-full flex-col">
                  <h3>{transaction.categoria}</h3>
                  <span className="text-muted-foreground text-md">
                    {transaction.fecha_valor}
                  </span>
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  {transaction.importe.toFixed(2)}€
                </span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
