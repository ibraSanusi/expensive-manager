"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useTransactionStore } from "@/lib/store/useTransactionStore";
import { formatRecentTransactions, RecentTransaction } from "@/lib";
import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

export function RecentTransactionsSrollArea() {
  const transactions = useTransactionStore((state) => state.transactions);

  const [recentTransactions, setRecentTransactions] = useState<
    RecentTransaction[]
  >([]);

  useEffect(() => {
    const recentTransactions = formatRecentTransactions(transactions);
    setRecentTransactions(recentTransactions);
  }, [transactions]);

  return (
    <ScrollArea className="h-96 w-full rounded-md border">
      <ul className="p-4">
        {recentTransactions.map((transaction, index) => {
          const Icon = transaction.icon;

          return (
            <li
              key={`${transaction.categoria}-${index}`}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <div
                  className="size-10 rounded-full"
                  style={{ backgroundColor: transaction.fill }}
                />
                <Icon className="absolute inset-0 m-auto size-6 text-white" />
              </div>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex w-full cursor-help flex-col">
                    <h3 className="font-semibold">{transaction.categoria}</h3>
                    <span className="text-muted-foreground text-md">
                      {transaction.fecha_valor}
                    </span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-72 text-sm">
                  {transaction.concepto || "Sin descripción"}
                </HoverCardContent>
              </HoverCard>

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
