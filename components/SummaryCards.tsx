import React from "react";

import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinearChart } from "./chart";
import { Progress } from "./ui/progress";
import { ChartPieDonut } from "./chart-pie-donuts";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoMdBriefcase } from "react-icons/io";
import { FaBusSimple, FaHouse } from "react-icons/fa6";

function SummaryCards() {
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

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold">Gastos</CardTitle>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="grid grid-rows-2 gap-6">
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-col gap-3">
              <CardTitle className="font-bold text-muted-foreground">
                Gastos Mensuales
              </CardTitle>
              <span className="text-4xl font-bold">2.302€</span>
            </CardHeader>
            <LinearChart />
          </Card>

          <Card className="flex flex-col justify-between">
            <CardHeader className="flex flex-col gap-3">
              <CardTitle className="font-bold text-muted-foreground">
                Gastos Totales
              </CardTitle>
              <span className="text-5xl font-bold">4.568€</span>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <span className="text-muted-foreground text-xl">Budget</span>
              <Progress value={33} />
            </CardContent>
            <CardFooter>
              <span className="text-4xl">5.000€</span>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-2 border border-border rounded-xl">
          <Card className="flex flex-col justify-between border-none">
            <CardHeader className="flex flex-col gap-3">
              <CardTitle className="font-bold text-2xl text-muted-foreground">
                Categorías de Gastos
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <ChartPieDonut />
            </CardContent>
          </Card>

          <Card className="flex flex-col border-none gap-16">
            <CardHeader className="flex flex-col gap-3">
              <CardTitle className="font-bold text-2xl text-muted-foreground">
                Transacciones Recientes
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <ul className="flex flex-col justify-center gap-4 w-full h-full">
                {recentTransactions.map((transaction) => {
                  const Icon = transaction.icon;

                  return (
                    <li
                      key={transaction.name}
                      className="flex items-center gap-4"
                    >
                      <div className="relative">
                        <div
                          className="size-10 rounded-full"
                          style={{ backgroundColor: transaction.fill }}
                        />
                        <Icon className="size-6 absolute inset-0 m-auto text-white" />
                      </div>
                      <div className="flex flex-col w-full">
                        <h3>{transaction.category}</h3>
                        <span className="text-muted-foreground text-md">
                          {transaction.date}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        -${transaction.value}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}

export default SummaryCards;
