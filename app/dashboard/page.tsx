import Content from "@/components/features/dashboard/Content";
import MostActiveCustomersChart from "@/components/features/dashboard/MostActiveCustomersChart";
import { OrderTable } from "@/components/features/dashboard/OrderTable";
import SalesChart from "@/components/features/dashboard/SalesChart";
import TopSellingProductsChart from "@/components/features/dashboard/TopSellingProductsChart";

export default function Page() {
  return (
    <>
      <Content />
      <div className="grid w-full auto-rows-min grid-cols-1 lg:grid-cols-2 gap-4">
        <SalesChart />
        <MostActiveCustomersChart />
        <TopSellingProductsChart />
        
      </div>
      <div className="w-full">
        <OrderTable />
      </div>

    </>
  );
}
