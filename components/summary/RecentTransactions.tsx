import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { RecentTransactionsSrollArea } from "../scroll-area-demo";

export function RecentTransactions() {
  return (
    <Card className="flex flex-col gap-16 border-none">
      <CardHeader className="flex flex-col gap-3">
        <CardTitle className="text-muted-foreground text-2xl font-bold">
          Transacciones Recientes
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <ul className="flex h-full w-full flex-col justify-center gap-4">
          <RecentTransactionsSrollArea />
        </ul>
      </CardContent>
    </Card>
  );
}
