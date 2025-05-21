import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MonthlyExpenses } from "./summary/MonthlyExpenses";
import { TotalExpenses } from "./summary/TotalExpenses";
import { CategoryExpenses } from "./summary/CategoryExpenses";
import { RecentTransactions } from "./summary/RecentTransactions";

function SummaryCards() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold">Gastos</CardTitle>
        {/* <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
      </CardHeader>
      <CardContent className="grid grid-rows-2 gap-6">
        <div className="grid grid-cols-2 gap-6">
          <MonthlyExpenses />
          <TotalExpenses />
        </div>

        <div className="border-border grid grid-cols-2 rounded-xl border">
          <CategoryExpenses />
          <RecentTransactions />
        </div>
      </CardContent>
    </Card>
  );
}

export default SummaryCards;
