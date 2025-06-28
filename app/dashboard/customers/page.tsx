import CustomerTable from "@/components/features/customers/CustomerTable";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Customers</h2>
      <CustomerTable />
    </div>
  );
};

export default Page;
