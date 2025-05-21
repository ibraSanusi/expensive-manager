import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoMdBriefcase } from "react-icons/io";
import { FaBusSimple, FaHouse } from "react-icons/fa6";

const recentTransactions = [
  {
    name: "Food",
    value: 45,
    fill: "var(--color-food)",
    category: "Dining",
    date: "Apr 24",
    icon: PiForkKnifeFill,
  },
  {
    name: "Shopping",
    value: 129,
    fill: "var(--color-shopping)",
    category: "Shopping",
    date: "Apr 22",
    icon: IoMdBriefcase,
  },
  {
    name: "Housing",
    value: 650,
    fill: "var(--color-housing)",
    category: "Housing",
    date: "Apr 20",
    icon: FaHouse,
  },
  {
    name: "Transportation",
    value: 30,
    fill: "var(--color-transportation)",
    category: "Housing",
    date: "Apr 18",
    icon: FaBusSimple,
  },
];

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
          {recentTransactions.map((transaction) => {
            const Icon = transaction.icon;

            return (
              <li key={transaction.name} className="flex items-center gap-4">
                <div className="relative">
                  <div
                    className="size-10 rounded-full"
                    style={{ backgroundColor: transaction.fill }}
                  />
                  <Icon className="absolute inset-0 m-auto size-6 text-white" />
                </div>
                <div className="flex w-full flex-col">
                  <h3>{transaction.category}</h3>
                  <span className="text-muted-foreground text-md">
                    {transaction.date}
                  </span>
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  -${transaction.value}
                </span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
