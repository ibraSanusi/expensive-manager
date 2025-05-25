import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransactionStore } from "@/lib/store/useTransactionStore";
import { formatRecentTransactions, RecentTransaction } from "@/lib";
import { RecentTransactionsSrollArea } from "../scroll-area-demo";

export function RecentTransactions() {
  const { transactions } = useTransactionStore();

  const recentTransactions: RecentTransaction[] =
    formatRecentTransactions(transactions);

  return (
    <Card className="flex flex-col gap-16 border-none">
      <CardHeader className="flex flex-col gap-3">
        <CardTitle className="text-muted-foreground text-2xl font-bold">
          Transacciones Recientes
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <ul className="flex h-full w-full flex-col justify-center gap-4">
          <RecentTransactionsSrollArea
            recentTransactions={recentTransactions}
          />
        </ul>
      </CardContent>
    </Card>
  );
}
