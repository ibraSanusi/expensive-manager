"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "../ui/progress";
import { useTransactionStore } from "@/lib/store/useTransactionStore";
import { getCurrentMonthExpenses } from "@/lib";
import { useState } from "react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";

const DEFAULT_BUDGET = 1200;

export function TotalExpenses() {
  const transactions = useTransactionStore((state) => state.transactions);
  const [budget, setBudget] = useState(DEFAULT_BUDGET);
  const [budgetInput, setBudgetInput] = useState(DEFAULT_BUDGET);

  const totalExpenses = getCurrentMonthExpenses(transactions);
  const progressPercentage = (totalExpenses / budget) * 100;
  const progressValue = Math.trunc(Math.min(progressPercentage, 100));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = parseFloat(e.target.value);
    setBudgetInput(isNaN(numericValue) ? 0 : numericValue);
  };

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex flex-col gap-3">
        <CardTitle className="text-muted-foreground font-bold">
          Gastos Totales
        </CardTitle>
        <span className="text-5xl font-bold">{totalExpenses.toFixed(2)}€</span>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <span className="text-muted-foreground text-xl">Presupuesto</span>
        <Progress value={progressValue} />
      </CardContent>

      <CardFooter className="flex items-center gap-2">
        <span className="text-4xl">{budget}€</span>

        <Popover>
          <PopoverTrigger asChild>
            <Button aria-label="Editar presupuesto">
              <Pencil />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-72 p-4">
            <div className="flex flex-col gap-4">
              <label htmlFor="budgetInput" className="font-semibold">
                Selecciona el importe máximo
              </label>
              <Input
                id="budgetInput"
                type="number"
                value={budgetInput}
                onChange={handleInputChange}
                placeholder="Presupuesto mensual"
                className="text-2xl"
              />
              <div className="flex justify-end gap-2">
                <Button
                  onClick={() => setBudget(budgetInput)}
                  className="min-w-[80px]"
                >
                  Guardar
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setBudget(DEFAULT_BUDGET);
                    setBudgetInput(DEFAULT_BUDGET);
                  }}
                  className="min-w-[80px]"
                >
                  Restablecer
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </CardFooter>
    </Card>
  );
}
