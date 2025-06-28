import PaymentsTable from "@/components/features/payments/PaymentTable";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Payments</h2>
      <PaymentsTable />
    </div>
  );
};

export default Page;
