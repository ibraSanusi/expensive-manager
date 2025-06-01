"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useTransactionStore } from "@/lib/store/useTransactionStore";
import { formatRecentTransactions, RecentTransaction } from "@/lib";

export function RecentTransactionsSrollArea() {
  const { transactions } = useTransactionStore();

  const recentTransactions: RecentTransaction[] =
    formatRecentTransactions(transactions);

  console.log("Recent Transactions:", recentTransactions);

  return (
    <ScrollArea className="h-96 w-full rounded-md border">
      <ul className="p-4">
        {recentTransactions.map((transaction) => {
          const Icon = transaction.icon;

          return (
            <li key={transaction.categoria} className="flex items-center gap-4">
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
                {transaction.importe}€
              </span>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  );
}
