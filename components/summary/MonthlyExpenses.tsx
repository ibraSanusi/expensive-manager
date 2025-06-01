import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransactionStore } from "@/lib/store/useTransactionStore";
import { LinearChart } from "../chart";
import { getAverageExpenses, getExpensesByMonth } from "@/lib";

/**
 * Componente que muestra los gastos mensuales.
 * Utiliza el store de transacciones para obtener los datos necesarios.
 * Muestra un gráfico lineal con los gastos por mes y el promedio de gastos mensuales.
 */
export function MonthlyExpenses() {
  const transactions = useTransactionStore((state) => state.transactions);
  const monthlyExpenses = getExpensesByMonth(transactions);
  const averageExpenses = getAverageExpenses(monthlyExpenses);

  return (
    <Card>
      <CardHeader className="flex flex-col gap-3">
        <CardTitle className="text-muted-foreground font-bold">
          Gastos Mensuales
        </CardTitle>
        <span className="text-4xl font-bold">{averageExpenses}€</span>
      </CardHeader>
      <LinearChart chartData={monthlyExpenses} />
    </Card>
  );
}
