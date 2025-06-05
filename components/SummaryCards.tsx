import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MonthlyExpenses } from "./summary/MonthlyExpenses";
import { TotalExpenses } from "./summary/TotalExpenses";
import { CategoryExpenses } from "./summary/CategoryExpenses";
import { RecentTransactions } from "./summary/RecentTransactions";
import FileUpload from "./FileUpload";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";

function SummaryCards() {
  const [open, setOpen] = useState(false); // Estado de apertura

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold">Gastos</CardTitle>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Import</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload File</DialogTitle>
              <DialogDescription>
                <FileUpload onUploadSuccess={() => setOpen(false)} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
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
