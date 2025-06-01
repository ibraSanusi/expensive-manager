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

const MONEY_TO_EXPENSE = 1200; // Presupuesto mensual

/**
 * Componente que muestra los gastos totales del mes actual.
 * Utiliza el store de transacciones para obtener los datos necesarios.
 */
export function TotalExpenses() {
  const { transactions } = useTransactionStore();
  // Recuperar los gastos totales del mes en curso
  const totalExpenses = getCurrentMonthExpenses(transactions);

  const progressPercentage = (totalExpenses / MONEY_TO_EXPENSE) * 100;
  const progressValue = Math.trunc(Math.min(progressPercentage, 100)); // Asegurarse de que no supere el 100%

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex flex-col gap-3">
        <CardTitle className="text-muted-foreground font-bold">
          Gastos Totales
        </CardTitle>
        <span className="text-5xl font-bold">{totalExpenses.toFixed(2)}€</span>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <span className="text-muted-foreground text-xl">Budget</span>
        <Progress value={progressValue} />
      </CardContent>
      <CardFooter>
        <span className="text-4xl">{MONEY_TO_EXPENSE}€</span>
      </CardFooter>
    </Card>
  );
}
