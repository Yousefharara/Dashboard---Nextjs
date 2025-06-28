import OrderTable from "@/components/features/orders/OrderTable";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Orders</h2>
      <OrderTable />
    </div>
  );
};

export default Page;
