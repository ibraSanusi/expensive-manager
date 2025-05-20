import MainLayout from "@/components/MainLayout";
// import ChartByCategory from "@/components/ChartByCategory";
import SummaryCards from "@/components/SummaryCards";
// import TransactionTable from "@/components/TransactionTable";

export default function Home() {
  return (
    <MainLayout>
      <SummaryCards />
      {/* <ChartByCategory />
      <TransactionTable /> */}
    </MainLayout>
  );
}
