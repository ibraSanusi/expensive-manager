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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="cursor-pointer">
              <Pencil />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Selecciona el importe máximo</DialogTitle>
              <DialogDescription>
                <Input
                  className="text-2xl"
                  type="number"
                  value={budgetInput}
                  onChange={handleInputChange}
                  placeholder="Presupuesto mensual"
                />
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={() => setBudget(budgetInput)}>Guardar</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setBudget(DEFAULT_BUDGET);
                    setBudgetInput(DEFAULT_BUDGET);
                  }}
                >
                  Restablecer
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
