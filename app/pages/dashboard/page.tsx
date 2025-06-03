"use client";

import MainLayout from "@/components/MainLayout";
import SummaryCards from "@/components/SummaryCards";
// import { useTransactionStore } from "@/lib/store/useTransactionStore";
// import { useEffect } from "react";

// import { parseCsv } from "@/lib/upload";

// const csvContent = `fecha_operacion,fecha_valor,concepto,importe,saldo,divisa
// 2025-01-15,2025-01-15,TRANSFERENCIA NÓMINA,1200.00,1200.00,EUR
// 2025-01-18,2025-01-18,COMPRA SUPERMERCADO,-150.20,1049.80,EUR
// 2025-02-05,2025-02-05,COMPRA GASOLINERA,-60.50,989.30,EUR
// 2025-02-28,2025-02-28,TRANSFERENCIA NÓMINA,1200.00,2189.30,EUR
// 2025-03-10,2025-03-10,COMPRA ZARA,-87.35,2101.95,EUR
// 2025-03-21,2025-03-21,RECIBO LUZ,-110.00,1991.95,EUR
// 2025-04-01,2025-04-01,COMPRA BIZUM AMAZON,-45.99,1945.96,EUR
// 2025-04-15,2025-04-15,TRANSFERENCIA NÓMINA,1200.00,3145.96,EUR
// 2025-04-20,2025-04-20,RESTAURANTE,-66.20,3079.76,EUR
// 2025-05-01,2025-05-01,COMPRA SUPERMERCADO,-82.40,2997.36,EUR
// 2025-05-04,2025-05-04,COMPRA BIZUM MERCADONA,-32.15,2965.21,EUR
// 2025-05-10,2025-05-10,RECIBO AGUA,-38.50,2926.71,EUR
// 2025-05-12,2025-05-12,COMPRA ALIEXPRESS,-21.99,2904.72,EUR
// 2025-05-15,2025-05-15,TRANSFERENCIA NÓMINA,1200.00,4104.72,EUR
// 2025-05-16,2025-05-16,SUSCRIPCIÓN NETFLIX,-12.99,4091.73,EUR
// 2025-05-17,2025-05-17,COMPRA BIZUM BIZUM IBERDROLA,-99.01,3992.72,EUR
// 2025-05-18,2025-05-18,COMPRA BIZUM BIZUM IBERDROLA,-124.18,3868.54,EUR
// 2025-05-19,2025-05-19,TRANSFERENCIA A FAVOR DE IES Africa,132.11,4000.65,EUR
// 2025-05-20,2025-05-20,COMPRA Revolut**4750*,68.11,3932.54,EUR
// 2025-05-21,2025-05-21,TRANSFERENCIA DE DEVOLUCIONES TRIBUTARIAS,138.94,4071.48,EUR
// 2025-05-27,2025-05-27,RESTAURANTE BURGER KING,-23.90,4047.58,EUR
// 2025-05-29,2025-05-29,COMPRA FNAC,-76.30,3971.28,EUR
// 2025-06-01,2025-06-01,COMPRA SUPERMERCADO,-54.80,3916.48,EUR
// 2025-06-03,2025-06-03,SUSCRIPCIÓN SPOTIFY,-9.99,3906.49,EUR
// 2025-06-05,2025-06-05,RECIBO TELÉFONO,-35.50,3870.99,EUR
// 2025-06-10,2025-06-10,TRANSFERENCIA NÓMINA,1200.00,5070.99,EUR
// 2025-06-12,2025-06-12,COMPRA BIZUM DECATHLON,-65.00,5005.99,EUR
// 2025-06-15,2025-06-15,COMPRA AMAZON,-88.75,4917.24,EUR
// 2025-06-18,2025-06-18,RESTAURANTE,-48.20,4869.04,EUR
// 2025-06-20,2025-06-20,COMPRA GASOLINERA,-57.30,4811.74,EUR
// 2025-06-25,2025-06-25,RECIBO ELECTRICIDAD,-112.45,4699.29,EUR
// 2025-06-28,2025-06-28,COMPRA FNAC,-72.90,4626.39,EUR`;

// Cuando se cargue la página, se cargan las transacciones
// desde el archivo JSON y se añaden al store de Zustand
// para que estén disponibles en toda la aplicación
// y se puedan usar en los componentes que lo necesiten.
export default function Home() {
  // const setTransactions = useTransactionStore((state) => state.setTransactions);
  // const transactions = useTransactionStore((state) => state.transactions);

  // useEffect(() => {
  //   if (transactions.length === 0) {
  //     parseCsv(csvContent, setTransactions);
  //   }
  // }, [transactions, setTransactions]);

  // console.log("Transactions loaded:", transactions);

  return (
    <MainLayout>
      <SummaryCards />
    </MainLayout>
  );
}
